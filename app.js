"use strict";

/* NARITA AIR QUEST — アプリ本体。 */
const BEST_KEY = "narita-air-quest-best-v1";
const ALL = "__all__";
const LETTERS = ["A", "B", "C", "D"];
const STUDY_TOTAL = 10;
const STUDY_HARD_COUNT = 4;
let gameMode = "challenge"; // "challenge" | "study"
let soundEnabled = false;
let audioContext = null;
let milestoneTimeout = null;

const $ = (id) => document.getElementById(id);

function validQuestion(q) {
  return q && typeof q.id === "string" && typeof q.category === "string" &&
    typeof q.question === "string" && Array.isArray(q.choices) &&
    q.choices.length === 4 && q.choices.every((c) => typeof c === "string" && c.trim()) &&
    Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3 &&
    typeof q.explanation === "string";
}
const raw = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
const questions = raw.filter(validQuestion);
const ids = new Set();
const bank = questions.filter(q => { if (ids.has(q.id)) return false; ids.add(q.id); return true; });
let order = [], currentIndex = 0, streak = 0, answeredCount = 0, locked = false;
let displayedChoices = []; // [{text, originalIndex}] - original answer keys never change
let category = ALL, best = loadBest();

function loadBest() { try { return Math.max(0, parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0); } catch { return 0; } }
function storeBest(v) { try { localStorage.setItem(BEST_KEY, String(v)); } catch { } }
function shuffle(items) { const arr = [...items]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function showScreen(name) {
  for (const id of ["home", "quiz", "result"]) $("screen-" + id).classList.toggle("is-active", id === name);
  window.scrollTo({ top: 0, behavior: "auto" });
}
function updateHome() { $("home-count").textContent = String(bank.length); $("home-best").textContent = String(best); }
function updateAvailable() {
  const n = category === ALL ? bank.length : bank.filter(q => q.category === category).length;
  $("available-caption").textContent = `連続正解チャレンジ：${n}問からランダムに出題 ／ 1問間違えたら終了`;
  $("start-button").disabled = n === 0;
  const hard = bank.filter(q => q.difficulty === "hard").length;
  const normal = bank.length - hard;
  $("study-button").disabled = hard < STUDY_HARD_COUNT || normal < STUDY_TOTAL - STUDY_HARD_COUNT;
}
// 学習モードは全ジャンルから毎回10問（難問4問、通常6問）。
// 未出題問題の答えを一覧表示する機能は設けない。
function selectStudyQuestions() {
  const hard = shuffle(bank.filter(q => q.difficulty === "hard")).slice(0, STUDY_HARD_COUNT);
  const normal = shuffle(bank.filter(q => q.difficulty !== "hard")).slice(0, STUDY_TOTAL - STUDY_HARD_COUNT);
  if (hard.length !== STUDY_HARD_COUNT || normal.length !== STUDY_TOTAL - STUDY_HARD_COUNT) return [];
  return shuffle([...hard, ...normal]);
}
function paintScoreboard() {
  $("score-streak").innerHTML = gameMode === "study"
    ? `${streak} <small>/ ${STUDY_TOTAL}問</small>`
    : `${streak} <small>COMBO</small>`;
  $("score-best").textContent = gameMode === "study" ? `${STUDY_HARD_COUNT}問` : String(best);
}
function updateStudyPanel(correct = null) {
  const panel = $("combo-panel");
  panel.classList.remove("is-ready", "is-low", "is-mid", "is-high", "is-top", "is-wrong", "is-pop");
  panel.classList.add(correct === false ? "is-wrong" : "is-low");
  $("combo-icon").textContent = correct === null ? "📘" : correct ? "✨" : "💡";
  $("combo-title").textContent = correct === null ? "10問で知識を増やそう！"
    : correct ? `正解！ 現在${streak}問正解` : "解説を読んで覚えよう！";
  $("combo-message").textContent = correct === null
    ? "難問4問入り。間違えても10問目まで続けられるよ。"
    : correct ? "さらに深掘りも読んでみよう。" : "今回はここで学べばOK。次の問題へ！";
}
function getComboStage(value) {
  if (value <= 0) return { cls: "is-ready", icon: "🛫", title: "さあ、テイクオフ！", message: "連続正解で、フライトメーターをのばそう！" };
  if (value <= 2) return { cls: "is-low", icon: "😊", title: "ナイススタート！", message: `${value}コンボ達成！ この調子で次もいこう。` };
  if (value <= 4) return { cls: "is-mid", icon: "🚀", title: "ぐんぐん上昇中！", message: `${value}コンボ！ もう空の上だ。` };
  if (value <= 7) return { cls: "is-high", icon: "☁️", title: "巡航モード！", message: `${value}コンボ！ 雲の上まで来たね。` };
  return { cls: "is-top", icon: "🏆", title: "ミラクルフライト！", message: `${value}コンボ！ 最高記録をめざそう！` };
}
function updateComboPanel(value, pop = false, wrong = false) {
  const panel = $("combo-panel");
  const title = $("combo-title");
  const message = $("combo-message");
  const icon = $("combo-icon");
  panel.classList.remove("is-ready", "is-low", "is-mid", "is-high", "is-top", "is-wrong", "is-pop");
  if (wrong) {
    panel.classList.add("is-wrong");
    icon.textContent = "🛬";
    title.textContent = value > 0 ? `${value}コンボでストップ！` : "また挑戦しよう！";
    message.textContent = "解説を読めば、次はもっと遠くまで飛べる！";
  } else {
    const stage = getComboStage(value);
    panel.classList.add(stage.cls);
    icon.textContent = stage.icon;
    title.textContent = stage.title;
    message.textContent = stage.message;
  }
  if (pop) {
    panel.classList.add("is-pop");
    setTimeout(() => panel.classList.remove("is-pop"), 420);
  }
}
function celebrateCombo() {
  const target = $("score-streak");
  target.classList.remove("is-celebrating");
  void target.offsetWidth;
  target.classList.add("is-celebrating");
}
function init() {
  updateHome();
  const categories = [...new Set(bank.map(q => q.category))];
  for (const name of categories) {
    const opt = document.createElement("option");
    opt.value = name; opt.textContent = name; $("category-select").append(opt);
  }
  $("category-select").addEventListener("change", e => { category = e.target.value; updateAvailable(); });
  $("start-button").addEventListener("click", () => start("challenge"));
  $("study-button").addEventListener("click", () => start("study"));
  const toggle = $("sound-toggle");
  toggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    toggle.textContent = soundEnabled ? "🔊 音ON" : "🔇 音OFF";
    toggle.setAttribute("aria-pressed", String(soundEnabled));
    toggle.setAttribute("aria-label", soundEnabled ? "効果音をオフにする" : "効果音をオンにする");
    if (soundEnabled) playGameSound("toggle");
  });
  $("quit-button").addEventListener("click", () => {
    if (!locked && answeredCount > 0 && !window.confirm("チャレンジを終了してタイトルに戻りますか？")) return;
    updateHome(); showScreen("home");
  });
  $("next-button").addEventListener("click", next);
  $("retry-button").addEventListener("click", () => start(gameMode));
  $("return-button").addEventListener("click", () => { updateHome(); showScreen("home"); });
  document.addEventListener("keydown", (event) => {
    if (!$("screen-quiz").classList.contains("is-active") || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target?.closest?.("summary, a, input, textarea, select")) return;
    if (!locked && /^[1-4]$/.test(event.key)) { event.preventDefault(); choose(Number(event.key) - 1); }
    else if (locked && event.key === "Enter") { event.preventDefault(); next(); }
  });
  if (raw.length && bank.length !== raw.length) console.warn(`無効または重複した問題が ${raw.length - bank.length} 問あり、除外しました。`);
  updateAvailable();
}
function start(mode = "challenge") {
  if (mode !== "study" && mode !== "challenge") return;
  const selected = category === ALL ? bank : bank.filter(q => q.category === category);
  const proposed = mode === "study" ? selectStudyQuestions() : shuffle(selected);
  if (!proposed.length) return;
  gameMode = mode;
  order = proposed;
  currentIndex = 0; streak = 0; answeredCount = 0; locked = false;
  $("screen-quiz").classList.toggle("is-study-mode", mode === "study");
  $("game-mode-title").textContent = mode === "study" ? "📘 NRT / 10問学習モード" : "✈ NRT FLIGHT CHALLENGE";
  $("score-primary-label").textContent = mode === "study" ? "✅ 正解数" : "🔥 連続正解";
  $("score-secondary-label").textContent = mode === "study" ? "⭐ 難問" : "🏆 自己ベスト";
  $("score-tertiary-label").textContent = mode === "study" ? "📖 進み具合" : "🧩 現在の問題";
  $("milestone-toast").hidden = true;
  if (milestoneTimeout) { clearTimeout(milestoneTimeout); milestoneTimeout = null; }
  $("game-sparkles").replaceChildren();
  showScreen("quiz");
  renderQuestion();
  if (mode === "study") updateStudyPanel();
  else { updateComboPanel(0); updateFlightBoard(0); }
}
function renderQuestion() {
  locked = false;
  const q = order[currentIndex];
  paintScoreboard();
  $("score-position").textContent = `${currentIndex + 1} / ${order.length}`;
  $("question-category").textContent = q.category;
  const badge = $("difficulty-badge");
  if (badge) badge.hidden = q.difficulty !== "hard";
  $("question-label").textContent = `${gameMode === "study" ? "STUDY" : "QUESTION"} ${String(currentIndex + 1).padStart(2, "0")}`;
  $("question-text").textContent = q.question;
  const percentage = Math.round((currentIndex / order.length) * 100);
  $("progress-fill").style.width = `${percentage}%`;
  $("progress-track").setAttribute("aria-valuenow", String(percentage));
  $("feedback").hidden = true;
  $("feedback").classList.remove("is-wrong");
  $("deep-dive").hidden = true;
  $("deep-dive").open = false;
  $("source-link").hidden = true;
  $("next-button").hidden = true;
  const holder = $("options");
  holder.replaceChildren();
  displayedChoices = shuffle(q.choices.map((text, originalIndex) => ({text, originalIndex})));
  displayedChoices.forEach(({text: option}, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.dataset.index = String(i);
    const label = document.createElement("span");
    label.className = "choice-label";
    label.textContent = LETTERS[i];
    const txt = document.createElement("span");
    txt.textContent = option;
    b.append(label, txt);
    b.addEventListener("click", () => choose(i));
    holder.append(b);
  });
  if (gameMode === "study") updateStudyPanel();
}
function choose(index) {
  if (locked) return;
  locked = true; answeredCount++;
  const q = order[currentIndex];
  const correctChoicePosition = displayedChoices.findIndex(c => c.originalIndex === q.answer);
  const correct = index === correctChoicePosition;
  if (correct) {
    streak++;
    if (gameMode === "challenge") {
      if (streak > best) { best = streak; storeBest(best); }
      celebrateCombo();
      updateComboPanel(streak, true, false);
      updateFlightBoard(streak);
      burstSparkles(isMilestone(streak) ? 22 : 10);
      playGameSound(isMilestone(streak) ? "milestone" : "correct");
      if (isMilestone(streak)) showMilestone(streak);
    } else {
      updateStudyPanel(true);
      burstSparkles(6);
      playGameSound("correct");
    }
  } else {
    if (gameMode === "study") updateStudyPanel(false);
    else updateComboPanel(streak, true, true);
    playGameSound("wrong");
  }
  paintScoreboard();
  if (gameMode === "study") {
    const percentage = Math.round(((currentIndex + 1) / order.length) * 100);
    $("progress-fill").style.width = `${percentage}%`;
    $("progress-track").setAttribute("aria-valuenow", String(percentage));
  }
  const elements = Array.from($("options").children);
  elements.forEach((button, i) => {
    button.disabled = true;
    if (i === correctChoicePosition) button.classList.add("is-correct");
    else if (i === index) button.classList.add("is-wrong");
    else button.classList.add("is-muted");
  });
  const stage = getComboStage(streak);
  $("feedback-title").innerHTML = correct
    ? gameMode === "study" ? "✅ 正解！ しっかり覚えよう！" : `✦ 正解！ ナイスフライト！ <strong>${stage.title}</strong>`
    : `💡 正解は ${LETTERS[correctChoicePosition]}：${q.choices[q.answer]}`;
  $("feedback-explanation").textContent = q.explanation || "解説は準備中です。";
  const hasDetail = typeof q.detail === "string" && q.detail.trim().length > 0;
  $("deep-dive").hidden = !hasDetail;
  $("deep-dive").open = false;
  $("deep-dive-text").textContent = hasDetail ? q.detail : "";
  const sourceLink = $("source-link");
  sourceLink.hidden = true;
  sourceLink.removeAttribute("href");
  if (hasDetail && typeof q.source === "string") {
    try {
      const sourceUrl = new URL(q.source);
      if (sourceUrl.protocol === "https:" || sourceUrl.protocol === "http:") {
        sourceLink.href = sourceUrl.href;
        sourceLink.hidden = false;
      }
    } catch { /* 無効なURLは表示しない */ }
  }
  $("feedback").classList.toggle("is-wrong", !correct);
  $("feedback").hidden = false;
  $("next-button").textContent = (currentIndex === order.length - 1 || (gameMode === "challenge" && !correct)) ? "結果を見る →" : "次の問題へ →";
  $("next-button").hidden = false;
}
function next() {
  if (!locked) return;
  const endedByMistake = Array.from($("options").children).some(el => el.classList.contains("is-wrong"));
  if ((gameMode === "challenge" && endedByMistake) || currentIndex === order.length - 1) { showResult(!endedByMistake); return; }
  currentIndex++;
  renderQuestion();
}
function showResult(completedAll) {
  $("screen-result").classList.toggle("is-study-result", gameMode === "study");
  $("result-score-label").textContent = gameMode === "study" ? "問正解 ／ 10問" : "問 連続正解";
  $("result-best-caption").textContent = gameMode === "study" ? "★ 難問出題" : "自己ベスト";
  $("result-total-caption").textContent = gameMode === "study" ? "挑戦した問題" : "挑戦した問題";
  if (gameMode === "study") {
    $("result-kicker").textContent = "10 QUESTIONS COMPLETE!";
    $("result-title").textContent = "学習モード おつかれさま！";
    $("result-message").textContent = `10問中${streak}問正解！ 解説を読んで、知識を増やしていこう。`;
    $("result-award").textContent = "📘 10問の学習完了";
    $("result-streak").textContent = String(streak);
    $("result-best").textContent = String(STUDY_HARD_COUNT);
    $("result-total").textContent = String(answeredCount);
    $("retry-button").textContent = "別の10問を学習 →";
    showScreen("result");
    return;
  }
  $("retry-button").textContent = "もう一度挑戦 ↗";
  $("result-kicker").textContent = completedAll ? "ALL QUESTIONS CLEARED!" : "FLIGHT COMPLETE";
  $("result-title").textContent = completedAll ? "全問クリア！" : streak >= 10 ? "ミラクルフライト！" : streak >= 5 ? "素晴らしいフライト！" : "おつかれさま！";
  $("result-message").textContent = completedAll ? "すべての問題に正解しました。次は違うジャンルにも挑戦しよう！" : streak >= 5 ? "かなりいい感じ！ もう一度挑戦して自己ベスト更新を目指そう。" : "解説を読んで知識を増やし、次の記録を目指そう。";
  $("result-award").textContent = getAward(streak).emoji + " " + getAward(streak).name;
  $("result-streak").textContent = String(streak);
  $("result-best").textContent = String(best);
  $("result-total").textContent = String(answeredCount);
  showScreen("result");
}

