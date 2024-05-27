let speach = new SpeechSynthesisUtterance();
let playBtn = document.querySelector("button");
let textArea = document.querySelector("textarea");
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speach.voice = voices[0];

    voices.forEach((voice, i) =>(voiceSelect.options[i] = new Option(voice.name,i)));
};
voiceSelect.addEventListener("change", ()=>{
    speach.voice = voices[voiceSelect.value];
});

playBtn.addEventListener("click",()=>{
    speach.text = textArea.value;
    window.speechSynthesis.speak(speach);
});