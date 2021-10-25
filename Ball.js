class Ball {
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;

        var options={
            restitution:1.0,
            //density:0.1,
            //friction:0.01
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill("lime");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}