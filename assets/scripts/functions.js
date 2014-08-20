//@codekit-prepend "modernizr.js", "mootools.core.js", "classes/Loop.js";

window.addEvent('domready', function() {

	// // STICKY MENU
	var scrollMenu = $$('.navigation')[0];
	
	// Fixed navigation
	var stickyY = scrollMenu.getPosition().y;
	window.addEvent('scroll', function () {
		var y = this.getScroll().y;
		if (y >= stickyY) scrollMenu.getParent().addClass('fixed')
		else scrollMenu.getParent().removeClass('fixed')
	});


	var SS = new moostrapScrollspy(document.getElement('.navigation > ul'), {
		offset: -65,
		onActive: function(element) {
			this.element.getElements('li.selected').removeClass('selected');
			element.getParent('li').addClass('selected');
		},
		onInactive: function(element) {
			element.getParent('li').addClass('selected');
		},
		onReset: function() {
			this.element.getElements('li.selected').removeClass('selected');
		}
	});


	// document.getElement("a.brand").addEvent("click", function() {
	// 	SS.reset();    
	// });

});