// ★ コンボを「空の称号」として見える化。正解数と称号は端末内だけで扱います。
const AWARDS = [
  { at: 0, name: "出発準備中", emoji: "🛫" },
  { at: 1, name: "はじめての離陸", emoji: "✨" },
  { at: 3, name: "空のルーキー", emoji: "☁️" },
  { at: 5, name: "スカイパイロット", emoji: "✈️" },
  { at: 10, name: "エースパイロット", emoji: "🚀" },
  { at: 20, name: "スカイマスター", emoji: "🏆" }
];
function getAward(n) { return AWARDS.slice().reverse().find(a => n >= a.at) || AWARDS[0]; }
function isMilestone(n) { return n === 3 || n === 5 || n === 10 || n === 20; }
function updateFlightBoard(n) {
  const pct = Math.max(2, Math.min(95, (n / 20) * 95));
  $("flight-track-fill").style.width = pct + "%";
  $("flight-plane").style.left = pct + "%";
  const award = getAward(n);
  $("flight-status").textContent = `${award.emoji} ${award.name}`;
  const nextAward = AWARDS.find(a => a.at > n);
  $("flight-distance").textContent = nextAward
    ? `あと${nextAward.at - n}問で「${nextAward.name}」！`
    : "称号コンプリート！どこまで飛べる？";
  document.querySelectorAll(".flight-checkpoint").forEach((checkpoint, i) => {
    const required = [3,5,10,20][i];
    checkpoint.classList.toggle("is-cleared", n >= required);
  });
}
function showMilestone(n) {
  const toast = $("milestone-toast");
  const award = getAward(n);
  $("milestone-toast-emoji").textContent = award.emoji;
  $("milestone-toast-title").textContent = `${n} COMBO！ LEVEL UP！`;
  $("milestone-toast-message").textContent = `新しい称号「${award.name}」をゲット！`;
  toast.hidden = false;
  toast.classList.remove("is-appearing");
  void toast.offsetWidth;
  toast.classList.add("is-appearing");
  if (milestoneTimeout) clearTimeout(milestoneTimeout);
  milestoneTimeout = setTimeout(() => { toast.hidden = true; }, 2500);
}
function burstSparkles(amount) {
  const holder = $("game-sparkles");
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  holder.replaceChildren();
  const colors = ["#ffc857","#5bd4ee","#74dfb9","#ff89a4","#8fa9ff"];
  for (let i = 0; i < amount; i++) {
    const dot = document.createElement("span");
    dot.className = "sparkle-dot";
    dot.style.setProperty("--dx", `${Math.round((Math.random() - .5) * 550)}px`);
    dot.style.setProperty("--dy", `${Math.round((Math.random() - .8) * 220)}px`);
    dot.style.setProperty("--rot", `${Math.round(Math.random() * 540)}deg`);
    dot.style.setProperty("--color", colors[i % colors.length]);
    dot.style.animationDelay = `${i * 12}ms`;
    holder.append(dot);
  }
  setTimeout(() => holder.replaceChildren(), 1150);
}
function playGameSound(kind) {
  if (!soundEnabled) return;
  try {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return;
    if (!audioContext) audioContext = new Ctor();
    if (audioContext.state === "suspended") audioContext.resume();
    const tones = kind === "wrong" ? [300,240]
      : kind === "milestone" ? [523,659,784,1047] : kind === "toggle" ? [587] : [659,880];
    tones.forEach((freq,i) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const t = audioContext.currentTime + i * 0.075;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq,t);
      gain.gain.setValueAtTime(0.0001,t);
      gain.gain.exponentialRampToValueAtTime(0.075,t+0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001,t+0.17);
      osc.connect(gain).connect(audioContext.destination);
      osc.start(t); osc.stop(t+0.19);
    });
  } catch (err) { /* 音が使えない環境でもクイズは続行 */ }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();