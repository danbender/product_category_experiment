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