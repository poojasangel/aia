var PROGRESS  = function() {
	var cjs = createjs;
	var img = {};
	var ss = {};
	var lib = function() {
		return this;
	};
	var an = {};
	lib.images = function(_img) {
		img = _img;
	};

lib.getSprite = function(){return ss;};
var p; // shortcut to reference prototypes

lib.ssMetadata = [
		{name:"LevelLoaderAnimation_atlas_", frames: [[0,0,1014,650],[745,652,103,103],[850,652,103,103],[0,652,538,269],[745,757,54,62],[801,757,54,42],[955,652,54,75],[955,729,54,70],[540,652,203,628]]}
];


// symbols:



(lib.BackGround_LevelSelection = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Circle = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CircleBlack = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Connector = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Highlighter01 = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Highlighter02 = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Lockglow = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LockglowBalck = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.NinjaStanding2 = function() {
	this.spriteSheet = ss["LevelLoaderAnimation_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.NinjaAppear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NinjaStanding2();
	this.instance.parent = this;
	this.instance.setTransform(-110,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinjaAppear, new cjs.Rectangle(-110,-246,203,628), null);


(lib.GlowcircleSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Circle();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GlowcircleSymbol, new cjs.Rectangle(-51.5,-51.5,103,103), null);


(lib.Glowbar01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Highlighter01();
	this.instance.parent = this;
	this.instance.setTransform(-27,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Glowbar01, new cjs.Rectangle(-27,-31,54,62), null);


(lib.dottedbaseline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Connector();
	this.instance.parent = this;
	this.instance.setTransform(-269,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dottedbaseline, new cjs.Rectangle(-269,-134.5,538,269), null);


(lib.DataTransferingtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBFQgMAAAAgNIAAhvQAAgNAMAAIAqAAQANAAAAANIAAAdIgVAAIAAgYIgZAAIAABlIAZAAIAAgmIgOAAIAAgRIAjAAIAAA8QAAANgNAAg");
	this.shape.setTransform(69.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBFIgghWIABAKIAABMIgUAAIAAiJIASAAIAgBUIgBgKIAAhKIAUAAIAACJg");
	this.shape_1.setTransform(58.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBFIAAiJIATAAIAACJg");
	this.shape_2.setTransform(50.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANBFIgVhAIAAgMIATAAIAAgrIgZAAIAAB3IgUAAIAAiJIA1AAQAMAAAAANIAAAyQABAIgGACIgOABIAXA/g");
	this.shape_3.setTransform(42.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBFIAAiJIA4AAIAAASIgjAAIAAApIAeAAIAAAQIgeAAIAAAsIAkAAIAAASg");
	this.shape_4.setTransform(32.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBFIAAiJIA3AAIAAASIgjAAIAAApIAeAAIAAARIgeAAIAAA9g");
	this.shape_5.setTransform(24,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUBFQgMAAAAgNIAAghIAVAAIAAAcIAYAAIAAgbIgpgmQgEgEAAgHIAAgeQAAgNAMAAIApAAQAMAAAAANIAAAeIgUAAIAAgZIgYAAIAAAYIAnAmQAFAEAAAHIAAAhQAAANgMAAg");
	this.shape_6.setTransform(14.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARBFIgghWIABAKIAABMIgUAAIAAiJIASAAIAgBUIgBgKIAAhKIAUAAIAACJg");
	this.shape_7.setTransform(3.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARBFIgEgaIgZAAIgEAaIgUAAIAAgBIAaiIIAVAAIAaCJgAgJAZIATAAIgKg9g");
	this.shape_8.setTransform(-6.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANBFIgVhAIAAgMIAUAAIAAgrIgaAAIAAB3IgUAAIAAiJIA2AAQAMAAgBANIAAAyQAAAIgFACIgOABIAXA/g");
	this.shape_9.setTransform(-16.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBFIAAh3IgXAAIAAgSIBBAAIAAASIgXAAIAAB3g");
	this.shape_10.setTransform(-26.4,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARBFIgEgaIgZAAIgEAaIgUAAIAAgBIAaiIIAVAAIAaCJgAgJAZIATAAIgKg9g");
	this.shape_11.setTransform(-41.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBFIAAh3IgXAAIAAgSIBBAAIAAASIgWAAIAAB3g");
	this.shape_12.setTransform(-51.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AARBFIgEgaIgZAAIgEAaIgUAAIAAgBIAaiIIAVAAIAaCJgAgJAZIATAAIgKg9g");
	this.shape_13.setTransform(-60.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBFIAAiJIAoAAQANAAAHAHQAHAHAAAMIAABVQAAAMgHAHQgHAHgNAAgAgNAzIAOAAQAMAAAAgMIAAhOQAAgLgMAAIgOAAg");
	this.shape_14.setTransform(-71,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DataTransferingtext, new cjs.Rectangle(-77.4,-12.5,154.9,25), null);


(lib.DataencryptSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5DtIhYj9IAGgIIBKAAIAAiuIhrAAIAAGzIgqAAIAAnZICeAAQAPAAAJAKQAJAJAAAPIAACzQAAAiguAAIgNgBIgNAAIBSDjg");
	this.shape.setTransform(179.7,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCDtQgOAAgKgKQgJgJAAgOIAAmWQAAgPAJgJQAKgKAOAAICEAAQAPAAAKAKQAJAJAAAPIAAGWQAAAOgJAJQgKAKgPAAgAg5DIIBzAAIAAmOIhzAAg");
	this.shape_1.setTransform(148.1,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUDtIAAmzIhKAAIAAgmIC8AAIAAAmIhJAAIAAGzg");
	this.shape_2.setTransform(119.7,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhdDtIAAnZICZAAQAPAAAJAKQAKAJAAAPIAADZQAAAPgKAJQgJAKgPAAIhvAAIAAC8gAgzALIBnAAIAAjRIhnAAg");
	this.shape_3.setTransform(92.7,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUDtIAAi4QgFgXgIgZIgQgvIg6i/IAAgDIAsAAIA/DsIBBjsIArAAIAAADIg6C/QgLAdgSBCIAAC4g");
	this.shape_4.setTransform(63.5,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5DtIhYj9IAGgIIBKAAIAAiuIhrAAIAAGzIgqAAIAAnZICeAAQAPAAAJAKQAJAJAAAPIAACzQAAAiguAAIgNgBIgNAAIBSDjg");
	this.shape_5.setTransform(34.8,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8DtQgPAAgKgKQgJgJAAgOIAAmWQAAgPAJgJQAKgKAPAAIB5AAQAPAAAJAKQAKAJAAAPIAABuIgqAAIAAhqIhpAAIAAGOIBpAAIAAh1IAqAAIAAB5QAAAOgKAJQgJAKgPAAg");
	this.shape_6.setTransform(3.9,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABFDtIh+lbIAAFbIgoAAIAAnZIAgAAIB7FWIAAlWIAoAAIAAHZg");
	this.shape_7.setTransform(-26.9,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNDtIAAnZICZAAIAAAmIhvAAIAACxIBlAAIAAAkIhlAAIAAC5IBxAAIAAAlg");
	this.shape_8.setTransform(-55,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA/DuIgRhqIhcAAIgRBqIgpAAIAAgBIBVnaIAoAAIBUHbgAgqBfIBTAAIgpkAg");
	this.shape_9.setTransform(-99.1,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUDtIAAmzIhKAAIAAgmIC8AAIAAAmIhJAAIAAGzg");
	this.shape_10.setTransform(-126.1,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA/DuIgRhqIhdAAIgRBqIgoAAIAAgBIBUnaIApAAIBUHbgAgpBfIBSAAIgpkAg");
	this.shape_11.setTransform(-153.2,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhgDtIAAnZIBrAAQAmAAAYAYQAZAYAAAmIAAEuQAAAlgZAYQgYAYgmAAgAg2DIIA3AAQAYAAAPgOQAPgOABgZIAAklQAAgYgPgOQgPgOgXAAIg5AAg");
	this.shape_12.setTransform(-182.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DataencryptSymbol, new cjs.Rectangle(-198.5,-36.8,397,73.6), null);


(lib.BlackcircleSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CircleBlack();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlackcircleSymbol, new cjs.Rectangle(-51.5,-51.5,103,103), null);


(lib.BarsymbolanimGlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAloAKFIUE0JIFZAAI0EUJgAd1KFIUE0JIFZAAI0EUJgAWFKFIUE0JIFaAAI0EUJgAOWKFIUE0JIFZAAI0EUJgAGmKFIUE0JIFaAAI0EUJgAhIKFIUD0JIFZAAI0EUJgAo4KFIUD0JIFaAAI0DUJgAwnKFIUD0JIFZAAI0DUJgA4XKFIUE0JIFZAAI0DUJgEggGAKFIUE0JIFZAAI0EUJgEgn2AKFIUE0JIFaAAI0EUJgEgvlAKFIUE0JIFZAAI0EUJgEg3VAKFIUE0JIFaAAI0EUJgEg/EAKFIUE0JIFZAAI0EUJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BarsymbolanimGlow, new cjs.Rectangle(-403.7,-64.5,807.5,129.1), null);


(lib.Barsymbolanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B2FF").s().p("EAloAKFIUE0JIFZAAI0EUJgAd1KFIUE0JIFZAAI0EUJgAWFKFIUE0JIFaAAI0EUJgAOWKFIUE0JIFZAAI0EUJgAGmKFIUE0JIFaAAI0EUJgAhIKFIUD0JIFZAAI0EUJgAo4KFIUD0JIFaAAI0DUJgAwnKFIUD0JIFZAAI0DUJgA4XKFIUE0JIFZAAI0DUJgEggGAKFIUE0JIFZAAI0EUJgEgn2AKFIUE0JIFaAAI0EUJgEgvlAKFIUE0JIFZAAI0EUJgEg3VAKFIUE0JIFaAAI0EUJgEg/EAKFIUE0JIFZAAI0EUJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Barsymbolanim, new cjs.Rectangle(-403.7,-64.5,807.5,129.1), null);


(lib.BarBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0063A6").s().p("EglZAGmQhkAAAAhkIAAqDQAAhkBkAAMBKzAAAQBkAAAABkIAAKDQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BarBg, new cjs.Rectangle(-249.4,-42.1,498.8,84.4), null);


(lib._100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape.setTransform(70.7,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_1.setTransform(57.6,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_2.setTransform(44.6,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABFDlQgkAAAAgjIAAijQAAgiAkAAIBPAAQAjAAAAAiIAACjQAAAjgjAAgABSC6IA0AAIAAiTIg0AAgAiNDlIAAgIID1nBIAnAAIAAAIIj1HBgAiTAEQgjAAAAgiIAAijQAAgjAjAAIBPAAQAkAAAAAjIAACjQAAAigkAAgAiGgmIA1AAIAAiTIg1AAg");
	this.shape_3.setTransform(17.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGDlQgpAAgBgqIAAl1QAAgqAqAAICNAAQApAAAAAqIAAF1QAAAqgpAAgAgsCqIBaAAIAAlTIhaAAg");
	this.shape_4.setTransform(-18.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhHDlQgpAAABgqIAAl1QAAgqApAAICNAAQAqAAAAAqIAAF1QAAAqgqAAgAgsCqIBZAAIAAlTIhZAAg");
	this.shape_5.setTransform(-48.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUDlIAAlCIgaAAIAAgJIAjh+IA6AAIAAHJg");
	this.shape_6.setTransform(-72,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._100, new cjs.Rectangle(-80.3,-36.9,160.8,73.9), null);


(lib._75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape.setTransform(61.2,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_1.setTransform(48.1,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_2.setTransform(35.1,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABFDlQgkAAAAgjIAAijQAAgiAkAAIBPAAQAjAAAAAiIAACjQAAAjgjAAgABSC6IA0AAIAAiTIg0AAgAiNDlIAAgIID1nBIAnAAIAAAIIj1HBgAiTAEQgjAAAAgiIAAijQAAgjAjAAIBPAAQAkAAAAAjIAACjQAAAigkAAgAiGgmIA1AAIAAiTIg1AAg");
	this.shape_3.setTransform(7.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEDlQgpAAAAgqIAAhpIBEAAIAABYIBUAAIAAivIiYAAIAIjfIDQAAIAAA8IiRAAIgEBoIBuAAQAqAAAAAqIAADRQAAAqgqAAg");
	this.shape_4.setTransform(-27.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag+DlIBmmOIhWAAIAABDIhDAAIAAh+IDjAAIAAAsIhqGdg");
	this.shape_5.setTransform(-55.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._75, new cjs.Rectangle(-70.8,-36.9,141.8,73.9), null);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape.setTransform(62.2,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_1.setTransform(49.2,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_2.setTransform(36.1,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABFDlQgkAAAAgjIAAijQAAgiAkAAIBPAAQAjAAAAAiIAACjQAAAjgjAAgABSC6IA0AAIAAiTIg0AAgAiNDlIAAgIID1nBIAnAAIAAAIIj1HBgAiTAEQgjAAAAgiIAAijQAAgjAjAAIBPAAQAkAAAAAjIAACjQAAAigkAAgAiGgmIA1AAIAAiTIg1AAg");
	this.shape_3.setTransform(8.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGDlQgqAAAAgqIAAl1QAAgqAqAAICNAAQApAAAAAqIAAF1QAAAqgpAAgAgsCqIBaAAIAAlTIhaAAg");
	this.shape_4.setTransform(-26.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhEDlQgpAAAAgqIAAhpIBEAAIAABYIBUAAIAAivIiYAAIAIjfIDQAAIAAA8IiRAAIgEBoIBuAAQAqAAAAAqIAADRQAAAqgqAAg");
	this.shape_5.setTransform(-56.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._50, new cjs.Rectangle(-71.9,-36.9,143.9,73.9), null);


(lib._25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape.setTransform(61.5,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_1.setTransform(48.4,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_2.setTransform(35.4,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABFDlQgkAAAAgjIAAijQAAgiAkAAIBPAAQAjAAAAAiIAACjQAAAjgjAAgABSC6IA0AAIAAiTIg0AAgAiNDlIAAgIID1nBIAnAAIAAAIIj1HBgAiTAEQgjAAAAgiIAAijQAAgjAjAAIBPAAQAkAAAAAjIAACjQAAAigkAAgAiGgmIA1AAIAAiTIg1AAg");
	this.shape_3.setTransform(8.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEDlQgpAAAAgqIAAhpIBEAAIAABYIBUAAIAAivIiYAAIAIjfIDQAAIAAA8IiRAAIgEBoIBuAAQAqAAAAAqIAADRQAAAqgqAAg");
	this.shape_4.setTransform(-27,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhuDlIAAgqICZkQIAAhVIhSAAIAABVIhDAAIAAhmQAAgpAqAAICFAAQArAAAAApIAABZQAAAWgQAaIh9DbICMAAIAAA8g");
	this.shape_5.setTransform(-56,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._25, new cjs.Rectangle(-71.1,-36.9,142.4,73.9), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape.setTransform(47.6,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_1.setTransform(34.6,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAjIAAhGIBBAAIAABGg");
	this.shape_2.setTransform(21.5,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABFDlQgkAAAAgjIAAijQAAgiAkAAIBPAAQAjAAAAAiIAACjQAAAjgjAAgABSC6IA0AAIAAiTIg0AAgAiNDlIAAgIID1nBIAnAAIAAAIIj1HBgAiTAEQgjAAAAgiIAAijQAAgjAjAAIBPAAQAkAAAAAjIAACjQAAAigkAAgAiGgmIA1AAIAAiTIg1AAg");
	this.shape_3.setTransform(-5.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGDlQgpAAgBgqIAAl1QAAgqAqAAICNAAQApAAAAAqIAAF1QAAAqgpAAgAgsCqIBaAAIAAlTIhaAAg");
	this.shape_4.setTransform(-41.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-57.3,-36.9,114.7,73.9), null);


(lib.Numbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(37.9,0);
	this.instance.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.instance_1 = new lib._25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.8,0);
	this.instance_1.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.instance_2 = new lib._50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.6,0);
	this.instance_2.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.instance_3 = new lib._75();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.5,0);
	this.instance_3.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.instance_4 = new lib._100();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61,0);
	this.instance_4.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-45.9,136,94);


(lib.Glowcircleanimation02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 3
	this.instance = new lib.Highlighter02();
	this.instance.parent = this;
	this.instance.setTransform(-27,52);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Lockglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19));

	// Layer 1
	this.instance_2 = new lib.GlowcircleSymbol();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:426.4},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.Glowcircleanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 3
	this.instance = new lib.Glowbar01();
	this.instance.parent = this;
	this.instance.setTransform(-1,102);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Lockglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19));

	// Layer 1
	this.instance_2 = new lib.GlowcircleSymbol();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:426.4},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.Dataencry_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DataencryptSymbol();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#00FFFF",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dataencry_text, new cjs.Rectangle(-207.5,-45.8,418,94), null);


(lib.Baranim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglZAGmQhkAAAAhkIAAqDQAAhkBkAAMBKzAAAQBkAAAABkIAAKDQAABkhkAAg");

	// Layer 5
	this.instance = new lib.Numbers("single",0);
	this.instance.parent = this;
	this.instance.setTransform(37.3,-1.1);

	this.instance_1 = new lib.DataTransferingtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.5,-1.1);
	this.instance_1.shadow = new cjs.Shadow("#00FFFF",0,0,4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:1}}]},9).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:2}}]},9).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:3}}]},9).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:4}}]},9).wait(4));

	// Barsymbolhighlight
	this.instance_2 = new lib.BarsymbolanimGlow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-637.1,-2.2);
	this.instance_2.shadow = new cjs.Shadow("#00FFFF",0,0,10);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0.4},39).wait(1));

	// BarSymbol
	this.instance_3 = new lib.Barsymbolanim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-2.2);
	this.instance_3.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// BG
	this.instance_4 = new lib.BarBg();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.4,-42.1,498.8,84.4);


(lib.Balckcircleanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 2
	this.instance = new lib.LockglowBalck();
	this.instance.parent = this;
	this.instance.setTransform(-27,-35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.BlackcircleSymbol();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


// stage content:
(lib.progress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.level="level1";
	}
	this.frame_37 = function() {
		if(this.level == "level1"){
			this.stop();
			this.methods.showContinue();
		}
	}
	this.frame_46 = function() {
		if(this.level == "level2"){
			this.stop();
			this.methods.showContinue();
		}
	}
	this.frame_54 = function() {
		if(this.level == "level3"){
			this.stop();
			this.methods.showContinue();
		}
	}
	this.frame_63 = function() {
		if(this.level == "level4"){
			this.stop();
			this.methods.showContinue();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(9).call(this.frame_46).wait(8).call(this.frame_54).wait(9).call(this.frame_63).wait(9));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIAjIgIglIgHAlIgNAAIgPhFIAPAAIAIArIAHgrIALAAIAIArIAHgrIAPAAIgPBFg");
	this.shape.setTransform(746.2,196.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_1.setTransform(738.6,196.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZA2IAAhrIApAAQAKAAAAAKIAAAwQAAAKgKAAIgZAAIAAAngAgJABIATAAIAAgnIgTAAg");
	this.shape_2.setTransform(731.7,194.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAsQgIAAAAgIIAAgvIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAApIALAAIAAAOg");
	this.shape_3.setTransform(721.6,195.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_4.setTransform(716,196.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAjQgJgBAAgIIAAgzQAAgJAJAAIAaAAQAIAAAAAJIAAAQIgPAAIAAgLIgNAAIAAAqIANAAIAAgOIAPAAIAAASQAAAIgIABg");
	this.shape_5.setTransform(709.4,196.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAyQgEgDAAgGIAAgqQAAgIAGgEQAFgCAIAAIAFAAIAGAAIAAgmIAPAAIAABqIgPAAIAAgCIgRADQgHAAgCgEgAgHACIAAAhQAAAGAGAAIAJgBIAAgqIgJAAQgGAAAAAEg");
	this.shape_6.setTransform(702.8,194.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_7.setTransform(697.5,194.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAwIAAhFIAPAAIAABFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_8.setTransform(693.8,195.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKA2IgJg8IgBgKIAAAKIgJA8IgQAAIgQhrIARAAIAIA/IAAAJIABgJIAJg/IANAAIAJA/IABAJIAAgJIAIg/IAQAAIgPBrg");
	this.shape_9.setTransform(687,194.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIAjIgIglIgHAlIgNAAIgPhFIAPAAIAIArIAHgrIALAAIAIArIAHgrIAPAAIgPBFg");
	this.shape_10.setTransform(746.2,196.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_11.setTransform(738.6,196.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA2IAAhrIApAAQAKAAAAAKIAAAwQAAAKgKAAIgZAAIAAAngAgJABIATAAIAAgnIgTAAg");
	this.shape_12.setTransform(731.7,194.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAsQgIAAAAgIIAAgvIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAApIALAAIAAAOg");
	this.shape_13.setTransform(721.6,195.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_14.setTransform(716,196.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAjQgJgBAAgIIAAgzQAAgJAJAAIAaAAQAIAAAAAJIAAAQIgPAAIAAgLIgNAAIAAAqIANAAIAAgOIAPAAIAAASQAAAIgIABg");
	this.shape_15.setTransform(709.4,196.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAyQgEgDAAgGIAAgqQAAgIAGgEQAFgCAIAAIAFAAIAGAAIAAgmIAPAAIAABqIgPAAIAAgCIgRADQgHAAgCgEgAgHACIAAAhQAAAGAGAAIAJgBIAAgqIgJAAQgGAAAAAEg");
	this.shape_16.setTransform(702.8,194.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_17.setTransform(697.5,194.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAwIAAhFIAPAAIAABFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_18.setTransform(693.8,195.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKA2IgJg8IgBgKIAAAKIgJA8IgQAAIgQhrIARAAIAIA/IAAAJIABgJIAJg/IANAAIAJA/IABAJIAAgJIAIg/IAQAAIgPBrg");
	this.shape_19.setTransform(687,194.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},43).wait(9));

	// Layer 18
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAvIAHgZIgRhEIAQAAIAIAtIAJgtIAQAAIgRBDIgHAag");
	this.shape_20.setTransform(605.1,249.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_21.setTransform(598.5,248.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_22.setTransform(592,248.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAjIAAg3IgOAAIAAA3IgPAAIAAg3IgOAAIAAA3IgQAAIAAhEIAQAAIAAACIAKgCIALgBQAFAAABAEIAMgCIALgCQAJAAAAAJIAAA8g");
	this.shape_23.setTransform(583.8,248.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_24.setTransform(575.6,248.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAsQgIAAAAgJIAAgtIgIAAIAAgOIAIAAIAAgTIAOAAIAAATIAKAAIAAAOIgKAAIAAApIALAAIAAANg");
	this.shape_25.setTransform(569.8,247.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAvIAAhdIAQAAIAAADIAJgCIALgBQAJAAAAAIIAAAuQAAAJgGADQgEADgJAAIgFgBIgFAAIAAAZgAgGggIAAApIAIAAQAFAAABgFIAAglg");
	this.shape_26.setTransform(564.1,249.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAvIAHgZIgRhEIAQAAIAIAtIAJgtIAQAAIgRBDIgHAag");
	this.shape_27.setTransform(557.5,249.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAjIAAhEIAQAAIAAACIAJgCIAJgBQAJAAAAAJIAAAVIgQAAIAAgQIgLAAIAAA3g");
	this.shape_28.setTransform(551.2,248.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQA2QgJAAAAgLIAAhVQAAgKAJAAIAhAAQAJAAAAAKIAAAZIgQAAIAAgWIgTAAIAABPIATAAIAAgWIAQAAIAAAZQAAALgJAAg");
	this.shape_29.setTransform(544.3,246.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAvIAHgZIgRhEIAQAAIAIAtIAJgtIAQAAIgRBDIgHAag");
	this.shape_30.setTransform(605.1,249.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_31.setTransform(598.5,248.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_32.setTransform(592,248.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAjIAAg3IgOAAIAAA3IgPAAIAAg3IgOAAIAAA3IgQAAIAAhEIAQAAIAAACIAKgCIALgBQAFAAABAEIAMgCIALgCQAJAAAAAJIAAA8g");
	this.shape_33.setTransform(583.8,248.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_34.setTransform(575.6,248.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAsQgIAAAAgJIAAgtIgIAAIAAgOIAIAAIAAgTIAOAAIAAATIAKAAIAAAOIgKAAIAAApIALAAIAAANg");
	this.shape_35.setTransform(569.8,247.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAvIAAhdIAQAAIAAADIAJgCIALgBQAJAAAAAIIAAAuQAAAJgGADQgEADgJAAIgFgBIgFAAIAAAZgAgGggIAAApIAIAAQAFAAABgFIAAglg");
	this.shape_36.setTransform(564.1,249.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOAvIAHgZIgRhEIAQAAIAIAtIAJgtIAQAAIgRBDIgHAag");
	this.shape_37.setTransform(557.5,249.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAjIAAhEIAQAAIAAACIAJgCIAJgBQAJAAAAAJIAAAVIgQAAIAAgQIgLAAIAAA3g");
	this.shape_38.setTransform(551.2,248.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQA2QgJAAAAgLIAAhVQAAgKAJAAIAhAAQAJAAAAAKIAAAZIgQAAIAAgWIgTAAIAABPIATAAIAAgWIAQAAIAAAZQAAALgJAAg");
	this.shape_39.setTransform(544.3,246.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},18).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},36).wait(18));

	// Layer 17
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_40.setTransform(445.4,249.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAsQgIAAAAgJIAAguIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAAqIALAAIAAANg");
	this.shape_41.setTransform(439.7,248.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_42.setTransform(434,249.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAyQgDgDAAgGIAAgqQAAgIAGgEQAFgCAIAAIAFAAIAFAAIAAgmIAQAAIAABqIgQAAIAAgCIgRADQgGAAgDgEgAgGACIAAAhQAAAGAEAAIAJgBIAAgqIgJAAQgEAAAAAEg");
	this.shape_43.setTransform(427.4,247.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAHAjIgHgmIgGAmIgOAAIgPhEIAPAAIAIArIAHgrIALAAIAIArIAHgrIAPAAIgPBEg");
	this.shape_44.setTransform(462.5,233);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_45.setTransform(454.9,233);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHAwIAAhFIAPAAIAABFgAgHgeIAAgRIAPAAIAAARg");
	this.shape_46.setTransform(449.7,231.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGAjIgShEIAQAAIAIAsIAJgsIAQAAIgSBEg");
	this.shape_47.setTransform(444.6,233);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAHIAAgNIAfAAIAAANg");
	this.shape_48.setTransform(438.8,232.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_49.setTransform(432.8,233);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHA2IAAhqIAPAAIAABqg");
	this.shape_50.setTransform(427.6,231.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgMAvQgJAAAAgIIAAgLIAPAAIAAAIIAOAAIAAgOIgPAAQgIAAgDgEQgEgEAAgGIAAgpQAAgGAEgEQACgDAHAAIARADIAAgDIAPAAIAABVQAAAIgJAAgAgHgcIAAAgQAAAFAGAAIAJAAIAAgpIgJgBQgGAAAAAFg");
	this.shape_51.setTransform(422.4,234.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_52.setTransform(415.8,233);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgVA2IAAhqIArAAIAAANIgbAAIAAAgIAXAAIAAANIgXAAIAAAhIAbAAIAAAPg");
	this.shape_53.setTransform(409.3,231.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgLIAOAAIAAAOQAAAJgIAAgAgGgFIAOAAIAAgRIgOAAg");
	this.shape_54.setTransform(443,216.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAHA2IAAg4IgNABIAAA3IgQAAIAAhqIAQAAIAAAoIAKgBIALgCQAIAAAAAJIAAA8g");
	this.shape_55.setTransform(436.3,214.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHA2IAAhdIgSAAIAAgNIAzAAIAAANIgSAAIAABdg");
	this.shape_56.setTransform(429.7,214.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_57.setTransform(445.4,249.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAAAsQgIAAAAgJIAAguIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAAqIALAAIAAANg");
	this.shape_58.setTransform(439.7,248.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_59.setTransform(434,249.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTAyQgDgDAAgGIAAgqQAAgIAGgEQAFgCAIAAIAFAAIAFAAIAAgmIAQAAIAABqIgQAAIAAgCIgRADQgGAAgDgEgAgGACIAAAhQAAAGAEAAIAJgBIAAgqIgJAAQgEAAAAAEg");
	this.shape_60.setTransform(427.4,247.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAHAjIgHgmIgGAmIgOAAIgPhEIAPAAIAIArIAHgrIALAAIAIArIAHgrIAPAAIgPBEg");
	this.shape_61.setTransform(462.5,233);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_62.setTransform(454.9,233);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgHAwIAAhFIAPAAIAABFgAgHgeIAAgRIAPAAIAAARg");
	this.shape_63.setTransform(449.7,231.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGAjIgShEIAQAAIAIAsIAJgsIAQAAIgSBEg");
	this.shape_64.setTransform(444.6,233);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
	this.shape_65.setTransform(438.8,232.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_66.setTransform(432.8,233);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgHA2IAAhqIAPAAIAABqg");
	this.shape_67.setTransform(427.6,231.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMAvQgJAAAAgIIAAgLIAPAAIAAAIIAOAAIAAgOIgPAAQgIAAgDgEQgEgEAAgGIAAgpQAAgGAEgEQACgDAHAAIARADIAAgDIAPAAIAABVQAAAIgJAAgAgHgcIAAAgQAAAFAGAAIAJAAIAAgpIgJgBQgGAAAAAFg");
	this.shape_68.setTransform(422.4,234.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_69.setTransform(415.8,233);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVA2IAAhqIArAAIAAANIgbAAIAAAgIAXAAIAAANIgXAAIAAAhIAbAAIAAAPg");
	this.shape_70.setTransform(409.3,231.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgLIAOAAIAAAOQAAAJgIAAgAgGgFIAOAAIAAgRIgOAAg");
	this.shape_71.setTransform(443,216.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAHA2IAAg4IgNABIAAA3IgQAAIAAhqIAQAAIAAAoIAKgBIALgCQAIAAAAAJIAAA8g");
	this.shape_72.setTransform(436.3,214.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgHA2IAAhdIgSAAIAAgNIAzAAIAAANIgSAAIAABdg");
	this.shape_73.setTransform(429.7,214.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},16).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},29).wait(27));

	// Layer 16
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_74.setTransform(322,197);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_75.setTransform(315.4,197);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgWAaIAAg8IAPAAIAAA3IAPAAIAAg3IAPAAIAABEIgPAAIAAgCIgKACIgMABQgIAAAAgJg");
	this.shape_76.setTransform(308.8,197);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_77.setTransform(302.1,197);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgPA2QgKgBAAgJIAAgaIAQAAIAAAWIATAAIAAgVIgfgeQgEgDAAgFIAAgXQAAgLAKABIAfAAQAKAAAAAJIAAAYIgQAAIAAgUIgTAAIAAATIAfAeQAEADAAAFIAAAaQAAAJgKABg");
	this.shape_78.setTransform(295.1,195.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAHIAAgNIAfAAIAAANg");
	this.shape_79.setTransform(288.8,196.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAAAsQgIAAAAgJIAAguIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAAqIALAAIAAANg");
	this.shape_80.setTransform(283.7,196);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_81.setTransform(277.9,197);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AALA2IAAgxIgVAAIAAAxIgQAAIAAhqIAQAAIAAAsIAVAAIAAgsIAQAAIAABqg");
	this.shape_82.setTransform(270.8,195.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAAAsQgIAAAAgJIAAgtIgIAAIAAgOIAIAAIAAgTIAOAAIAAATIAKAAIAAAOIgKAAIAAApIALAAIAAANg");
	this.shape_83.setTransform(314.7,179.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_84.setTransform(309,180.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgLIAOAAIAAAOQAAAJgIAAgAgGgFIAOAAIAAgRIgOAAg");
	this.shape_85.setTransform(302.4,180.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMA8IAAgNIAKAAIAAhQIAPAAIAABVQAAAIgJAAgAgCgrIAAgQIAPAAIAAAQg");
	this.shape_86.setTransform(296.7,180.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_87.setTransform(292,180.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgVAjIAAhEIAQAAIAAACIAJgCIAJgBQAJAAAAAJIAAAVIgQAAIAAgQIgLAAIAAA3g");
	this.shape_88.setTransform(285.6,180.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgZA2IAAhqIApAAQAKAAAAAKIAAAvQAAAJgKAAIgZAAIAAAogAgJABIATAAIAAgoIgTAAg");
	this.shape_89.setTransform(278.8,178.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgMIAOAAIAAAPQAAAJgIAAgAgGgGIAOAAIAAgQIgOAAg");
	this.shape_90.setTransform(322,197);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_91.setTransform(315.4,197);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgWAaIAAg8IAPAAIAAA3IAPAAIAAg3IAPAAIAABEIgPAAIAAgCIgKACIgMABQgIAAAAgJg");
	this.shape_92.setTransform(308.8,197);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgVAaIAAgZQAAgHAIAAIAVAAIAAgQIgOAAIAAAKIgPAAIAAgNQAAgJAJAAIAaAAQAIAAAAAJIAAA7IgPAAIAAgCIgJABIgLACQgIAAAAgJgAgGAWIAOAAIAAgTIgOAAg");
	this.shape_93.setTransform(302.1,197);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPA2QgKgBAAgJIAAgaIAQAAIAAAWIATAAIAAgVIgfgeQgEgDAAgFIAAgXQAAgLAKABIAfAAQAKAAAAAJIAAAYIgQAAIAAgUIgTAAIAAATIAfAeQAEADAAAFIAAAaQAAAJgKABg");
	this.shape_94.setTransform(295.1,195.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgPAHIAAgNIAfAAIAAANg");
	this.shape_95.setTransform(288.8,196.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAAAsQgIAAAAgJIAAguIgIAAIAAgNIAIAAIAAgTIAOAAIAAATIAKAAIAAANIgKAAIAAAqIALAAIAAANg");
	this.shape_96.setTransform(283.7,196);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_97.setTransform(277.9,197);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AALA2IAAgxIgVAAIAAAxIgQAAIAAhqIAQAAIAAAsIAVAAIAAgsIAQAAIAABqg");
	this.shape_98.setTransform(270.8,195.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAAAsQgIAAAAgJIAAgtIgIAAIAAgOIAIAAIAAgTIAOAAIAAATIAKAAIAAAOIgKAAIAAApIALAAIAAANg");
	this.shape_99.setTransform(314.7,179.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAARIgPAAIAAgNIgNAAIAAAqIANAAIAAgMIAPAAIAAARQAAAJgIAAg");
	this.shape_100.setTransform(309,180.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgMAjQgJAAAAgJIAAgzQAAgIAJAAIAaAAQAIAAAAAIIAAAZIgEADIgYAAIAAAUIAOAAIAAgLIAOAAIAAAOQAAAJgIAAgAgGgFIAOAAIAAgRIgOAAg");
	this.shape_101.setTransform(302.4,180.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgMA8IAAgNIAKAAIAAhQIAPAAIAABVQAAAIgJAAgAgCgrIAAgQIAPAAIAAAQg");
	this.shape_102.setTransform(296.7,180.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgNAjQgJAAAAgJIAAgzQAAgIAJAAIAbAAQAJAAAAAIIAAAzQAAAJgJAAgAgGAVIAOAAIAAgqIgOAAg");
	this.shape_103.setTransform(292,180.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgVAjIAAhEIAQAAIAAACIAJgCIAJgBQAJAAAAAJIAAAVIgQAAIAAgQIgLAAIAAA3g");
	this.shape_104.setTransform(285.6,180.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgZA2IAAhqIApAAQAKAAAAAKIAAAvQAAAJgKAAIgZAAIAAAogAgJABIATAAIAAgoIgTAAg");
	this.shape_105.setTransform(278.8,178.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},14).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},22).wait(36));

	// Glowcircle04
	this.instance = new lib.Glowcircleanimation();
	this.instance.parent = this;
	this.instance.setTransform(717.5,262);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(9));

	// Glowcircle03
	this.instance_1 = new lib.Glowcircleanimation02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(577.3,312.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(18));

	// Glowcircle02
	this.instance_2 = new lib.Glowcircleanimation02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(437,312.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(27));

	// Glowcircle01
	this.instance_3 = new lib.Glowcircleanimation();
	this.instance_3.parent = this;
	this.instance_3.setTransform(297.5,260.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(36));

	// Layer 14
	this.instance_4 = new lib.Dataencry_text();
	this.instance_4.parent = this;
	this.instance_4.setTransform(510.2,-98.5);
	this.instance_4.shadow = new cjs.Shadow("#000000",0,0,56);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({y:96.5},4).to({y:81.5},3).wait(60));

	// Dottedlines
	this.instance_5 = new lib.dottedbaseline();
	this.instance_5.parent = this;
	this.instance_5.setTransform(508,431.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},8).wait(59));

	// Animated Bar
	this.instance_6 = new lib.Baranim("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(508.4,503.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({alpha:1},4).wait(1).to({mode:"synched",loop:false},0).wait(45));

	// BlackCircle04
	this.instance_7 = new lib.Balckcircleanimation();
	this.instance_7.parent = this;
	this.instance_7.setTransform(716.8,261.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).wait(52));

	// BlackCircle03
	this.instance_8 = new lib.Balckcircleanimation();
	this.instance_8.parent = this;
	this.instance_8.setTransform(576.5,311.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).wait(54));

	// BlackCircle02
	this.instance_9 = new lib.Balckcircleanimation();
	this.instance_9.parent = this;
	this.instance_9.setTransform(437,311.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).wait(56));

	// BlackCircle01
	this.instance_10 = new lib.Balckcircleanimation();
	this.instance_10.parent = this;
	this.instance_10.setTransform(297.5,260.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).wait(58));

	// Ninja
	this.instance_11 = new lib.NinjaAppear();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-111,409);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:174},5).to({x:159},3).wait(64));

	// BG
	this.instance_12 = new lib.BackGround_LevelSelection();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,325,1236,791);
// library properties:
lib.properties = {
	id: 'E94B248BE36A49468BE4905ED1118A76',
	width: 1014,
	height: 650,
	fps: 24,
	color: "#00182A",
	opacity: 1.00,
	manifest: [
		{src:"images/LevelLoaderAnimation_atlas_.png?1530290182935", id:"LevelLoaderAnimation_atlas_"}
	],
	preloads: []
};



return lib;
}