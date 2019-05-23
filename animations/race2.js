var RACE2  = function() {
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
lib.ssMetadata = [];


// symbols:



(lib.BG_journey_water = function() {
	this.initialize(img.BG_journey_water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1014,650);


(lib.journey_progress_base = function() {
	this.initialize(img.journey_progress_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,507,18);


(lib.journey_progress_fill = function() {
	this.initialize(img.journey_progress_fill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,10);// helper functions:

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


(lib.progress_trail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","rgba(255,255,0,0)"],[0,1],-60.6,0,60.6,0).s().p("ApdAmIAAhLIS7AAIAABLg");
	this.shape.setTransform(0,0,1.774,1.316);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.progress_trail, new cjs.Rectangle(-107.5,-5,215,10), null);


(lib.progress_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(251,244,7,0.8)").ss(2,1,1).p("AAsgsQATATAAAZQAAAagTASQgSATgaAAQgZAAgTgTQgSgSAAgaQAAgZASgTQATgSAZAAQAaAAASASg");
	this.shape.setTransform(0,0,0.797,0.797);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBF407").s().p("AgsAsQgSgSAAgaQAAgZASgTQATgSAZAAQAaAAASASQATATAAAZQAAAagTASQgSATgaAAQgZAAgTgTg");
	this.shape_1.setTransform(0,0,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.progress_dot, new cjs.Rectangle(-6,-6,12,12), null);


(lib.middle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.BG_journey_water();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.middle, new cjs.Rectangle(0.2,0,1014,650), null);


(lib.journey_progress_fill_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.journey_progress_fill();
	this.instance.parent = this;
	this.instance.setTransform(-250,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.journey_progress_fill_1, new cjs.Rectangle(-250,-5,500,10), null);


(lib.road_mid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.middle();
	this.instance.parent = this;
	this.instance.setTransform(-2532,185.1,1,1,0,0,0,507,185.1);

	this.instance_1 = new lib.middle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(507,185.1,1,1,0,0,0,507,185.1);

	this.instance_2 = new lib.middle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-506,185.1,1,1,0,0,0,507,185.1);

	this.instance_3 = new lib.middle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1519,185.1,1,1,0,0,0,507,185.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.road_mid, new cjs.Rectangle(-3038.8,0,4053,650), null);


(lib.road_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.road_mid();
	this.instance.parent = this;
	this.instance.setTransform(-1010.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2028.4},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4049.5,0,4053,650);


(lib.journey_progress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#498FCB").s().p("AgEAvIAAhSIgbAAIAAgLIA+AAIAAALIgZAAIAABSg");
	this.shape.setTransform(307.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#498FCB").s().p("AgBAGIgSAAIAAAoIgMAAIAAhdIAfAAQAIAAAGADQAHACADAGQAEAFAAAKQAAAFgCAGQgDAFgEAEQgEADgGACIAXAmIgLAGgAgTgEIAQAAQAIAAAFgFQAFgEAAgIQAAgHgDgEQgEgEgIAAIgTAAg");
	this.shape_1.setTransform(297,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#498FCB").s().p("AARAUIggAAIgJAcIgMgEIAdhbIAPAAIAdBbIgLAEgAAOAJIgOgqIgMAqIAaAAg");
	this.shape_2.setTransform(285.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#498FCB").s().p("AgEAvIAAhSIgbAAIAAgLIA/AAIAAALIgaAAIAABSg");
	this.shape_3.setTransform(275,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#498FCB").s().p("AgTApQgIgIgDgNIALgCQACAIAFAFQAEAGAJAAQAIAAAFgDQAEgFABgIQgBgFgDgEQgCgDgFgCIgIgEIgNgEQgFgEgEgEQgEgFAAgJQAAgHAEgGQAEgFAGgDQAGgDAHAAQALgBAIAHQAGAGADALIgMAEQgBgHgEgFQgEgEgHAAIgHABQgEACgCACQgCADAAAEQAAAHADACIAJAGIATAJQAHADADAFQADAGABAGQAAAKgFAGQgDAGgHAEQgHACgIAAQgNABgHgIg");
	this.shape_4.setTransform(264.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#498FCB").s().p("AgiAvIAAgLIAJAAIAAhHIgJAAIAAgLIAfAAQANAAAIAEQAIAFAFAKQAEAKAAARQAAANgDAMQgDAKgIAGQgIAGgQAAgAgNAkIANAAQAHAAAFgDQAFgDADgJQACgHAAgOQAAgNgDgIQgCgIgFgDQgGgDgGAAIgNAAg");
	this.shape_5.setTransform(-262.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#498FCB").s().p("AARAvIgkhOIAAAAIABAZIAAA1IgMAAIAAhdIAOAAIAkBOIAAAAIgBgYIAAg2IANAAIAABdg");
	this.shape_6.setTransform(-274,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#498FCB").s().p("AgcAvIAAhdIA5AAIAAALIgtAAIAAAcIAlAAIAAAKIglAAIAAAhIAtAAIAAALg");
	this.shape_7.setTransform(-284.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

	// progress indicator
	this.progress_dot = new lib.progress_dot();
	this.progress_dot.parent = this;
	this.progress_dot.setTransform(245,0);
	this.progress_dot.shadow = new cjs.Shadow("#FBF407",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.progress_dot).wait(1).to({x:-245},0).wait(15));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl9gAxMBL7AAAQAPAAAMACQANADAJAFQAKAGAFAKQAGAKAAANQgBAcgUALQgTALgeAAMhL7AAAQgPAAgMgCQgNgDgJgGQgKgFgFgKQgGgKAAgOQAAgNAGgKQAFgKAKgGQAJgFANgDQAMgCAPAAg");

	// progress_trail
	this.progress_trail = new lib.progress_trail();
	this.progress_trail.parent = this;
	this.progress_trail.setTransform(351.9,0);

	var maskedShapeInstanceList = [this.progress_trail];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.progress_trail).wait(1).to({x:-135.6},0).to({regX:-4.3,scaleX:0.02,x:-242.5},14).wait(1));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egl9gAxMBL7AAAQAPAAAMACQANADAJAFQAKAGAFAKQAGAKAAANQgBAcgUALQgTALgeAAMhL7AAAQgPAAgMgCQgNgDgJgGQgKgFgFgKQgGgKAAgOQAAgNAGgKQAFgKAKgGQAJgFANgDQAMgCAPAAg");

	// progress_fill
	this.progress_mask1 = new lib.journey_progress_fill_1();
	this.progress_mask1.parent = this;
	this.progress_mask1.setTransform(494,0);

	var maskedShapeInstanceList = [this.progress_mask1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.progress_mask1).wait(16));

	// journey_progress_fill_base
	this.instance = new lib.journey_progress_base();
	this.instance.parent = this;
	this.instance.setTransform(-253.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.2,-17,607.2,38);


// stage content:
(lib.race2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var scope = this.progress_mc;
		var _this = this
		this.animWrapper = createjs.Ticker.on("tick", progressAnim);
		//console.log("scope.cover_mc.x   "+ scope.cover_mc.x)
		function progressAnim(){
			scope.progress_dot.x = scope.progress_dot.x -0.70;
			scope.progress_mask1.x = scope.progress_mask1.x -0.70;
			scope.progress_trail.x = scope.progress_trail.x -0.70;
			if(scope.progress_dot.x <= -245){
				_this.stopAnimation();
				scope.gotoAndPlay(1);
			}
		}
		
		this.stopAnimation = function(){
			createjs.Ticker.off("tick", this.animWrapper)
		}
		
		this.playAnimation = function(){
			this.animWrapper = createjs.Ticker.on("tick", progressAnim);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// progress bar
	this.progress_mc = new lib.journey_progress();
	this.progress_mc.parent = this;
	this.progress_mc.setTransform(496.1,625.1);

	this.timeline.addTween(cjs.Tween.get(this.progress_mc).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001628").s().p("EhBYAuuMAAAhdbMCCxAAAMAAABdbg");
	this.shape.setTransform(507,617.1,1.212,0.11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.background = new lib.road_anim();
	this.background.parent = this;
	this.background.setTransform(1010.7,0);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2531.8,325,6081.4,650);
// library properties:
lib.properties = {
	width: 1014,
	height: 650,
	fps: 24,
	color: "#001628",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_journey_water.png?1527059920885", id:"BG_journey_water"},
		{src:"images/journey_progress_base.png?1527059920885", id:"journey_progress_base"},
		{src:"images/journey_progress_fill.png?1527059920885", id:"journey_progress_fill"}
	],
	preloads: []
};



return lib;

};