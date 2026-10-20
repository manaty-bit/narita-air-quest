"use strict";
/* Bilingual user interface. Existing game logic and scores remain unchanged. */
const LANG_STORAGE_KEY="narita-air-quest-language-v1";
let uiLanguage=(()=>{try{return localStorage.getItem(LANG_STORAGE_KEY)==="en"?"en":"ja";}catch{return "ja";}})();
const enCategory={"成田空港の歴史":"Narita Airport History","飛行機の雑学":"Aircraft Facts","空港の仕事・物流":"Airport Jobs & Logistics","空港の未来":"Future of Airports"};
const enAwards=["Ready for takeoff","First takeoff","Sky Rookie","Sky Pilot","Ace Pilot","Sky Master"];
const enStatic={
".eyebrow":"NARITA AIRPORT FIELD TRIP SPECIAL",
"#home-title":"Become an Ace of the Skies!",
".hero-lead":"Explore aircraft facts, Narita's history and the future of aviation. How many correct answers can you get in a row?",
".hero-statrow .stat-inline:nth-child(1) span":"Questions",
".hero-statrow .stat-inline:nth-child(2) span":"Personal best",
".hero-statrow .stat-inline:nth-child(3) span":"Choices",
".controls-heading h2":"Ready for takeoff?",
".controls-heading p":"Choose a category and start your aviation adventure.",
".input-holder label":"Streak challenge category",
"#start-button":"🔥 Streak Challenge ✈",
".study-launch-copy strong":"📘 10-Question Study Mode",
".study-launch-copy p":"10 questions, including 4 hard questions. Hard ones appear at 5, 7, 9 and 10. Mistakes won't end your study session!",
"#study-button":"Start learning →",
".review-summary-description":"Missed questions return in future study sessions",
"#review-clear-button":"Clear history",
".info-grid article:nth-child(1) h3":"Pick one of four",
".info-grid article:nth-child(1) p":"Tap the answer you think is correct.",
".info-grid article:nth-child(2) h3":"Build a streak",
".info-grid article:nth-child(2) p":"Every correct answer takes you higher.",
".info-grid article:nth-child(3) h3":"Learn from mistakes",
".info-grid article:nth-child(3) p":"Study Mode continues after mistakes. Read the explanations!",
"#quit-button":"← Back to home",
".instruction-line":"Choose the correct answer.",
"#deep-dive summary":"🔎 Learn more ⌄",
"#source-link":"📚 View source ↗",
".key-hint":"On a computer, use keys 1–4 to answer.",
"#return-button":"Back to home",
".site-footer > span:nth-child(2)":"Learning takes you further.",
".site-footer p":"An aviation quiz for Shiba Kokusai Grade 7. Records stay on this device."
};
const originalStatic={};
const localText=(ja,en)=>uiLanguage==="en"?en:ja;
function translatedQuestion(q){
 if(uiLanguage!=="en")return q;
 const t=window.NARITA_EN?.[q.id];
 if(!t||t.length!==4||!Array.isArray(t[1])||t[1].length!==4)return q;
 return {...q,question:t[0],choices:t[1],explanation:t[2],detail:t[3],
 category:enCategory[q.category]||q.category};
}
function localizeStatic(){
 document.documentElement.lang=uiLanguage;
 document.title=localText("NARITA AIR QUEST｜連続正解チャレンジ","NARITA AIR QUEST | Aviation Quiz");
 $("language-toggle").textContent=uiLanguage==="en"?"日本語":"English";
 $("language-toggle").setAttribute("aria-label",uiLanguage==="en"?"日本語に切り替える":"Switch to English");
 for(const [selector,english] of Object.entries(enStatic)){
   const el=document.querySelector(selector);if(!el)continue;
   if(!(selector in originalStatic))originalStatic[selector]=el.innerHTML;
   if(uiLanguage==="en")el.textContent=english;
   else el.innerHTML=originalStatic[selector];
 }
 const select=$("category-select");
 for(const option of select.options){
   option.textContent=option.value==="__all__"?localText("すべてのジャンル","All categories"):
     localText(option.value,enCategory[option.value]||option.value);
 }
 $("difficulty-badge").textContent=localText("★ 難問","★ HARD");
 $("study-review-badge").textContent=localText("🔁 復習","🔁 REVIEW");
}
function localizeGame(){
 const inQuiz=$("screen-quiz").classList.contains("is-active");
 const inResult=$("screen-result").classList.contains("is-active");
 if(inQuiz&&order[currentIndex]){
   const original=order[currentIndex],q=translatedQuestion(original);
   $("question-text").textContent=q.question;
   $("question-category").textContent=q.category;
   [...$("options").children].forEach((button,i)=>{
     if(displayedChoices[i])button.lastElementChild.textContent=q.choices[displayedChoices[i].originalIndex];
   });
   $("quiz-illustration-caption").textContent=localText(original.imageCaption||"図を見て考えよう","Look at the illustration and think!");
   $("quiz-illustration-image").alt=localText(original.imageAlt||"問題用の図","Illustration for the question");
   $("score-primary-label").textContent=gameMode==="study"?localText("✅ 正解数","✅ Correct"):localText("🔥 連続正解","🔥 Streak");
   $("score-secondary-label").textContent=gameMode==="study"?localText("⭐ 難問","⭐ Hard"):localText("🏆 自己ベスト","🏆 Best");
   $("score-tertiary-label").textContent=gameMode==="study"?localText("📖 進み具合","📖 Progress"):localText("🧩 現在の問題","🧩 Question");
   $("score-best").textContent=gameMode==="study"?localText("4問","4 hard"):String(best);
   $("game-mode-title").textContent=gameMode==="study"?localText("📘 NRT / 10問学習モード","📘 NRT / STUDY MODE"):"✈ NRT FLIGHT CHALLENGE";
   $("sound-toggle").textContent=soundEnabled?localText("🔊 音ON","🔊 Sound ON"):localText("🔇 音OFF","🔇 Sound OFF");
   if(gameMode==="study"){
     const phase=currentIndex<4?"Warm-up":currentIndex<8?"Level up":"Final challenge";
     if(uiLanguage==="en"){
       $("combo-title").textContent=!locked?phase+"! "+(currentIndex+1)+"/10":$("feedback").classList.contains("is-wrong")?"Learn from this one!":"Correct! "+streak+"/10";
       $("combo-message").textContent="Mistakes are part of learning. Keep going!";
     }
   }else{
     const stage=getComboStage(streak),award=getAward(streak),awardIndex=AWARDS.indexOf(award);
     const following=AWARDS.find(a=>a.at>streak);
     $("flight-status").textContent=award.emoji+" "+localText(award.name,enAwards[awardIndex]);
     $("flight-distance").textContent=localText(following?"あと"+(following.at-streak)+"問で「"+following.name+"」！":"称号コンプリート！どこまで飛べる？",following?(following.at-streak)+" more to "+enAwards[AWARDS.indexOf(following)]+"!":"All ranks unlocked!");
     if(uiLanguage==="en"){
       $("combo-title").textContent=!locked?(streak?streak+" in a row!":"Ready for takeoff!"):$("feedback").classList.contains("is-wrong")?"Flight complete!":streak+" in a row!";
       $("combo-message").textContent="Keep your streak going!";
     }
   }
   if(locked){
     const correctPosition=displayedChoices.findIndex(c=>c.originalIndex===original.answer);
     const correct=!$("feedback").classList.contains("is-wrong");
     $("feedback-title").textContent=correct?localText("✅ 正解！","✅ Correct!") :localText("💡 正解は "+LETTERS[correctPosition]+"："+original.choices[original.answer],"💡 Answer: "+LETTERS[correctPosition]+" — "+q.choices[original.answer]);
     $("feedback-explanation").textContent=q.explanation;
     $("deep-dive-text").textContent=q.detail;
     $("next-button").textContent=currentIndex===order.length-1||(gameMode==="challenge"&&!correct)?localText("結果を見る →","See results →"):localText("次の問題へ →","Next question →");
   }
 }
 if(inResult){
   const study=gameMode==="study",allDone=!study&&currentIndex===order.length-1&&!$("feedback").classList.contains("is-wrong");
   $("result-title").textContent=study?localText("学習モード おつかれさま！","Study session complete!"):allDone?localText("全問クリア！","All questions cleared!"):localText("おつかれさま！","Great flight!");
   $("result-message").textContent=study?localText("10問中"+streak+"問正解！ 復習候補は現在"+reviewIds.size+"問。","You got "+streak+" of 10 correct. "+reviewIds.size+" questions saved for review."):localText("解説を読んで、自己ベストを更新しよう！","Read the explanations and try to beat your best!");
   const award=getAward(streak);
   $("result-award").textContent=study?localText("📘 10問の学習完了","📘 Study session complete"):award.emoji+" "+localText(award.name,enAwards[AWARDS.indexOf(award)]);
   $("result-score-label").textContent=study?localText("問正解 ／ 10問","correct out of 10"):localText("問 連続正解","in a row");
   $("result-best-caption").textContent=study?localText("★ 難問出題","★ Hard questions"):localText("自己ベスト","Personal best");
   $("result-total-caption").textContent=localText("挑戦した問題","Questions attempted");
   $("retry-button").textContent=study?localText("別の10問を学習 →","Study 10 more →"):localText("もう一度挑戦 ↗","Try again ↗");
 }
}
function refreshBilingual(){
 localizeStatic();
 $("review-count").textContent=localText("🔁 復習候補："+reviewIds.size+"問","🔁 Review queue: "+reviewIds.size);
 const n=category==="__all__"?bank.length:bank.filter(q=>q.category===category).length;
 $("available-caption").textContent=localText("連続正解チャレンジ："+n+"問からランダムに出題 ／ 1問間違えたら終了","Streak Challenge: "+n+" questions / one mistake ends your run");
 localizeGame();
}
function toggleBilingual(){
 uiLanguage=uiLanguage==="ja"?"en":"ja";
 try{localStorage.setItem(LANG_STORAGE_KEY,uiLanguage);}catch{}
 refreshBilingual();
}
/* Wrap existing functions: no new question selection, no lost answers or score. */
const oldRenderQuestion=renderQuestion;
renderQuestion=function(){oldRenderQuestion();localizeGame();};
const oldChoose=choose;
choose=function(i){oldChoose(i);localizeGame();};
const oldStart=start;
start=function(mode){oldStart(mode);localizeGame();};
const oldShowResult=showResult;
showResult=function(done){oldShowResult(done);localizeGame();};
const oldUpdateAvailable=updateAvailable;
updateAvailable=function(){oldUpdateAvailable();if(uiLanguage==="en"){const n=category==="__all__"?bank.length:bank.filter(q=>q.category===category).length;$("available-caption").textContent="Streak Challenge: "+n+" questions / one mistake ends your run";}};
const oldUpdateHome=updateHome;
updateHome=function(){oldUpdateHome();if(uiLanguage==="en")$("review-count").textContent="🔁 Review queue: "+reviewIds.size;};
document.addEventListener("DOMContentLoaded",()=>{
 $("language-toggle").addEventListener("click",toggleBilingual);
 refreshBilingual();
});
