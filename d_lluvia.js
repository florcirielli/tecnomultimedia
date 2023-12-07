class lluvia {
  
  constructor(lx, ly, lancho, lalto) {
    this.lx = lx;
    this.ly = ly;
    this.lancho = lancho;
    this.lalto = lalto;
    this.dx = random(1, 3);
    this.golpea = true;
  }

  mostrarLluvia() {
    fill(26, 142, 9);
    stroke(1);
    rect(this.lx, this.ly, this.lancho, this.lalto);
  }

  Cae() {
    this.ly += this.dx;
    if (this.ly>height) {
      this.ly = -this.lalto;
      this.golpea = true;
    }
  }
}
