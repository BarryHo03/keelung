// function getScrollTop(){
//   var bodyTop = 0;
//   if (typeof window.pageYOffset != "undefined") {
//     bodyTop = window.pageYOffset;

//   } else if (typeof document.compatMode != "undefined"
//              && document.compatMode != "BackCompat") {
//     bodyTop = document.documentElement.scrollTop;

//   } else if (typeof document.body != "undefined") {
//     bodyTop = document.body.scrollTop;
//   }
//   /*顯示出捲動後的高度值*/
//   return bodyTop;
// }

// console.log(getScrollTop());

function deselect(selectItem, popoutItem) {
  $(popoutItem).slideFadeToggle(function() {
    selectItem.removeClass('selected');
  });    
}

function popout(selectItem, popoutItem){
 	$(selectItem).on('click', function() {
     if($(this).hasClass('selected')) {
        deselect($(this),popoutItem);               
      } else {
        $(this).addClass('selected');
        $(popoutItem).slideFadeToggle();
      }
    return false;
  	});	
}

function close(selectItem,closeItem,popoutItem){
	$(closeItem).on('click', function() {
		deselect($(selectItem),popoutItem);
		return false;
	});
}



//#1 breakfast introduce
popout('#intro_link1','#f1');
close('#intro_link1','#c1', '#f1');

//#2 breakfast introduce
popout('#intro_link2','#f2');
close('#intro_link2','#c2', '#f2');


$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle'}, 'fast', easing, callback);
};

