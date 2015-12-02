 document.getElementsByClassName("search")[0].onclick = function(){
    this.nextSibling.style.display='block';
    //$(this).next("form").fadeToggle();
    }

/*$('.faq').accordion();
$('.vids').accordion();
//$( '.swipebox' ).swipebox();
 /*$('#slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: false,
        videoWidth: false, // Default false; Type: Boolean/Number
videoHeight: false, // Default false; Type: Boolean/Number
         video:true,
       responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })*/
document.getElementsByClassName("wrapper")[0].onclick = function(){

      alert("Wrapper event triggered");

      removeClass(".wrapper", "sidebarlftin");
      removeClass(".wrapper", "sidebarrhtin");
      removeClass(".tigger", "open");
      //toggleClass(".options", "open2");
      removeClass(".expend", "openlabels");
      hideElement(".overlay1");

      //$(".wrapper").removeClass("sidebarlftin");
      //$(".wrapper").removeClass("sidebarrhtin");
      //$(".tigger").removeClass("open");
      //$(".options").toggleClass("open2");
      //$(".expend").removeClass("openlabels");
      //$(".overlay1").fadeOut("slow");*/
}

document.getElementsByClassName("tigger")[0].onclick = function(event){
     // console.log(event)
    //alert("tigger event triggered");
    event = event || window.event // cross-browser event

    if (event.stopPropagation) {
        // W3C standard variant
        event.stopPropagation();
    } else {
        // IE variant
        event.cancelBubble = true;
    }

    toggleClass(this, "open");
    toggleClass(".wrapper", "sidebarlftin");
    showElement('.overlay1');

  /*  e.stopPropagation();
    $(this).toggleClass("open");
    $(".wrapper").toggleClass("sidebarlftin");
    $(".overlay1").fadeIn("slow");*/

};

document.getElementsByClassName("options")[0].onclick = function(event){
    //alert("options event triggered");
    event = event || window.event // cross-browser events

    if (event.stopPropagation) {
        // W3C standard variant
        event.stopPropagation();
    } else {
        // IE variant
        event.cancelBubble = true;
    }

     toggleClass(this,"open2");
      toggleClass(".wrapper","sidebarrhtin");
      showElement('.overlay1');


    /*e.stopPropagation();
    $(this).toggleClass("open2");
    $(".wrapper").toggleClass("sidebarrhtin");
    $(".overlay1").fadeIn("slow");*/
};

document.getElementsByClassName("expend")[0].onclick = function(){
    alert("expend event triggered");
    toggleClass(this, "openlabels");
    toggleClass(".wrapper","sidebarin_labels");
}


/*$(function() {
$('#menu').mmenu({
extensions  : ['theme-dark', 'effect-slide-menu', 'pageshadow',"effect-listitems-slide" ],
searchfield : true,
counters    : true,
navbar      : {
title       : 'BOO MENU'
},
navbars     : [
{
position    : 'top',
content     : [ 'searchfield' ]
}, {
position    : 'top',
content     : [
'prev',
'title',
'close'
]
}
]
});
});


*/

function toggleClass(ele, cName){
  var eleList = [], classList = [], classIndex = 0, i = 0;

  if(typeof ele === 'object') {
    eleList.push(ele);
  } else {
    eleList = document.querySelectorAll(ele);
  }


  for(var i=0; i < eleList.length; i++ ) {
      var currentElement = eleList[i];
      classList = currentElement.className.split(" ");
      classIndex = classList.indexOf(cName);
      newClassName = "";
      if(classIndex > -1){
          classList.splice(classIndex, 1);
          newClassName = classList.join(" ");
      } else {
          classList.push(cName);
          newClassName = classList.join(" ");
      }
      currentElement.className = newClassName;
  }
}

function removeClass(ele, cName) {
    var eleList = [], classList = [], classIndex = 0, i = 0;

    if(typeof ele === 'object') {
      eleList.push(ele);
    } else {
      eleList = document.querySelectorAll(ele);
    }

    for(var i=0; i < eleList.length; i++ ) {
      var currentElement = eleList[i];
      classList = currentElement.className.split(" ");
      classIndex = classList.indexOf(cName);
      if(classIndex > -1){
        classList.splice(classIndex, 1);
        currentElement.className = classList.join(" ");
      }
    }
}

function addClass(ele, cName) {
    var eleList = [], classList = [], classIndex = 0, i = 0;

    if(typeof ele === 'object') {
      eleList.push(ele);
    } else {
      eleList = document.querySelectorAll(ele);
    }

    for(var i=0; i< eleList.length; i++ ) {
      var currentElement = eleList[i];
      classList = currentElement.className.split(" ");
      classIndex = classList.indexOf(cName);
      if(classIndex == -1){
          classList.push(cName);
          newClassName = classList.join(" ");
          currentElement.className = lassList.join(" ");
      }
    }
}

function hideElement(ele) {
  eleList = document.querySelectorAll(ele);
    for(var i=0; i< eleList.length; i++ ) {
      var currentElement = eleList[i];
      currentElement.style.display = "none";
    }
}

function showElement(ele) {
  eleList = document.querySelectorAll(ele);
  for(var i=0; i< eleList.length; i++ ) {
    var currentElement = eleList[i];
    currentElement.style.display = "block";
  }
}



function findIndex( elem ) {
    var i, len = items.length;
    for(i=0; i<len; i++) {
        if (items[i]===elem) {
            return i;
        }
    }
    return -1;
}

    var list=document.getElementById('videotag');
    items=list.getElementsByTagName('li');

var vwrap=document.getElementById('videoWrap');
    wrapitems=vwrap.getElementsByTagName('div');

    list.onclick = function(e) {
         var evt = e || window.event,
    src = evt.target || evt.srcElement;
    var myIndex = findIndex(src);
    //alert(myIndex);
        if(myIndex==-1){
			 return false;
      }
        else{
      for (i=0;i<items.length;i++) {
          console.log(items.length);
          items[i].className=" ";
      }
    items[myIndex].className='active';

     for (i=0;i<wrapitems.length;i++) {
          console.log(items.length);
          wrapitems[i].className=" ";
      }
    wrapitems[myIndex].className='active';
    //document.getElementById('videotag'+(myIndex+1)).className='active';
        }
};
