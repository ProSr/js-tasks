/* eslint-disable no-undef */
describe.only("Task 1", function() {
    context("Extended hotkeys", function() {

        before(function() {
            solutionTask1();
			window.alert = sinon.stub(window, "alert");
        });
        after(function() {
			document.onkeydown = '';
			document.onkeyup = '';
			solutionTask = '';
			window.alert.restore();
        });
        
        it('alert from "func" function, returns keywords "KeyQ,KeyW" after keydown "Q" + "W" combination', function() {
			document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, code: 'KeyQ'}));		
			document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, code: 'KeyW'}));
            assert(alert.calledWith("KeyQ,KeyW"));
        });
    });
});