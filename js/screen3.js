(function(window){
  function screen3(nickname){
    this.Container_constructor();
    this.nickname = nickname;
    this.setup();
  }

  var p = createjs.extend(screen3, createjs.Container);

  p.setup = function(){
    var bg = new createjs.Bitmap(queue.getResult('res'));
    var header = new createjs.Bitmap(queue.getResult('headimg'));
    var shape = new createjs.Shape();
    shape.graphics.drawCircle(0, 0, 48);
    shape.x = 162;
    shape.y = 120;
    header.mask = shape;
    header.x = 114;
    header.y = 72;
    var text = new createjs.Text(this.nickname, "50px Arial", "#5b676f");
    text.x = 230;
    text.y = 100;
    var text2 = new createjs.Text("长按图片可保存", "30px Arial", "#996c33");
    text2.x = 420;
    text2.y = 1155;
    this.addChild(bg);
    this.addChild(header);
    this.addChild(text);
    this.addChild(text2);
    setTimeout(savePic, 1000);
    // savePic();
  };

  window.screen3 = createjs.promote(screen3, "Container");
}(window));