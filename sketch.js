// what does wind look like?
let font;

let squares = [];
let numSquares = 500;

function preload() {
  font = loadFont('assets/mintsoda.ttf');
}

function setup() {

  createCanvas(1600, 1600);
  pixelDensity(1);
  //noLoop();
  //frameRate(1);
  for (let i = 0; i < numSquares; i++) {
    let x = random(-width, 0);
    let y = random(-100, height + 100);
    let size = random(10, 40);
    let speed = random(5, 20);
    let yOffset = random(1000);
    let gradientOffset = random(0, 1);
    squares.push({
      x: x,
      baseY: y,
      size: size,
      speed: speed,
      yOffset: yOffset,
      gradientOffset: gradientOffset,
    });
  }
}

function draw() {

  //background(210);

  strokeCap(SQUARE);
  noStroke();

  // stroke(200,176,255);
  // strokeWeight(2);

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
    
    let t = map(sq.x, 0, width, 0, 1);
    t = (t + sq.gradientOffset) % 1;

    let c;
    if (t < 0.25) {
      c = lerpColor(color(240, 234, 210), color(221, 229, 182), t / 0.25);
    } else if (t < 0.5 && t >= 0.25) {
      c = lerpColor(color(221, 229, 182), color(173, 193, 120), (t - 0.25) / 0.25);
    } else if (t < 0.75 && t >= 0.5) {
      c = lerpColor(color(173, 193, 120), color(169, 132, 103), (t - 0.5) / 0.25);
    } else {
      c = lerpColor(color(169, 132, 103), color(108, 88, 76), (t - 0.75) / 0.25);
    }

    fill(c);
    
    rectMode(CENTER);
    rect(sq.x, sq.y, currentSize, currentSize);
  }

    if (frameCount % 10 == 0) {

    let fillColor = random([color(40, 54, 24), color(96, 108, 56)]);
    fill(fillColor);
    strokeWeight(20);

    let numTitles = int(random(5, 20));
    for (let i = 0; i < numTitles; i++) {
      let a = random(10, 300);
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

  let strokeColor = random([color(40, 54, 24), color(96, 108, 56)]);
  stroke(strokeColor);

  text('WIND', random(b - 100, b + 100), random(c - 100, c + 100));
}