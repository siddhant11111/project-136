status = "";

video = "";

function prelode(){
  video = createVideo('video.mp4')
  
}

function setup() {
    canvas = createCanvas(480,  300);
    canvas.canter();
}

function draw()  {
    Image(video, 0, 0, 480, 300);
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}