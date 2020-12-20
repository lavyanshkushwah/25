class Paper{
constructor(x,y,r){
var options={
isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2

}


this.body=Matter.Bodies.circle(x,y,r,options);
    World.add(world,this.body)
this.r=r;
}
display(){
var paperpos =this.body.position;
push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
fill(255,0,0)
ellipse(0,0,this.diameter,this.diameter)
pop()


}





















}







