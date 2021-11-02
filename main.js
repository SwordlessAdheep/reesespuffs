
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {

    video= createCapture(VIDEO);
    video.size(300 , 300);
canvas= createCanvas(300 , 300);
canvas.position(69 , 69);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}



    function gotPoses(results) {

        if(results.length>0) {
        
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("noesX = "+noseX+"noesY = "+noseY);
            leftWristX=results[0].pose.leftWrist.x;
            rightWristX=results[0].pose.rightWrist.x;
            console.log("rightWristX = "+rightWristX+"leftWristX = "+leftWristX);
            difference=floor(leftWristX-rightWristX);
            console.log(difference);
        
        }
        
        }

function modelLoaded() {

    console.log('Posenet Neautralized');

}


function draw() {

background(62 ,  60 , 169);

}
function draw() {

    background(69 , 169 , 69);
    fill('#A4FFAB');
    stroke('#F08080');
    
    textSize(difference);
    text('Pog', noseX, noseY);;
    document.getElementById("square_side").innerHTML="width and height of square wil be= "+difference+"px";
    
    }
