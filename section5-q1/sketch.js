// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Snoopy", 0, 0, 400);
}

function balloon(t, s, r, q){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(s, r, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
  triangle(w - p, h + p * 2, w + p * 2, h + p * 2, w + p, h + p * 2 + p);
}
