// what does wind look like?
let font;
let black;
let blue;

function preload() {
  font = loadFont('assets/mintsoda.ttf');
}

function setup() {
  createCanvas(1600, 1600);
  pixelDensity(1);
  noLoop();
  //frameRate(1);
}

function draw() {
  let black = color(0, 0, 0);
  let blue = color(0, 1, 249);

  background(210);

  strokeCap(SQUARE);
  brushStrokes(black, 50, 5, 50);

  fill(blue);
  strokeWeight(20);

  let numTitles = int(random(5, 20));
  for (let i = 0; i < numTitles; i++) {
    let a = random(100, 600);
    let b = random(-width, width);
    let c = random(-height, height);

    title(a, b, c);
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

function brushStrokes(paintColor, numStrokes, strokeWeightMin, strokeWeightMax) {
  for (let i = 0; i < numStrokes; i++) {
    
    stroke(paintColor);
    strokeWeight(random(strokeWeightMin, strokeWeightMax));
    noFill();

    let x1 = random(width);
    let y1 = random(height);
    let x2 = x1 + random(-500, 500);
    let y2 = y1 + random(-500, 500);
    let x3 = x2 + random(-500, 500);
    let y3 = y2 + random(-500, 500);
    let x4 = x3 + random(-500, 500);
    let y4 = y3 + random(-500, 500);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}