class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.shot1=loadImage("sprites/sling1.png");
        this.shot2=loadImage("sprites/sling2.png");
        this.shot3=loadImage("sprites/sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){ 
        this.sling.bodyA = body;
     }


    fly(){
        this.sling.bodyA = null;
    }


    display(){
     image(this.shot1,200,20);
     image(this.shot2,170,20);
     
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            //strokeWeight(10);
            //stroke(48,22,8);

            //line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            //line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            //image(this.shot3,pointA.X-30,pointA.y-10,15,30);
            if(pointA.x<220){
            strokeWeight(6); 
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
             line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3); 
             image(this.shot3, pointA.x-30, pointA.y-10,15,30);
            }
            else{
                strokeWeight(3); 
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                 line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3); 
                 image(this.shot3, pointA.x+25, pointA.y-10,15,30);  
            }


           pop();
        }
    }
    
}