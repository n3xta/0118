// what does wind look like?
let font;

let squares = [];
let numSquares = 500;

const palette = [];

function preload() {
  font = loadFont('assets/mintsoda.ttf');
}

function setup() {

  let palette = [
    color(0, 0, 255),
    color(210),
    color(0)
  ];

  createCanvas(1600, 1600);
  pixelDensity(1);
  //noLoop();
  //frameRate(1);
  for (let i = 0; i < numSquares; i++) {
    let x = random(-width, 0);
    let y = random(-100, height + 100);
    let size = random(10, 30);
    let speed = random(5, 20);
    let yOffset = random(1000);
    squares.push({
      x: x,
      baseY: y,
      size: size,
      speed: speed,
      yOffset: yOffset,
      c: random(palette),
    });
  }
}

function draw() {

  //background(210);

  strokeCap(SQUARE);
  noStroke();

  for (let i = 0; i < squares.length; i++) {

    let sq = squares[i];
    
    sq.x += sq.speed;

    if (sq.x > width + sq.size) {
      sq.x = -sq.size;
    }

    let amplitude = 30;


    sq.y = sq.baseY + sin(frameCount * 0.05 + sq.yOffset) * amplitude;

    let sizeVariation = map(cos(frameCount * 0.02 + sq.yOffset), -1, 1, -5, 5);
    let currentSize = sq.size + sizeVariation;
    
    fill(sq.c);
    
    rectMode(CENTER);
    rect(sq.x, sq.y, currentSize, currentSize);
  }

  if (frameCount % 10 == 0) {

  let fillColor = random([color(210), color(0)]);
  fill(fillColor);
  strokeWeight(20);

  let numTitles = int(random(5, 20));
  for (let i = 0; i < numTitles; i++) {
    let a = random(100, 600);
    let b = random(-width, width);
    let c = random(-height, height);

    title(a, b, c);
  }
}

}

function title(a, b, c) {
  textFont(font);
  textSize(random(a - 100, a + 100));
  textAlign(LEFT, TOP);

  let strokeColor = random([color(210), color(0)]);
  stroke(strokeColor);

  text('WIND', random(b - 100, b + 100), random(c - 100, c + 100));
}
