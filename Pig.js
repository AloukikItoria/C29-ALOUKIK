class Pig extends BaseClass{

constructor(x,y){
 super(x,y,20,20);

 this.image = loadImage("sprites/enemy.png")

}











}








/*class Pig{

constructor(x,y){


var poption = {

isStatic:false,

restitution:0.5


}

this.body = Bodies.rectangle(x,y,20,20,poption);
this.width = 20;
this.height = 20;
this.image= loadImage("sprites/enemy.png")
World.add(world,this.body)



}


display(){
push();
imageMode(CENTER)
fill("green");
stroke("lightgreen");
strokeWeight("2")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height);
pop();






}





}
*/