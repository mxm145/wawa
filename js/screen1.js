(function(){
  function screen1(){
    this.Container_constructor();
    this.timer = null;
    this.flag = 0;
    this.setup();
  }

  var p = createjs.extend(screen1, createjs.Container);

  p.setup = function(){
    var bg = new createjs.Bitmap(queue.getResult('bg1'));
    var light1 = new createjs.Bitmap(queue.getResult('light1'));
    var light2 = new createjs.Bitmap(queue.getResult('light2'));
    light1.x = light2.x = 0;
    light1.y = light2.y = 5;
    light2.alpha = 0;
    var btn = new createjs.Bitmap(queue.getResult('btn01'));
    btn.x = 258;
    btn.y = 910;
    var yu = new createjs.Bitmap(queue.getResult('letter1'));
    yu.x = 25;
    yu.y = 0;
    yu.alpha = 0;
    var jian = new createjs.Bitmap(queue.getResult('letter2'));
    jian.x = 240;
    jian.y = 0;
    jian.alpha = 0;
    var ni = new createjs.Bitmap(queue.getResult('letter3'));
    ni.x = 380;
    ni.y = 0;
    ni.alpha = 0;
    var de = new createjs.Bitmap(queue.getResult('letter4'));
    de.x = 520;
    de.y = 0;
    de.alpha = 0;
    var n2018 = new createjs.Bitmap(queue.getResult('letter5'));
    n2018.x = 0;
    n2018.y = 440;
    n2018.regX = 45;
    n2018.regY = 0;
    n2018.alpha = 0;

    this.addChild(bg);
    this.addChild(light1);
    this.addChild(light2);
    this.addChild(btn);
    this.addChild(yu);
    this.addChild(jian);
    this.addChild(ni);
    this.addChild(de);
    this.addChild(n2018);

    createjs.Tween.get(light1, {loop: -1}).to({alpha: 0}, 200);
    createjs.Tween.get(light2, {loop: -1}).to({alpha: 1}, 200);
    createjs.Tween.get(yu).to({alpha: 1, y: 250}, 500);
    createjs.Tween.get(jian).wait(400).to({alpha: 1, y: 285}, 500);
    createjs.Tween.get(ni).wait(700).to({alpha: 1, y: 285}, 500);
    createjs.Tween.get(de).wait(900).to({alpha: 1, y: 265}, 500);
    createjs.Tween.get(n2018)
      .wait(1400)
      .to({alpha: 1, x: 204}, 200)
      .call(function(){
        createjs.Tween.get(n2018, {loop: -1, bounce: true}).wait(200).to({scale: 1.1}, 500)
      });
  };

  window.screen1 = createjs.promote(screen1, "Container");
}());