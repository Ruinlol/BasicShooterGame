$(function() {
  var ctx = $('#canvas')[0].getContext('2d');
  var player = new Sniper(ctx);
  var cursorPos = {
    x:400,
    y:400
  }
  ctx.imageSmoothingEnabled = false;
  ctx.canvas.width = 800;
  ctx.canvas.height = 800;
  player.draw();
  animatePlayer();

  //calling the mouse capture function and storing the current mouse
  //position in the canvas element
$('#canvas').mousemove(function(e){
    var pos = getMousePos($('#canvas')[0],e);
    cursorPos.x = pos.x;
    cursorPos.y = pos.y;
})

// Animation fucntion for the player
  function animatePlayer ()  {
    setTimeout(function(){
      requestAnimationFrame(animatePlayer);
    },1000/29);
    player.walk(cursorPos.x, cursorPos.y);
  }

  //Capturing the mouse position in elevemnt
  function getMousePos(el, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}
});
