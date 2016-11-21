function Sniper (context) {
  this.width = 52.857;
  this.height = 63;
  this.frame = 0;
  this.context = context;
  this.postion = {
    x: 400,
    y: 400
  };
  this.sniper = new Image();
  this.sniper.src ='assets/sprites/sniper.png';
}

Sniper.prototype.draw = function (){
  this.context.drawImage(this.sniper,this.frame,0,this.width,this.height,this.postion.x,this.postion.y,
  this.width,this.height)
  this.context.save();
}

Sniper.prototype.walk = function (currentx, currenty) {
  // this.postion.x = currentx;
  // this.postion.y = currenty;
  this.context.clearRect(this.postion.x,this.postion.y,this.postion.x + this.width,
  this.postion.y + this.height);
  if (this.frame == 423) {
      this.frame = 0;
  }
  this.context.drawImage(this.sniper,this.frame,0,this.width,this.height,this.postion.x,this.postion.y,
  this.width,this.height)
  this.frame += 52.875;
}
