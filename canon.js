class Canon {
constructor(x,y,h,w,angle){
this.x = x;
this.y = y;
this.h = h ;
this.w = w ;
this.angle=angle;
this.canonBase = loadImage ("assets/cannonBase.png");
this.canonImg = loadImage ("assets/canon.png");
}
 
display(){
    image(this.canonImg, this.x , this.y, this.w , this.h);
    image(this.canonBase, 70, 20, 200, 200);
}
}