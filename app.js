"use strict";

/* NARITA AIR QUEST — アプリ本体。
   通常、このファイルを編集する必要はありません。
   問題は questions.js に追加してください。
*/
const BEST_KEY = "narita-air-quest-best-v1";
const ALL = "__all__";
const LETTERS = ["A", "B", "C", "D"];
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
let category = ALL, best = loadBest();

function loadBest() { try { return Math.max(0, parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0); } catch { return 0; } }
function storeBest(v) { try { localStorage.setItem(BEST_KEY, String(v)); } catch { /* 保存できなくても遊べます */ } }
function shuffle(items) { const arr = [...items]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i],arr[j]] = [arr[j],arr[i]]; } return arr; }
function showScreen(name) {
  for (const id of ["home", "quiz", "result"]) $("screen-" + id).classList.toggle("is-active", id === name);
  window.scrollTo({top: 0, behavior: "auto"});
}
function updateHome() { $("home-count").textContent = String(bank.length); $("home-best").textContent = String(best); }
function updateAvailable() {
  const n = category === ALL ? bank.length : bank.filter(q => q.category === category).length;
  $("available-caption").textContent = `${n}問からランダムに出題 ／ 1問間違えたら終了 ／ 記録はこの端末だけに保存`;
  $("start-button").disabled = n === 0;
}
function init() {
  updateHome();
  const categories = [...new Set(bank.map(q => q.category))];
  for (const name of categories) { const opt = document.createElement("option"); opt.value = name; opt.textContent = name; $("category-select").append(opt); }
  $("category-select").addEventListener("change", e => { category = e.target.value; updateAvailable(); });
  $("start-button").addEventListener("click", start);
  $("quit-button").addEventListener("click", () => { if (!locked && answeredCount > 0 && !window.confirm("チャレンジを終了してタイトルに戻りますか？")) return; updateHome(); showScreen("home"); });
  $("next-button").addEventListener("click", next);
  $("retry-button").addEventListener("click", start);
  $("return-button").addEventListener("click", () => { updateHome(); showScreen("home"); });
  document.addEventListener("keydown", (event) => {
    if (!$("screen-quiz").classList.contains("is-active") || event.altKey || event.ctrlKey || event.metaKey) return;
    if (!locked && /^[1-4]$/.test(event.key)) { event.preventDefault(); choose(Number(event.key)-1); }
    else if (locked && event.key === "Enter") { event.preventDefault(); next(); }
  });
  if (raw.length && bank.length !== raw.length) console.warn(`無効または重複した問題が ${raw.length - bank.length} 問あり、除外しました。`);
  updateAvailable();
}
function start() {
  const selected = category === ALL ? bank : bank.filter(q => q.category === category);
  if (!selected.length) return;
  order = shuffle(selected);
  currentIndex = 0; streak = 0; answeredCount = 0;
  showScreen("quiz"); renderQuestion();
}
function renderQuestion() {
  locked = false;
  const q = order[currentIndex];
  $("score-streak").innerHTML = `${streak} <small>COMBO</small>`;
  $("score-best").textContent = String(best);
  $("score-position").textContent = `${currentIndex+1} / ${order.length}`;
  $("question-category").textContent = q.category;
  $("question-label").textContent = `QUESTION ${String(currentIndex+1).padStart(2,"0")}`;
  $("question-text").textContent = q.question;
  const percentage = Math.round((currentIndex / order.length) * 100);
  $("progress-fill").style.width = `${percentage}%`;
  $("progress-track").setAttribute("aria-valuenow", String(percentage));
  $("feedback").hidden = true;
  $("feedback").classList.remove("is-wrong");
  $("next-button").hidden = true;
  const holder = $("options"); holder.replaceChildren();
  q.choices.forEach((option, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "option"; b.dataset.index = String(i);
    const label = document.createElement("span"); label.className = "choice-label"; label.textContent = LETTERS[i];
    const txt = document.createElement("span"); txt.textContent = option;
    b.append(label,txt);
    b.addEventListener("click", () => choose(i)); holder.append(b);
  });
}
function choose(index) {
  if (locked) return;
  locked = true; answeredCount++;
  const q = order[currentIndex]; const correct = index === q.answer;
  if (correct) { streak++; if (streak > best) { best = streak; storeBest(best); } }
  $("score-streak").innerHTML = `${streak} <small>COMBO</small>`;
  $("score-best").textContent = String(best);
  const elements = Array.from($("options").children);
  elements.forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add("is-correct");
    else if (i === index) button.classList.add("is-wrong");
    else button.classList.add("is-muted");
  });
  $("feedback-title").textContent = correct ? "✦ 正解！ ナイスフライト！" : `あと一歩！ 正解は ${LETTERS[q.answer]}`;
  $("feedback-explanation").textContent = q.explanation || "解説は準備中です。";
  $("feedback").classList.toggle("is-wrong", !correct);
  $("feedback").hidden = false;
  $("next-button").textContent = (!correct || currentIndex === order.length - 1) ? "結果を見る →" : "次の問題へ →";
  $("next-button").hidden = false;
}
function next() {
  if (!locked) return;
  const endedByMistake = Array.from($("options").children).some(el => el.classList.contains("is-wrong"));
  if (endedByMistake || currentIndex === order.length - 1) { showResult(!endedByMistake); return; }
  currentIndex++;
  renderQuestion();
}
function showResult(completedAll) {
  $("result-kicker").textContent = completedAll ? "ALL QUESTIONS CLEARED!" : "FLIGHT COMPLETE";
  $("result-title").textContent = completedAll ? "全問クリア！" : streak >= 5 ? "素晴らしいフライト！" : "おつかれさま！";
  $("result-message").textContent = completedAll ? "すべての問題に正解しました。次は違うジャンルにも挑戦しよう！" : "解説を読んで知識を増やし、次の記録を目指そう。";
  $("result-streak").textContent = String(streak);
  $("result-best").textContent = String(best);
  $("result-total").textContent = String(answeredCount);
  showScreen("result");
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
