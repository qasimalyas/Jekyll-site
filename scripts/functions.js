//@codekit-prepend "modernizr.js", "mootools.core.js", "classes/Loop.js", "classes/SlideShow.js";

window.addEvent('domready', function() {

	$$('.slideshow').each(function(slideshow) {
		var thumbs = slideshow.getElements('.thumbs li');
		var controls = slideshow.getElements('.controls li');
		var display = new SlideShow(slideshow, {
			delay: 5000,
			//transition: 'pushLeft',
			autoplay: true,
			selector: '.items li',
			onShow: function(data) {
				thumbs.removeClass('selected');
				thumbs[display.index].addClass('selected');
			}
		});
		
		// thumbs
		thumbs.each(function(thumb, i) {
			thumb.addEvents({
				click: function() {
					thumbAction();
				},
				keyup: function(evt) {
					if (evt.key == 'enter') thumbAction();
				}
			});

			var thumbAction = function() {
				//var transition = (display.index < i) ? 'pushLeft' : 'pushRight';
				display.pause();
				display.show(i/*, {transition: transition}*/);
			}
		});

		// previous / next controls
		controls.each(function(control, i) {
			//var transition = (display.index < i) ? 'pushLeft' : 'pushRight';
			control.addEvents({
				click: function() {
					this.hasClass('previous') ? controlPrevious() : controlNext();
				},
				keyup: function(evt) {
					if (evt.key == 'enter') {
						this.hasClass('previous') ? controlPrevious() : controlNext();
					}
				}
			});

			var controlPrevious = function() {
				display.pause();
				display.show('previous'/*, {transition: transition}*/);
			}
			var controlNext = function() {
				display.pause();
				display.show('next'/*, {transition: transition}*/);
			}

		});

	});

});