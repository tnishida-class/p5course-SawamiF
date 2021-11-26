// 最終課題を制作しよう
let w, h;
let grabbed;

function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw(){
  background(160, 192, 255);
  w = width / 9;
  h = height / 7;
  grabbed = false;
  fill(255)
  flower(mouseX, mouseY, width / 40);
  for(let i = 1; i < 9; i += 2){
    for(let j = 2; j < 7; j += 3){
      rect(w * i, h * j, w * 3 / 5);//四角形を8個描画
    }
  }
}

function flower(x, y, r){
  ellipse(x + r, y - r, r / 2, r * 2);//上の花びら
  ellipse(x + r, y + r, r / 2, r * 2);//下の花びら
  ellipse(x, y, r * 2, r / 2);//左の花びら
  ellipse(x + r * 2, y, r * 2, r / 2);//右の花びら
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
