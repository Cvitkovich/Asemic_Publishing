function Cell(c, r, w, h) {
    this.c = c;
    this.r = r;
    this.x = c * w;
    this.y = r * h;
    this.w = w;
    this.h = h;
    this.revealed = true;
    this.neighborCount = 0;
    this.header = false;
    this.body = false;
    this.caption = false;
    this.illustration = false;
}

// How do we look at neighbors?
// Each cell has 8 neighbors not including itself.
// We can do that in a loop


Cell.prototype.show = function () {
    stroke(0);
    // noFill();
    // rect(this.x, this.y, this.w, this.h);

    if (this.header) {
        fill(255);
        circle(this.x, this.y, this.w * 2);
    } else if (this.body) {
        fill(200);
        circle(this.x + this.w / 2, this.y + this.w / 2, this.w);
    } else if (this.illustration) {
        fill(75);
        circle(this.x + this.w * 0.25, this.y + this.h * 0.25, this.w / 2);
        circle(this.x + this.w * 0.75, this.y + this.h * 0.25, this.w / 2);
        circle(this.x + this.w * 0.25, this.y + this.h * 0.75, this.w / 2);
        circle(this.x + this.w * 0.75, this.y + this.h * 0.75, this.w / 2);
    } else if (this.caption) {
        fill(150);
        circle(this.x + this.w * 0.25, this.y + this.h * 0.25, this.w / 2);
        circle(this.x + this.w * 0.75, this.y + this.h * 0.25, this.w / 2);
        circle(this.x + this.w * 0.25, this.y + this.h * 0.75, this.w / 2);
        circle(this.x + this.w * 0.75, this.y + this.h * 0.75, this.w / 2);
    } else {

    }
}