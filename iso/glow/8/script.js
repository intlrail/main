var w = window.innerWidth;
var h = window.innerHeight;

function getContext(w, h, append) {
  var canvas = document.createElement("canvas");
  if (Boolean(append) === true) document.body.appendChild(canvas);
  canvas.width = w || window.innerWidth;
  canvas.height = h || window.innerHeight;
  return canvas.getContext("2d");
}
var ctx = getContext(w, h, true);

var Point = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
  return this;
};
Point.prototype = {
  add: function(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  },
  sub: function(p) {
    this.x -= p.x;
    this.y -= p.y;
    return this;
  },
  clone: function() {
    return new Point(this.x, this.y);
  },
  copy: function(p) {
    this.x = p.x;
    this.y = p.y;
    return this;
  },
  set: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  normalize: function(value) {
    var l = this.length();
    this.x /= l;
    this.y /= l;
    if (value != null) this.multiplyScalar(value);
    return this;
  },
  multiplyScalar: function(value) {
    this.x *= value;
    this.y *= value;
    return this;
  },
  direction: function(other) {
    return other.clone().sub(this).normalize();
  },
  negate: function() {
    this.x *= -1;
    this.y *= -1;
    return this;
  },
  dot: function(p) {
    return this.x * p.x + this.y * p.y;
  },
  equals: function(other) {
    return this.x == other.x && this.y == other.y;
  },
  midpoint: function(other) {
    return new Point((this.x + other.x) / 2, (this.y + other.y) / 2);
  }
};
var Q = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.points = [
    new Point(this.x, this.y),
    new Point(this.x + this.w, this.y),
    new Point(this.x + this.w, this.y + this.h),
    new Point(this.x, this.y + this.h)
  ];
  this.area = this.w * this.h;
};
Q.prototype = {
  draw: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.w, this.y);
    ctx.lineTo(this.x + this.w, this.y + this.h);
    ctx.lineTo(this.x, this.y + this.h);
    ctx.closePath();
  },
  split: function() {
    if (this.w * this.h < 100) return [];
    var ratio = Math.max(this.w, this.h) / Math.min(this.w, this.h);
    if (ratio < 0.25 || ratio > 5) return [];

    var x = this.x;
    var y = this.y;

    var t0 = 0.5 + (Math.random() - 0.5) * 0.5;
    var t1 = 0.5 + (Math.random() - 0.5) * 0.5;

    var w = this.w * t0;
    var h = this.h * t1;
    var w2 = this.w * (1 - t0);
    var h2 = this.h * (1 - t1);

    return [
      new Q(x, y, w, h),
      new Q(x + w, y, w2, h),
      new Q(x, y + h, w, h2),
      new Q(x + w, y + h, w2, h2)
    ];
  },
  stairs: function(ctx) {
    ctx.fillStyle = "#fc9824";

    var p0, p1, p2;
    var id = Math.random() > 0.5 ? 0 : 1;
    p0 = this.points[0];
    p1 = this.points[1];
    p2 = this.points[3];

    var a = 0;
    var w = this.w;
    var step = 10 / this.h;
    var x0 = p0.x, y0 = p0.y, y1;

    for (var i = 0; i < 1; i += step) {
      x0 += 3;
      if (id == 0) {
        y0 = lerp(i, p0.y, p2.y);
        y1 = lerp(i + step, p0.y, p2.y);
      } else {
        y0 = lerp(1 - i, p0.y, p2.y);
        y1 = lerp(1 - i + step, p0.y, p2.y);
      }
      a += 0.15;
      ctx.globalAlpha = a;

      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(p1.x, y0);
      ctx.lineTo(p1.x, y1);
      ctx.lineTo(x0, y1);
      ctx.stroke();
      ctx.fill();

      ctx.translate(0, step * 0.5);
    }
  }
};



