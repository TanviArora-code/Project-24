class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(500, y, 100, 100, options);
      this.width = 90;
      this.height = 130;
      World.add(world, this.body);
    };
    display(){
        var ironpos = this.body.position;
      push();
      translate(ironpos.x, ironpos.y);
      strokeWeight(3);
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  