class Snow extends BaseClass {
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("snow4.webp")
        this.Visibility = 255;
    }

    display(){
        var pos = this.body.position;
        if(pos.y < 540){
            super.display();
        }
        else{
            push();
            this.visibility = this.visibility-5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
        }
    }

}