(function(window){
  function screen2(index){
    this.Container_constructor();
    this.ct;
    this.box = queue.getResult('box');
    this.stick = new createjs.Bitmap(queue.getResult('img01'));
    this.claw  = new createjs.Bitmap(queue.getResult('img02'));
    this.setup();
  }

  var p = createjs.extend(screen2, createjs.Container);

  p.setup = function(){
    var bgLeft = new createjs.Bitmap(queue.getResult('bg2'));
    bgLeft.sourceRect = new createjs.Rectangle(0, 0, 375, 1206);
    var bgRight = new createjs.Bitmap(queue.getResult('bg2'));
    bgRight.sourceRect = new createjs.Rectangle(375, 0, 375, 1206);
    bgRight.x = 750;
    bgRight.regX = 375;
    var bg = new createjs.Bitmap(queue.getResult('res'));
    var light1 = new createjs.Bitmap(queue.getResult('light1'));
    var light2 = new createjs.Bitmap(queue.getResult('light2'));
    var ding = new createjs.Bitmap(queue.getResult('img03'));
    var boundle = new createjs.Bitmap(queue.getResult('boundle'));
    boundle.y = 650;
    ding.x = 52;
    this.stick.x = 69;
    this.stick.y = 8;
    this.claw.x = 0;
    this.claw.y = 300;
    var theClaw = new createjs.Container();
    theClaw.addChild(ding, this.stick);
    theClaw.addChild(this.claw);
    light1.x = light2.x = 0;
    light1.y = light2.y = 5;
    light2.alpha = 0;
    var btn = new createjs.Bitmap(queue.getResult('btn02'));
    btn.x = 272;
    btn.y = 940;
    btn.on("click", this.clawClick, this, true);
    this.addChild(bg);
    this.addChild(bgLeft);
    this.addChild(bgRight);
    this.addChild(theClaw);
    this.addChild(boundle);
    this.addChild(light1);
    this.addChild(light2);
    this.addChild(btn);

    this.ct = createjs.Tween.get(theClaw, {loop: -1, bounce: true}).to({x:592}, 2000);
    createjs.Tween.get(light1, {loop: -1}).to({alpha: 0}, 200);
    createjs.Tween.get(light2, {loop: -1}).to({alpha: 1}, 200);
  };

  p.clawClick = function(){
    if (!this.ct.paused) {
      this.ct.paused = true;
    }
    var i = this.index;
    var box = this.box;
    createjs.Tween.get(this.stick).to({scaleY: 2.3}, 1000).wait(500).to({scaleY: 1}, 1000);
    createjs.Tween.get(this.claw)
      .to({y: 680}, 1000)
      .wait(500)
      .call(function(){
        this.image = box;
      })
      .to({y: 300}, 1000)
      .wait(1000)
      .call(function(){
        next2();
      });
    // console.log(this.ct.paused)
  }

  window.screen2 = createjs.promote(screen2, "Container");
}(window));