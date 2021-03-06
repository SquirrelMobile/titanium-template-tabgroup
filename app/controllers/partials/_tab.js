/**
 * @class Controller.partials._tabgroup
 * Display tabgroup bottom view
 *
 */
(function constructor(args){

  if(args.controller){
    $.tab.controller = args.controller;
  }

  if(args.image){
    $.img.applyProperties(args.image);
  }

  if (args.id) {
    $.tab.idMenu = args.id;
  }

  if(args.title){
    $.lblTab.text = args.title;
  }

  if(args.last){
    $.tab.left = -1;
  }

})($.args);

function handleClick(e){

  $.trigger('click', e);

}

$.disable = function(){
  $.img.color = "white";
  $.lblTab.color = "white";
};

$.enable = function(){
  $.img.color = Alloy.CFG.COLORS.black;
  $.lblTab.color =  Alloy.CFG.COLORS.black;
};
