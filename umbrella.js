class Umbrella
{
    constructor(x,y)
    {
     
            var options = {
                restitution: 1,
                friction: 0,
                isStatic:true
            }
           
            this.body = Bodies.circle(200,530 , 50, options);
           ;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.x =x;
        this.y = y;
         
        World.add(world, this.body)
    }

    display()
    {
        imageMode(CENTER)
        image(this.image,this.x,this.y,300,300)
    }
}