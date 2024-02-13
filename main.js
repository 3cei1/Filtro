nosex = 0;
nosey = 0; 

function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(nosex, nosey, 20);
}

function modelLoaded() {
    console.log("	")
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        nosex =results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nose x =" + nosex);
        console.log("nose y =" + nosey);        
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}