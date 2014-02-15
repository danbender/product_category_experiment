var slider = {

  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav a")
  },

  timing: 800,
  slideWidth: 300,

  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    // Either on manual scroll...
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    // or on click
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
  },

  moveSlidePosition: function(event) {
    // the 6-100 are 'hard-coded'...they make it work for the specfic width and height
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
    });
  },

  handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("data-index");

    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);

    this.changeActiveNav(el);
  },

  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }

};

slider.init();

// http://codepen.io/BaylorRae/pen/ImGBC
// Originally added click links, so I ported over and re-wrote
// slider based on http://css-tricks.com/slider-with-sliding-backgrounds/