beats = '1234';
//bpm = 120;
//requiredFrameRate = bpm/60;
let slider;
let sliderdiv;


function setup(){
    createCanvas(600,600);
    background(50,70,55);
    sliderdiv = createDiv('Set the bpm here');
    sliderdiv.id('delusion');
    slider = createSlider(60,220,120);
    slider.parent(sliderdiv);
    bpm = slider.value();
    requiredFrameRate = bpm/60;
    
    
    
    frameRate(requiredFrameRate);
}

function draw(){
    bpm = slider.value();
    requiredFrameRate = bpm/60;
    frameRate(requiredFrameRate);
    background(50,70,55);
    fill(255);
    textSize(128);
    let n = frameCount%4;
    let beat = beats[n]
    let xpos = 50 + 100*n
    text(beat,xpos,300);
    textSize(32);
    text(bpm + " bpm",400,500);

}