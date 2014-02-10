$(function() {
      $("#gallery").dragend({
        borderBetweenPages: 5,
        afterInitialize: function() {
          $("#phone").css("visibility", "visible");
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
    });