let sketch = function(p) {
  let xdim = 40;
  let ydim = 30;
  let size = 50;
  let grid;
  let colors;

  p.setup = function() {
    p.createCanvas(innerWidth,innerHeight);
    p.noLoop();
    p.noFill();

    colors = [
      p.color(110,110,110),
      p.color(94,94,94),
      p.color(60,60,60),
      p.color(20,20,20)
    ];
  }

  p.draw = function() {
    p.clear();
    //p.translate(-size/2, -size/2);
    generate_grid(xdim, ydim);
    for (var i = 0; i < 20; i++) {
      p.push();
      for (var j = 0; j < 10; j++) {
        p.strokeWeight(2);
        p.stroke(colors[p.floor(p.random(4))]);
        p.fill(colors[p.floor(p.random(4))]);
        display(p.min(j,4), p.min(i,3), 3 + dist(4,j) , 3 + dist(3,i));
        p.strokeWeight(2);
        // p.stroke(60,60,60);
        p.noFill();
        display(p.min(j,4), p.min(i,3), 3 + dist(4,j) , 3 + dist(3,i));

        p.translate(90 + (dist(4,j)  * size), 0);
      }
      p.pop();
      p.translate(0, 90 + (dist(3,i)  * size));
    }
  }

  function generate_grid(xd,yd) {
    grid = new Array(yd + 1);
    for (var i = 0; i < grid.length; i++) {
      grid[i] = new Array(xd + 1);
      for (var j = 0; j < grid[i].length; j++) {
        if (i == 0 || j == 0) grid[i][j] = {h:true, v:true};
        else if (i == 1 && j == 1) grid[i][j] = {h:true, v:true};
        else grid[i][j] = generate_cell(grid[i][j-1].h, grid[i-1][j].v);
      }
    }
  }

  function generate_cell(west,north) {
    if (!west && !north) return {h:false, v:false}
    if (!west) return {h:flip_coin(), v:true}
    if (!north) return {h:true, v:flip_coin()}
    let h = flip_coin();
    let v = h ? flip_coin() : true;
    return {h:h, v:v};
  }

  function display(x1,y1, sx,sy) {
    p.rect(size,size, (sx-1) * size, (sy-1) * size);
    for (var i = 1; i < sy; i++) {
      for (var j = 1; j < sx; j++) {
        if(grid[y1 + i][x1 + j].h) p.line(j * size, i * size, (j+1) * size, i * size);
        if(grid[y1 + i][x1 + j].v) p.line(j * size, i * size, j * size, (i+1) * size);
      }
    }
  }

  function flip_coin() {
    return p.random() < 0.5 ? false:true
  }

  function dist (n, m) {
    return p.max(n - m, m - n);
  }
}

new p5(sketch);
