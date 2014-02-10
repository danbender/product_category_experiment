var fullViewArticle = document.querySelector('.articlesList')
var el = document.querySelector('.layer')
var closeButton = document.getElementById("closeMeOnClick")
var className = "scaled-article-container"

fullViewArticle.addEventListener('click', function(ev) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
    document.querySelector('div.scaled-article-container').id = 'gallery';
    Swipester();
    fadeIn(closeButton);
}, false)

closeButton.addEventListener('click', function(ev) {
  if (el.classList) {
    el.classList.remove(className);
    closeButton.style.opacity = '0';
  }else{
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
})




function Swipester() {
  $("#gallery").dragend({
    borderBetweenPages: 1,
    afterInitialize: function() {
      $("#screen").css("visibility", "visible");
    },
    onDrag: function( activeElement, event, overscroll ) {
      var deltaX = parseInt( event.distanceX / 2 );

      if ( overscroll ) {
        deltaX = deltaX / 5;
      }

      $(activeElement).prev().find("img").css("margin-left", deltaX + 160 );
      $(activeElement).find("img").css("margin-left", deltaX);
      $(activeElement).next().find("img").css("margin-left", deltaX - 160 );
    },
    onDragEnd: function( activeElement ) {
      $(activeElement).prev().find("img").animate({
        "margin-left": 160
      }, 300);
      $(activeElement).find("img").animate({
        "margin-left": 0
      }, 300);
      $(activeElement).next().find("img").animate({
        "margin-left": - 160
      }, 300);
    }
  });

  $(document).on("dragstart", function(event) {
    if (event.target.nodeName.toUpperCase() == "IMG") {
      return false;
    }
  });
}


function fadeIn(el) {
  el.style.opacity = 0;
  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };
  tick();
}
