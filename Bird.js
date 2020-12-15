class Bird extends BaseClass{


constructor(x,y){
    super(x,y,30,30);

    this.image= loadImage("sprites/bird.png");
  

}

display(){

   // this.body.position.x = mouseX
    //this.body.position.y = mouseY
    super.display();

}






}



/*class Bird{



constructor(x,y){

var birdoption = {

restitution:0.2


}

this.body = Bodies.rectangle(x,y,20,20,birdoption)
this.image= loadImage("sprites/bird.png");
this.width = 30;
this.height = 30;
World.add(world,this.body) 


}


display(){
this.body.position.x = mouseX
this.body.position.y = mouseY
push();
imageMode(CENTER)
fill("yellow")
stroke("white")
strokeWeight("3")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height);
pop();




}
*/









