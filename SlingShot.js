class SlingShot{

constructor(bodyA , pointB){

var slingoptions={

bodyA:bodyA,
pointB:pointB,
stiffness:1,
length:10

}


this.SlingShot = Constraint.create(slingoptions)
World.add(world,this.SlingShot)
this.image1 = loadImage("sprites/sling1.png")
this.image2 = loadImage("sprites/sling2.png")
this.image3 = loadImage("sprites/sling3.png")
this.pointB= pointB;


}

display(){
    image(this.image1,100,100)
    image(this.image2,70,100)
    if(this.SlingShot.bodyA){
var posA = this.SlingShot.bodyA.position
var posB = this.pointB
//var posB = this.pointB
line(posA.x-10,posA.y,posB.x+10,posB.y-24)
line(posA.x-10,posA.y,posB.x+50,posB.y-24)
image(this.image3,posA.x-15,posA.y-10,5,24)
    }





}

 fly(){


this.SlingShot.bodyA = null

 }

}