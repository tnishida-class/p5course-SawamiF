// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);

if(keyIsDown(SHIFT)){
  count = (count + 2) % cycle;
}　　//シフトキーを押したら速くなる
else{
  count = (count + 1) % cycle;
}　　//何も押さないとき


 if(count > 40 && count <60){
     fill(255, 0, 0)
     ellipse(width / 2, height / 2, 100);
 }　　//小さい白丸
 else if(count > 20 && count < 40 || count == 40){
   fill(255, 102, 102)
   ellipse(width / 2, height / 2, 30);
 }　　//真ん中の微妙な色の丸
 else{
    fill(255)
    ellipse(width / 2, height / 2, 10);
 }　　//大きい赤丸

//keyの条件分岐がないバージョン
// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   // BLANK[1]
//  if(count > 40 && count <60){
//      fill(255, 0, 0)
//      ellipse(width / 2, height / 2, 100);
//  }
//  else if(count > 20 && count < 40 || count == 40){
//    fill(255, 102, 102)
//    ellipse(width / 2, height / 2, 30);
//  }
//  else{
//     fill(255)
//     ellipse(width / 2, height / 2, 10);
//  }
//

}
