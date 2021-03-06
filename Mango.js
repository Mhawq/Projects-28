class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            //density:1.2
        }
        this.body =Bodies.circle(x,y,radius,options)
        //this.width = width
        //this.height = height
        this.radius = radius
        this.image = loadImage("Plucking Mangoes/mango.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        ellipseMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2 )
        pop()
    }
}