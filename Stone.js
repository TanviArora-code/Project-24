class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(300, y, 50, 50, options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
        var stonepos = this.body.position;
      push();
      translate(stonepos.x, stonepos.y);
      strokeWeight(3);
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  