class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3) {
        push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        push();
        World.remove(world,this.body);
        pop();
        this.visibility -=5
      }

    }
    score() {
      if(this.visibility<0&&this.visibility>-105) {
        score+=1;
      }
    }
  }