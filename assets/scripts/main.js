$(function() {
  var ctx = $('#canvas')[0].getContext('2d');
  var player = new Sniper(ctx);
  ctx.imageSmoothingEnabled = false;
  ctx.canvas.width = 800;
  ctx.canvas.height = 800;
  player.draw();
  animate();

  function animate ()  {
    setTimeout(function(){
      requestAnimationFrame(animate);
    },1000/29);
    player.walk();
  }
});
