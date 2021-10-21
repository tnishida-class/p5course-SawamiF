// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
//   fill(255, 255, 255);
//   rect(size * 0, size * 0, size, size);
//   fill(128, 128, 128);
//   rect(size * 0, size * 1, size, size);
//   fill(128, 128, 128);
//   rect(size * 1, size * 0, size, size);
//   fill(255, 255, 255);
//   rect(size * 1, size * 1, size, size);
//   fill(255, 255, 255);
//   rect(size * 2, size * 0, size, size);
//   fill(128, 128, 128);
//   rect(size * 2, size * 1, size, size);
//   fill(255, 255, 255);
//   rect(size * 0, size * 2, size, size);
//   fill(128, 128, 128);
//   rect(size * 0, size * 3, size, size);
// }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j) % 2 == 1){
        fill(128, 128, 128);//gray
      }
      else{
        fill(255, 255, 255)//white
      }
      rect(size * i, size * j, size, size);//四角形
    }
  }
  // fill(255, 0, 0)
  // circle(size * 1.5 , size  * 0.5, 20)
  // circle(size * 3.5 , size  * 0.5, 20)
  // circle(size * 5.5 , size  * 0.5, 20)
  // circle(size * 7.5 , size  * 0.5, 20)
  // circle(size * 0.5 , size  * 1.5, 20)
  // circle(size * 2.5 , size  * 1.5, 20)
  // circle(size * 4.5 , size  * 1.5, 20)
  // circle(size * 6.5 , size  * 1.5, 20)
  // circle(size * 1.5 , size  * 2.5, 20)
  // circle(size * 3.5 , size  * 2.5, 20)
  // circle(size * 5.5 , size  * 2.5, 20)
  // circle(size * 7.5 , size  * 2.5, 20)
  //
  // fill(0, 0, 0)
  // circle(size * 0.5 , size  * 7.5, 20)
  // circle(size * 2.5 , size  * 7.5, 20)
  // circle(size * 4.5 , size  * 7.5, 20)
  // circle(size * 6.5 , size  * 7.5, 20)
  // circle(size * 1.5 , size  * 6.5, 20)
  // circle(size * 3.5 , size  * 6.5, 20)
  // circle(size * 5.5 , size  * 6.5, 20)
  // circle(size * 7.5 , size  * 6.5, 20)
  // circle(size * 0.5 , size  * 5.5, 20)
  // circle(size * 2.5 , size  * 5.5, 20)
  // circle(size * 4.5 , size  * 5.5, 20)
  // circle(size * 6.5 , size  * 5.5, 20)

  for(let m = 0.5; m < 9.5; m++){
    for(let n = 0.5; n < 9.5; n++){
      if(n < 3.5 && (m+n) % 2 == 0){
        fill(255, 0, 0)
      }
    else if(n > 4.5 && (m+n) % 2 == 0){
        fill(0, 0, 0)
      }
      else{
        noFill();
      }
      circle(size * m, size * n, 20)
    }
  }
}