function reset() {
  w = window.innerWidth;
  h = window.innerHeight;
  ctx.canvas.width = w;
  ctx.canvas.height = h;

//* canvsa dimension & style *//

  var c = new Point();
  c.radius = h / 1.75;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#ff423e";
  ctx.globalAlpha = 1;

  var quads = [];
  var q = new Q(c.x - c.radius, c.y - c.radius, c.radius * 1.25, c.radius * 1.25);
  var qs = q.split();
  qs.forEach(function(q) {
    var qs = q.split();
    qs.forEach(function(q) {
      var qs = q.split();
      qs.forEach(function(q) {
        var qs = q.split();
        qs.forEach(function(q) {
          quads.push(q);
        });
      });
    });
  });

//* canvsa perspective *//

  var s = 1;
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.scale(1 * s, 0.62 * s);
  ctx.rotate(45 * Math.PI / 180);

  var rects = [];
  var small = [];
  var big = [];

  ctx.beginPath();
  quads.forEach(function(q, i) {
    var cq = new Point(q.x + q.w / 2, q.y + q.h / 2);

    if (!circleContainsPoint(cq, c)) return;

    if (Math.random() > (1 - distance(cq, c) / c.radius) * 2) return;

    var offset = 4;

//* skyscraper density *//

    if (q.area < Math.pow(45, 2)) {
      q.split().forEach(function(q) {
        ps = offsetPolygon(q.points.concat(), offset); //q.points;//
        q.points = ps;
        ctx.moveTo(ps[0].x, ps[0].y);
        ctx.lineTo(ps[1].x, ps[1].y);
        ctx.lineTo(ps[2].x, ps[2].y);
        ctx.lineTo(ps[3].x, ps[3].y);
        ctx.lineTo(ps[0].x, ps[0].y);
        big.push(q);
      });
      return;
    }

    if (q.area < Math.pow(120, 2.5)) {
      q.split().forEach(function(q) {
        ps = offsetPolygon(q.points.concat(), offset);
        q.points = ps;
        ctx.moveTo(ps[0].x, ps[0].y);
        ctx.lineTo(ps[1].x, ps[1].y);
        ctx.lineTo(ps[2].x, ps[2].y);
        ctx.lineTo(ps[3].x, ps[3].y);
        ctx.lineTo(ps[0].x, ps[0].y);
        small.push(q);
      });
      return;
    }

    if (q.area < Math.pow(95, 2)) {
      q.split().forEach(function(q) {
        var ps = offsetPolygon(q.points.concat(), offset);
        q.points = ps;
        rects.push(q);

        ctx.moveTo(ps[0].x, ps[0].y);
        ctx.lineTo(ps[1].x, ps[1].y);
        ctx.lineTo(ps[2].x, ps[2].y);
        ctx.lineTo(ps[3].x, ps[3].y);
        ctx.lineTo(ps[0].x, ps[0].y);
      });
    } else {
      var ps = offsetPolygon(q.points.concat(), offset);
      q.points = ps;
      small.push(q);

      ctx.moveTo(ps[0].x, ps[0].y);
      ctx.lineTo(ps[1].x, ps[1].y);
      ctx.lineTo(ps[2].x, ps[2].y);
      ctx.lineTo(ps[3].x, ps[3].y);
      ctx.lineTo(ps[0].x, ps[0].y);
    }
  });
  ctx.closePath();
  ctx.stroke();

  ctx.save();
  ctx.clip();
  ctx.shadowBlur = 25;
  ctx.shadowColor = "#fff";
  ctx.fillRect(-w, -h, w * 2, h * 2);
  rects.forEach(function(r, i) {
    r.stairs(ctx, i);
  });
  ctx.restore();

  /*rectangular panels*/

  small.forEach(function(q, id) {
    if (id % 4 == 0) {
      var inc = 10;
      var tot = 10;
      ctx.save();
      q.draw(ctx);
      ctx.clip();
      ctx.fillStyle = "#ffff19";
      for (var i = 0; i < 10; i++) {
        ctx.translate(inc, inc);
        ctx.globalAlpha = 1 - i / tot;
        q.draw(ctx);
        ctx.fill();
      }
      ctx.restore();

      return;
    }

//*negative space*//

    ctx.globalAlpha = 1;
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = "#111";
    ctx.shadowBlur = 125;
    ctx.shadowColor = "#fff";
    ctx.save();
    var inc = 1;
    var tot = 1;
    for (var i = 0; i < tot; i += inc) {
      ctx.translate(-inc, -inc);
      ctx.globalAlpha = 1 - i / tot / 2;
      q.draw(ctx);
      ctx.fill();
    }
    ctx.restore();
    ctx.stroke();
  });

//*pencil skyscrapers*//

  big.forEach(function(q) {
    ctx.globalAlpha = 0.5;
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#fff";

    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ffdd1a";

//*skyscraper height*//

    var inc = 1;
    var tot = 20 + Math.random() * 30 * 5;

    ctx.save();
    for (var i = 0; i < tot; i += inc) {
      ctx.translate(-inc, -inc);
      // ctx.globalAlpha = Math.sqrt( ( ( i/tot ) * .15 ) ) //* .5;
      ctx.globalAlpha = Math.pow(i / tot * 2, 10);
      // ctx.shadowColor = i%10 == 0 ? "#fff" : "#AAA";
      q.draw(ctx);
      ctx.stroke();
    }
    ctx.restore();

    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#000";
    ctx.globalAlpha = 0.5;
    ctx.stroke();
  });

//* Noise FX *//

/*  function noise(amount, data, w, h) {
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var id = (y * w + x) * 4;
        var noise = ~~((Math.random() - 0.5) * amount);
        data[id] += noise;
        data[id + 1] += noise;
        data[id + 2] += noise;
      }
    }
    return data;
  } 
  var imgData = ctx.getImageData(0, 0, w, h);
  imgData.data = noise(32, imgData.data, w, h);
  ctx.putImageData(imgData, 0, 0);
*/

//* "reset" button *//

  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fff";
  ctx.font = "12px verdana";
  ctx.fillText("click to reset", 16, h-16);
}
window.addEventListener("mousedown", reset);
window.addEventListener("touchstart", reset);
reset();

