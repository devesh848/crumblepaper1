class Dustbin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height; 
        this.body2 = Bodies.rectangle(x-(width/2),y-(width/2),height,width,options);
        this.width2 = height; 
        this.height2 = width; 
        this.body3 = Bodies.rectangle(x+(width/2),y-(width/2),height,width,options); 
        this.width3 = height; 
        this.height3 = width; 
        World.add(world, this.body); 
        World.add(world, this.body2);   
        World.add(world, this.body3);   
       }
      display(){
        var pos =this.body.position; 
        var pos2 = this.body2.position; 
        var pos3 = this.body3.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);  
        rect(pos2.x,pos2.y,this.width2,this.height2); 
        rect(pos3.x,pos3.y,this.width3,this.height3);
      }
}