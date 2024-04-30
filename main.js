song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup()
{
    canvas = createCanvas(500,470);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw()
{
    image(video,0,0,500,470);

    fill("red");
    stroke("red");

    if(score_rightwrist > 0.2);
    {

    circle(rightwristx, rightwristy, 20);

    if(rightwristy > 200 && rightwristy <= 300)
    {
        document.getElementById("music.mp3").innerHTML = "music.mp3";
    }

    if(score_rightwrist > 0.2);
    {
    circle(leftwristx, leftwristy, 20);
    in_number_leftwristy = Number(leftwristy);
    remove_decimal = floor(in_number_leftwristy);
    music2.mp3 = remove_decimal/500;
    document.getElementById("music2.mp3").innerHTML = "Music2.mp3 = " + music2.mp3;
    }
}}
function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function play_song()
{
    song.play();
}
function modelLoaded()
{
    console.log("model has loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        score_leftwrist = results[0].pose.keypoints[9].score;
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftWristx = " + leftwristx);
        console.log("leftWristy = " + leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightWristx = " + rightwristx);
        console.log("rightWristy = " + rightwristy);
    }
}