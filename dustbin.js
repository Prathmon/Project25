class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic : true
        }
        this.width = 200;
        this.height = 210;
        this.x = x;
        this.y = y;
        this.dustbinl = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.dustbinr = Bodies.rectangle(this.x + 50, this.y, this.width, this.height, options);
        this.dustbinm = Bodies.rectangle(this.x +25, this.y, 210, 200);
        
        this.image = loadImage("dustbin.png");
        World.add(world, this.dustbinl);
        World.add(world, this.dustbinm);
        World.add(world, this.dustbinr);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      }
}