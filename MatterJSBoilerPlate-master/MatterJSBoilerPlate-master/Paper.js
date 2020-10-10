class Paper{
    constructor(x,y,height,angle){
        var opt={
        restitution:0.3,
        fricton:0.5,
        density:1.2,
        isStatic:false
        }

        this.body=Bodies.circle(x,y,15,opt);
        this.diameter=30
        World .add(world,this.body)    
    }
display (){
  
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    
   
    fill("pink");
    ellipse(0, 0,15);
    pop();






}



}