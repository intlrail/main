let sketch = function(p) {
  let THE_SEED;
  let initial_size = 5;
  let initial_deviation = 240;
  let deviation = 120;
  let points;
  let current;

  p.setup = function() {
    p.createCanvas(innerWidth, innerHeight);
    p.noStroke();
    p.colorMode(p.HSB);
    p.fill(120, 100, 50, 0.015);
    p.noLoop();
    THE_SEED = p.floor(p.random(9999999));
    p.noiseSeed(THE_SEED);
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);
    init();
    for (var i = 0; i < 180; i++) {
      current = update();
      display();
    }
  };

  function init() {
    points = [];
    for (var i = 0; i < initial_size; i++) {
      points.push(p.createVector(i / (initial_size - 1) * p.width - p.width / 2, 120, p.random(-1, 1)));
    }
    for (let b = 0; b < 5; b++) {
      interpolate(points, initial_deviation);
    }
  }

  function update() {
    let c = deep_copy(points);
    for (let b = 0; b < 7; b++) {
      for (let i = 0; i < c.length; i++) {
        move_nearby(c[i], deviation);
      }
    }
    return c;
  }

  function display() {
    p.beginShape();
    for (let i = 0; i < current.length; i++) {
      p.vertex(current[i].x, current[i].y);
    }
    p.vertex(p.width / 2, p.height / 2);
    p.vertex(-p.width / 2, p.height / 2);
    p.endShape(p.CLOSE);
  }

  function interpolate(points, sd) {
    for (var i = points.length - 1; i > 0; i--) {
      points.splice(i, 0, generate_midpoint(points[i - 1], points[i], sd));
    }
  }

  function generate_midpoint(p1, p2, sd) {
    let p3 = p.createVector((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2 * 0.55 * p.random(0.02, 3.65));
    move_nearby(p3, sd);
    return p3;
  }

  let move_nearby = function(pnt, sd) {
    pnt.x = p.randomGaussian(pnt.x, pnt.z * sd);
    pnt.y = p.randomGaussian(pnt.y, pnt.z * sd);
  };

  let deep_copy = function(arr) {
    let narr = [];
    for (var i = 0; i < arr.length; i++) {
      narr.push(arr[i].copy());
    }
    return narr;
  };
`
  p.keyPressed = function() {
    if (p.keyCode === 80) p.saveCanvas('horizon_' + THE_SEED, 'png');
  };
`
};
new p5(sketch);
