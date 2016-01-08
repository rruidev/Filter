 document.getElementsByClassName("search")[0].onclick = function(){
    this.nextSibling.style.display='block';
    //$(this).next("form").fadeToggle();
    }
document.getElementsByClassName('tip-ck')[0].onclick = function(){
		 addClass(".tip-hm", "active");
		 removeClass(".hm-lg", "active");
		 removeClass(".dsh-brd", "active");
		  hideElement(".slider");
		 hideElement(".blocks");
		 hideElement(".options");
		 hideElement(".dashbrd-cont");
		 showElement(".tips-cont");
	  
}	
document.getElementsByClassName('sd-block tips')[0].onclick = function(){
		 addClass(".tip-hm", "active");
		 removeClass(".hm-lg", "active");
		 removeClass(".dsh-brd", "active");
		 hideElement(".slider");
		 hideElement(".blocks");
		 hideElement(".options");
		 hideElement(".dashbrd-cont");
		 showElement(".tips-cont");
	  
}	

document.getElementsByClassName('appseticon')[0].onclick = function(){

      removeClass(".sidebarrht", "sidebarrhtin");
	  removeClass(".search","searchrt");
}	
document.getElementsByClassName('strt-button')[0].onclick = function(){

     addClass(".emilist", "show");
	addClass(".strt-button", "hide");
}
document.getElementsByClassName("dsh-brd")[0].onclick = function(){
		 removeClass(".hm-lg", "active");
		 addClass(".dsh-brd", "active");
		 hideElement(".slider");
		 hideElement(".blocks");
		 hideElement(".options");
		 showElement(".dashbrd-cont");		 
}	
document.getElementsByClassName("hm-lg")[0].onclick = function(){
		 removeClass(".dsh-brd", "active");
		 addClass(".hm-lg", "active");
		 showElement(".slider");
		 showElement(".blocks");
		 hideElement(".dashbrd-cont");
}
document.getElementsByClassName("wrapper")[0].onclick = function(){

      //alert("Wrapper event triggered");

      removeClass(".wrapper", "sidebarlftin");
      removeClass(".sidebarrht", "sidebarrhtin");
      removeClass(".tigger", "open");
      //toggleClass(".options", "open2");
      removeClass(".expend", "openlabels");
      hideElement(".overlay1");
	removeClass('.search','searchrt')
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
      toggleClass(".sidebarrht","sidebarrhtin");
	  toggleClass(".search","searchrt");
      showElement('.overlay1');


    /*e.stopPropagation();
    $(this).toggleClass("open2");
    $(".wrapper").toggleClass("sidebarrhtin");
    $(".overlay1").fadeIn("slow");*/
};

document.getElementsByClassName("expend")[0].onclick = function(){
    //alert("expend event triggered");
    toggleClass(this, "openlabels");
    toggleClass(".wrapper","sidebarin_labels");
}
document.getElementsByClassName("vd-tb")[0].onclick = function(){
    //alert("vd tb event triggered");
   // toggleClass(this, "active");
	removeClass(".fq-tb", "active");
	addClass(".vd-tb", "active");
	hideElement("#tab3");
	showElement('#tab4');
    //toggleClass(".wrapper","sidebarin_labels");
}
document.getElementsByClassName("fq-tb")[0].onclick = function(){
    //alert("vd tb event triggered");
   // toggleClass(this, "active");
	removeClass(".vd-tb", "active");
	addClass(".fq-tb", "active");
	hideElement("#tab4");
	showElement('#tab3');
    //toggleClass(".wrapper","sidebarin_labels");
}



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
          currentElement.className = classList.join(" ");
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
	console.log(menuitems.length);
    var i, len = menuitems.length;
    for(i=0; i<len; i++) {
        if (menuitems[i]===elem) {
		console.log(i);
            return i;
        }
    }
    return -1;
}
function findsubmenuIndex( elem ) {
	var j, submenulen = submenuitems.length;
	for(j=0; j<submenulen; j++) {
        if (submenuitems[j]===elem) {
		console.log(j);
            return j;
        }
    }


}
  //  var list=document.getElementById('videotag');
  //  items=list.getElementsByTagName('li');
	
	 var menu=document.getElementById('menu');
    menuitems=menu.getElementsByTagName('li');
	var submenu=document.getElementById('sub-menu');
    submenuitems=submenu.getElementsByTagName('div');
console.log( submenu);

 menu.onclick = function(e) {
// alert("hi");
         var evt = e || window.event,
    src = evt.target.parentNode || evt.srcElement.parentNode;
	console.log(src);
    var myIndex = findIndex(src);
    //alert(myIndex);
        if(myIndex==-1){
			 return false;
      }
        else{
      for (i=0;i< menuitems.length;i++) {
          console.log( menuitems.length);
           menuitems[i].className=" ";
      }
     menuitems[myIndex].className='active';

     
    //document.getElementById('videotag'+(myIndex+1)).className='active';
        }
};
submenu.onclick = function(e) {
// alert("hi");
         var evt = e || window.event,
    src = evt.target.parentNode || evt.srcElement.parentNode;
	console.log(src);
    var myIndex = findsubmenuIndex(src);
    //alert(myIndex);
        if(myIndex==-1){
			 return false;
      }
        else{
      for (i=0;i< submenuitems.length;i++) {
          console.log( submenuitems.length);
           submenuitems[i].className=" ";
      }
     submenuitems[myIndex].className='active';

     
    //document.getElementById('videotag'+(myIndex+1)).className='active';
        }
};

$(document).ready(function(){
	$('.users tr').on('click',function(){
	if($(this).siblings().hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
	else{
	$(this).addClass('active');
	}
})
$('.task-typ li').on('click',function(){
	if($(this).siblings().hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
	else{
	$(this).addClass('active');
	}
})
$('.notofication-cnt>ul').on('click',function(){
	if($(this).siblings().hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).siblings().children().removeClass('active');
	$(this).addClass('active');
	$(this).children().addClass('active');
	}
	else{
	$(this).addClass('active');
	$(this).children().addClass('active');
	}
})
$('.alert-cnt>ul').on('click',function(){
	if($(this).siblings().hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).siblings().children().removeClass('active');
	$(this).addClass('active');
	$(this).children().addClass('active');
	}
	else{
	$(this).addClass('active');
	$(this).children().addClass('active');
	}
})
	$('.history tr').on('click',function(){
	if($(this).siblings().hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
	else{
	$(this).addClass('active');
	}
})
});
	
