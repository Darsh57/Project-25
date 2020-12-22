class Dustbin{
constructor(x, y){
    this.x = x;
    this.y = y;
    this.dustbinwidth = 200;
    this.dustbinheight = 100;
    this.wallthickness = 20;
    this.angle = 0;

    this.bottombody = Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness, {isStatic: true});
    this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness, this.dustbinheight, {isStatic: true});
    Matter.Body.setAngle(this.leftwallbody, this.angle);
    this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness, this.dustbinheight, {isStatic: true});
    Matter.Body.setAngle(this.rightwallbody, -1*this.angle);

    World.add(world, this.bottombody);
    World.add(world, this.leftwallbody);
    World.add(world, this.rightwallbody);

    this.image = loadImage("dustbingreen.png");
}

    display(){
        var posbottom = this.bottombody.position;
        var posleftwall = this.leftwallbody.position;
        var posrightwall = this.rightwallbody.position;
        push()
      translate(posleftwall.x, posleftwall.y);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      //stroke(255)
      rotate(this.angle);
      //rect(0, 0, this.wallthickness, this.dustbinheight);
      pop()

      push()
      translate(posrightwall.x, posrightwall.y);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      //stroke(255)
      rotate(-1*this.angle);
      //rect(0, 0, this.wallthickness, this.dustbinheight);
      pop()

      push()
      translate(posbottom.x, posbottom.y-15);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      //stroke(255)
      imageMode(CENTER);
      image(this.image, 0, -this.dustbinheight/2, this.dustbinwidth, this.dustbinheight*2)
      pop()
    }
}