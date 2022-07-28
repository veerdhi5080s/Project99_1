var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if (content == "selfie")
    {
        speak();  
    }
    
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking the selfie in 5 seconds";
    var Utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    Webcam.attach("#camera");
    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        speak_data="Taking the selfie in 10 seconds";
    var Utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    },5000);

    setTimeout(function()
    {
        img_id="selfie2";
        take_snapshot();
        speak_data="Taking the selfie in 15 seconds";
    var Utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    },10000);

    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
    },50000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: "png",
    png_quality: 100
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }
    });
}

function save(){
    link=document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href=img;
    link.click();
}