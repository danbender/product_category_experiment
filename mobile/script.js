// var fullViewArticle = document.querySelector('.articles')
var fullViewArticle = document.querySelector('.articlesList')
var el = document.querySelector('.layer')

fullViewArticle.addEventListener('click', function(ev) {
  var className = "scaled-article-container"

  if (el.classList) {
    el.classList.toggle(className);
  }else{
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    }else{
      classes.push(className);
    }
    el.className = classes.join(' ');
  }
}, true)


//  a hacky version that works

$(function() {

      // var firstChild = $("#demo li:first-child").clone(),
          // lastChild  = $("#demo li:last-child").clone(),
          container  = $("#demo ul");

      // firstChild.appendTo(container);
      // lastChild.prependTo(container);

      $("#demo").dragend({
        jumpToPage: 2,
        onSwipeEnd: function() {
          var first = this.pages[0],
              last = this.pages[this.pages.length - 1];

          if (first === this.activeElement) {
            this.jumpToPage(this.pages.length - 1 );
          }

          if (last === this.activeElement) {
            this.jumpToPage(2);
          }

        },
        afterInitialize: function() {
          this.container.style.visibility = "visible";
        }
      });
    });