function squareDistance(x0, y0, x1, y1) {
  return (x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1);
}
function distance(p0, p1) {
  return Math.sqrt(squareDistance(p0.x, p0.y, p1.x, p1.y));
}
function circleContainsPoint(p, circle) {
  return distance(circle, p) < circle.radius;
}
function offsetPolygon(points, offset) {
  var tmp = [];
  var count = points.length;
  for (var j = 0; j < count; j++) {
    // finds the previous, current and next point
    var i = j - 1;
    if (i < 0) i += count;
    var k = (j + 1) % count;

    var pre = points[i];
    var cur = points[j];
    var nex = points[k];

    //create 2 lines, parallel to both edges at a given distance 'offset'

    //computes a normal vector to the direction of the: prev -> current edge of length offset
    var l1 = distance(cur, pre);
    var n1 = new Point(
      -((cur.y - pre.y) / l1) * offset,
      (cur.x - pre.x) / l1 * offset
    );

    //does the same for the : current -> next edge
    var l2 = distance(cur, nex);
    var n2 = new Point(
      -((nex.y - cur.y) / l2) * offset,
      (nex.x - cur.x) / l2 * offset
    );

    //and create 2 points at both ends of the edge to obtain a parallel line
    var p1 = new Point(pre.x + n1.x, pre.y + n1.y);
    var p2 = new Point(cur.x + n1.x, cur.y + n1.y);
    var p3 = new Point(cur.x + n2.x, cur.y + n2.y);
    var p4 = new Point(nex.x + n2.x, nex.y + n2.y);

    var ip = lineIntersectLine(p1, p2, p3, p4);
    if (ip != null) {
      tmp.push(ip);
    }
  }
  return tmp;
}
function lineIntersectLine(A, B, E, F, ABasSeg, EFasSeg) {
  var a1, a2, b1, b2, c1, c2;

  a1 = B.y - A.y;
  b1 = A.x - B.x;
  a2 = F.y - E.y;
  b2 = E.x - F.x;

  var denom = a1 * b2 - a2 * b1;
  if (denom == 0) {
    return null;
  }

  c1 = B.x * A.y - A.x * B.y;
  c2 = F.x * E.y - E.x * F.y;

  ip = new Point();
  ip.x = (b1 * c2 - b2 * c1) / denom;
  ip.y = (a2 * c1 - a1 * c2) / denom;

  if (A.x == B.x) ip.x = A.x;
  else if (E.x == F.x) ip.x = E.x;
  if (A.y == B.y) ip.y = A.y;
  else if (E.y == F.y) ip.y = E.y;

  if (ABasSeg) {
    if (A.x < B.x ? ip.x < A.x || ip.x > B.x : ip.x > A.x || ip.x < B.x)
      return null;
    if (A.y < B.y ? ip.y < A.y || ip.y > B.y : ip.y > A.y || ip.y < B.y)
      return null;
  }
  if (EFasSeg) {
    if (E.x < F.x ? ip.x < E.x || ip.x > F.x : ip.x > E.x || ip.x < F.x)
      return null;
    if (E.y < F.y ? ip.y < E.y || ip.y > F.y : ip.y > E.y || ip.y < F.y)
      return null;
  }
  return ip;
}
function lerp(t, a, b) {
  return a * (1 - t) + b * t;
}