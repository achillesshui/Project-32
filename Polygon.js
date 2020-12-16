class Polygon {
    constructor(x, y, sides, radius) {
        var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
      
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, 70, 70);
      pop();
    }
  }