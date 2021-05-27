Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90})

camera= document.getElementById("camera");

Webcam.attach(camera);

function snap(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="cap_img"src="'+data_uri+'"/>';});
}
console.log("ml5 version is ", ml5.version);

identifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kL48T0T6r/model.json",modelLoaded);

function modelLoaded(){
console.log("Model loaded!");}

function speak(){
var synth = window.speechSynthesis;
var speech_1 = "The first prediction is " +prediction_1;
var speech_2 = "And the second prediction is "+prediction_2;
var utter_this = new SpeechSynthesisUtterance(speech_1 + speech_2);
synth.speak(utter_this);}

function check(){
i1 = document.getElementById("cap_img");
identifier.classify(i1,gotResult);}

function gotResult(error, results){
if (error){
console.error(error);
}
else{
console.log(results);
document.getElementById("emotion_1").innerHTML = results[0].label;
document.getElementById("emotion_2").innerHTML = results[1].label; 
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();

if(results[0].label == "Happy"){
document.getElementById("emoji_1").innerHTML = "&#x1F600;";}

if(results[0].label == "Sad"){
document.getElementById("emoji_1").innerHTML = "&#x1F622;";}

if(results[0].label == "Surprised"){
document.getElementById("emoji_1").innerHTML = "&#x1F632;";}

if(results[1].label == "Happy"){
document.getElementById("emoji_2").innerHTML = "&#x1F60A;";}

if(results[1].label == "Sad"){
document.getElementById("emoji_2").innerHTML = "&#x1F614;";}

if(results[1].label == "Surprised"){
document.getElementById("emoji_2").innerHTML = "&#x1F62E;";}


}

}
