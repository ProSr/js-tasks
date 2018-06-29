/* eslint-disable no-undef */
describe("Task 1", function() {
    context("Slider", function() {

        let thumb,
			coords;


        before(function() {
            auxiliaryHTMLtask1();
            solutionTask1();
        });
        after(function() {
            divTask1.remove();
        });
        beforeEach(function() {
            thumb = document.querySelector('.thumb');
			coords = thumb.getBoundingClientRect();
        })
        it('thumb . getBoundingClientRect ( ) . left = 65 move right at the 135 px. thumb . getBoundingClientRect ( ) . left = 200', function() {
			thumb.dispatchEvent(new MouseEvent('mousedown', {clientX: 65, pageX: 65, clientY: 70, pageY: 70, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mousemove', {clientX: 200, clientY: 200, pageX: 200, pageY: 200, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mouseup', {clientX: 200, clientY: 200, pageX: 200, pageY: 200, bubbles: true}));
			
            assert.equal(thumb.getBoundingClientRect().left, 200);
        });
        it('The "thumb" element have to hold position AT THE LEFT', function() {
			thumb.dispatchEvent(new MouseEvent('mousedown', {clientX: 200, clientY: 70, pageX: 200, pageY: 70, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mousemove', {clientX: 20, clientY: 200, pageX: 20, pageY: 200, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mouseup', {clientX: 200, clientY: 200, pageX: 200, pageY: 200, bubbles: true}));
			
            assert.equal(thumb.getBoundingClientRect().left, slider.getBoundingClientRect().left);
        });
        it('The "thumb" element have to hold position AT THE RIGHT', function() {
			thumb.dispatchEvent(new MouseEvent('mousedown', {clientX: slider.getBoundingClientRect().left, clientY: 70, pageX: slider.getBoundingClientRect().left, pageY: 70, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mousemove', {clientX: 500, clientY: 200, pageX: 500, pageY: 200, bubbles: true}));
			document.dispatchEvent(new MouseEvent('mouseup', {clientX: 200, clientY: 200, pageX: 200, pageY: 200, bubbles: true}));
			
            assert.equal(thumb.getBoundingClientRect().left, slider.getBoundingClientRect().right - thumb.offsetWidth);
        });
    });
});
describe("Task 2", function() {
    context("Drag superheroes around the field", function() {
        before(function() {
            auxiliaryHTMLtask2();
            solutionTask2();
        });

        after(function() {
			divTask2.remove();
        });

        it("set the Ball at the field", function() {
			let img = divTask2.querySelector('img'),
				imgRect = img.getBoundingClientRect();
			img.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: imgRect.left + img.offsetWidth / 2, clientY: imgRect.top + img.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			img.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 2, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			img.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 2, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			
            assert(img.getBoundingClientRect().left < field.getBoundingClientRect().right / 1.8);
        });
        it("set the Hero1 at the field", function() {
			let hero = divTask2.querySelector('#hero1'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }));
			
            assert(hero.getBoundingClientRect().left < field.getBoundingClientRect().right / 2);
        });
        it("set the Hero2 at the field", function() {
			let hero = divTask2.querySelector('#hero2'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight * 0.8, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }));
			
            assert(hero.getBoundingClientRect().left < field.getBoundingClientRect().right / 2);
        });
        it("set the Hero3 at the field", function() {
			let hero = divTask2.querySelector('#hero3'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().right - field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }));
			
            assert(hero.getBoundingClientRect().left > field.getBoundingClientRect().right / 2);
        });
        it("set the Hero4 at the field", function() {
			let hero = divTask2.querySelector('#hero4'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().right - field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight * 0.8, pageX: this.clientX, pageY: this.clientY }))
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 3, clientY: field.getBoundingClientRect().top + field.offsetHeight / 3, pageX: this.clientX, pageY: this.clientY }))
			
            assert(hero.getBoundingClientRect().left > field.getBoundingClientRect().right / 2);
        });
        it("set the Hero5 at the field", function() {
			let hero = divTask2.querySelector('#hero5'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 8, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }))
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 2, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }))
			
            assert(hero.getBoundingClientRect().left < field.getBoundingClientRect().right / 2);
        });
        it("set the Hero6 at the field", function() {
			let hero = divTask2.querySelector('#hero6'),
				heroRect = hero.getBoundingClientRect()
			hero.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: heroRect.left + hero.offsetWidth / 2, clientY: heroRect.top + hero.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: field.getBoundingClientRect().right - field.offsetWidth / 8, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			hero.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: field.getBoundingClientRect().left + field.offsetWidth / 2, clientY: field.getBoundingClientRect().top + field.offsetHeight / 2, pageX: this.clientX, pageY: this.clientY }));
			
            assert(hero.getBoundingClientRect().left > field.getBoundingClientRect().right / 2);
        });


    });
});

