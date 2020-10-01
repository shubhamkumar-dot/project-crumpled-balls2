class Paper{
    constructor(x,y,radius){
        var ball_options = {
           'isStatic':false,
           'restitution':0.3,
           'friction':0.5,
           'density':1.2 
        }
        this.body = Bodies.circle(55,650,70,ball_options);
        this.image = loadImage("sprites/paper.png");
        this.radius = 70;

        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill("red");
         imageMode(RADIUS);
         image(this.image,0,0,this.radius);
         pop();
 
    }
}