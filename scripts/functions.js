//@codekit-prepend "modernizr.js", "mootools.core.js", "classes/Loop.js";

window.addEvent('domready', function() {

	// STICKY MENU
	var scrollMenu = $$('.navigation')[0];
	
	// Fixed navigation
	var stickyY = scrollMenu.getPosition().y;
	window.addEvent('scroll', function () {
		var y = this.getScroll().y;
		if (y >= stickyY) scrollMenu.getParent().addClass('fixed')
		else scrollMenu.getParent().removeClass('fixed')
	});

});