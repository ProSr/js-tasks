/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1. Spy decorator", function() {
	context("spy", function() {
	  it("records calls into its property", function() {
		  /* eslint-disable no-func-assign */
		function work() {}

		work = spy(work);
		assert.deepEqual(work.calls, []);

		work(1, 2);
		assert.deepEqual(work.calls, [
		  [1, 2]
		]);

		work(3, 4);
		assert.deepEqual(work.calls, [
		  [1, 2],
		  [3, 4]
		]);
	  });

	  it("transparently wraps functions", function() {

		let sum = sinon.spy((a, b) => a + b);

		let wrappedSum = spy(sum);

		assert.equal(wrappedSum(1, 2), 3);
		assert(sum.calledWith(1, 2));
	  });


	  it("transparently wraps methods", function() {

		let calc = {
		  sum: sinon.spy((a, b) => a + b)
		};

		calc.wrappedSum = spy(calc.sum);

		assert.equal(calc.wrappedSum(1, 2), 3);
		assert(calc.sum.calledWith(1, 2));
		assert(calc.sum.calledOn(calc));
	  });

	});
});
describe("Task 2. Delaying decorator", function() {
	context("delay", function() {
	  before(function() {
		this.clock = sinon.useFakeTimers();
	  });

	  after(function() {
		this.clock.restore();
	  });

	  it("calls the function after the specified timeout", function() {
		let start = Date.now();

		function f() {
		  assert.equal(Date.now() - start, 1000);
		}
		f = sinon.spy(f);

		let f1000 = delay(f, 1000);
		f1000();
		this.clock.tick(2000);
		assert(f.calledOnce, 'calledOnce check fails');
	  });

	  it("passes arguments and this", function() {
		let start = Date.now();
		let user = {
		  sayHi: function(phrase, who) {
			assert.equal(this, user);
			assert.equal(phrase, "Hello");
			assert.equal(who, "John");
			assert.equal(Date.now() - start, 1500);
		  }
		};

		user.sayHi = sinon.spy(user.sayHi);

		let spy = user.sayHi;
		user.sayHi = delay(user.sayHi, 1500);

		user.sayHi("Hello", "John");

		this.clock.tick(2000);

		assert(spy.calledOnce, 'calledOnce check failed');
	  });
	});
});
describe("Task 3. Debounce decorator", function() {
	context("debounce", function() {
	  before(function() {
		this.clock = sinon.useFakeTimers();
	  });

	  after(function() {
		this.clock.restore();
	  });

	  it("calls the function at maximum once in ms milliseconds", function() {
		let log = '';

		function f(a) {
		  log += a;
		}

		f = debounce(f, 1000);

		f(1); // runs at once
		f(2); // ignored

		setTimeout(() => f(3), 100);  // ignored (too early)
		setTimeout(() => f(4), 1100); // runs (1000 ms passed)
		setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)

		this.clock.tick(5000);
		assert.equal(log, "14");
	  });

	  it("keeps the context of the call", function() {
		let obj = {
		  f() {
			assert.equal(this, obj);
		  }
		};

		obj.f = debounce(obj.f, 1000);
		obj.f("test");
	  });

	});
});
describe.only("Task 4. Throttle decorator", function() {
	context("throttle(f, 1000)", function() {
	  let f1000;
	  let log = "";

	  function f(a) {
		log += a;
	  }

	  before(function() {
		f1000 = throttle(f, 1000);
		this.clock = sinon.useFakeTimers();
	  });

	  it("the first call runs now", function() {
		f1000(1); // runs now
		assert.equal(log, "1");
	  });

	  it("then calls are ignored till 1000ms when the last call works", function() {
		f1000(2); // (throttling - less than 1000ms since the last run)
		f1000(3); // (throttling - less than 1000ms since the last run)
		// after 1000 ms f(3) call is scheduled

		assert.equal(log, "1"); // right now only the 1st call done

		this.clock.tick(1000); // after 1000ms...
		assert.equal(log, "13"); // log==13, the call to f1000(3) is made
	  });

	  it("the third call waits 1000ms after the second call", function() {
		this.clock.tick(100);
		f1000(4); // (throttling - less than 1000ms since the last run)
		this.clock.tick(100);
		f1000(5); // (throttling - less than 1000ms since the last run)
		this.clock.tick(700);
		f1000(6); // (throttling - less than 1000ms since the last run)

		this.clock.tick(100); // now 100 + 100 + 700 + 100 = 1000ms passed

		assert.equal(log, "136"); // the last call was f(6)
	  });

	  after(function() {
		this.clock.restore();
	  });

	});
});