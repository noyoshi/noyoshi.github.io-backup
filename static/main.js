console.log("Hello");
var $body = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;


$('#sidebar').affix({
      offset: {
        /* affix after top masthead */
        top: function () {
            var navOuterHeight = $('#masthead').height();
            return this.top = navOuterHeight;
        },
        /* un-affix when footer is reached */
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true))
        }
      }
});

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});