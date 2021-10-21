var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML=content;
}

