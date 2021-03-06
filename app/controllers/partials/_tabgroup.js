/**
 * @class Controller.partials._tabgroup
 * Display tabgroup bottom view
 *
 */
var currentTab = null;
var objTab = {};
var menuTab = null;

(function constructor(args){

 })($.args);

 $.load = function(menu){
   menuTab = menu;
   _.each(menu, function(m){

     objTab[m.id] = Alloy.createController('/partials/_tab', m);
     $.tabgroup.add(objTab[m.id].getView());
   });

   var m = menuTab[0];
   handleClick({
     source : {
       controller : m.controller,
       type : 'menu',
       idMenu : m.id
     }
   });

 };

function handleClick(e){

  var s = e.source,
    type = s.type;

  if(type === "menu" || type === "view"){
    $.trigger('click', {
      controller : s.controller,
      type : type,
      id : s.idMenu
    });

    if(type === 'menu' && s.controller !== 'menu'){

      if(currentTab){
        if(objTab[currentTab]){
          objTab[currentTab].disable();
        }
      }
      currentTab = s.idMenu;
      if(objTab[s.idMenu]){
        objTab[s.idMenu].enable();
      }

    }
  }

}

$.enableLast = function(){

  if(currentTab){
    if(objTab[currentTab]){
      objTab[currentTab].disable();
    }
  }

  currentTab = menuTab[menuTab.length-1].controller;
  objTab[currentTab].enable();

};
