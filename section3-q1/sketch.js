// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
 if(count > 40 && count <60){
     fill(255, 0, 0)
     ellipse(width / 2, height / 2, 100);
 }
 else if(count > 20 && count < 40 || count == 40){
   fill(255, 102, 102)
   ellipse(width / 2, height / 2, 30);
 }
 else{
    fill(255)
    ellipse(width / 2, height / 2, 10);
 }

}
