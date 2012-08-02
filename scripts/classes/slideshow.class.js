/*

name: Slideshow

provides: Slideshow.JS

*/

var Slideshow = new Class({

	Implements: [Options, Events],
	options: {
		items: '.thumbs LI',
		delay: 5000
	},

	initialize: function (element, options) {
		this.element = $(element);
		this.setOptions(options);
		this.current = 0;
		this.start();
		this.items = this.element.getElements(this.options.items);
		this.bindThumbEvents();

		this.element.store('qasim:slideshow', this);
	},

	start: function () {
		if (!$(this).hasClass('paused')) {
			this.periodical = (function () {
				if (this.current < (this.items.length - 1)) this.current++;
				else this.current = 0;
				this.show(this.current);
			}).periodical(this.options.delay, this);
		}
	},

	stop: function () {
		clearInterval(this.periodical);
	},

	restart: function () {
		this.stop();
		this.start();
	},

	show: function (index) {
		this.items.removeClass('current');
		this.items[index].addClass('current');
		this.fireEvent('itemSelect', [this.items[index]], this);
	},

	next: function () {
		this.stop();
		if (this.current < (this.items.length - 1)) this.current++;
		else this.current = 0;
		this.show(this.current);
		return this;
	},

	previous: function () {
		this.stop();
		if (this.current > 0) this.current--;
		else this.current = this.items.length - 1;
		this.show(this.current);
		return this;
	},

	toElement: function () {
		return this.element;
	},

	bindThumbEvents: function () {
		var self = this;
		this.items.each(function (item, index) {
			item.addEvents({
				'mouseenter': function () {
					if (self.current != index) {
						self.current = index;
						self.show(index);
						self.stop();
					}
				},
				'mouseleave': function () {
					if (!$(self).hasClass('paused')) {
						self.restart();
					}
				}
			});
		});
	}

});