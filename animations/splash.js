var SPLASH  = function() {
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

	lib.getSprite = function () { return ss; };
var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Splash_atlas_", frames: [[0,0,1014,650],[0,652,616,591],[618,652,292,1124],[912,652,292,1124],[1206,652,292,1124],[1500,652,292,1124],[1016,0,764,650]]},
		{name:"Splash_atlas_2", frames: [[0,0,292,1124],[588,0,292,1124],[1470,0,292,1124],[294,0,292,1124],[882,0,292,1124],[1176,0,292,1124]]},
		{name:"Splash_atlas_3", frames: [[294,0,292,1124],[882,0,292,1124],[0,0,292,1124],[588,0,292,1124],[1176,0,292,1124],[1470,0,292,1124]]},
		{name:"Splash_atlas_4", frames: [[1221,517,340,59],[0,1126,1014,238],[882,0,514,515],[1016,1147,467,139],[588,0,292,1124],[294,0,292,1124],[0,0,292,1124],[1016,517,203,628]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BackGround_Splash = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ButtonLine = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Circle2_Splash01 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Circle_Splash01 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.InnerCircle01 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo_medium = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0001 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0002 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0003 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0004 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0005 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0006 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0007 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0008 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0009 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0010 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0011 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0012 = function() {
	this.spriteSheet = ss["Splash_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0013 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0014 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0015 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0016 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0017 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0018 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.NinjaAppear0019 = function() {
	this.spriteSheet = ss["Splash_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NinjaStanding2 = function() {
	this.spriteSheet = ss["Splash_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.OuterCircle01 = function() {
	this.spriteSheet = ss["Splash_atlas_"];
	this.gotoAndStop(6);
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


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBzIAAjlIAzAAQASAAAMAMQAMALAAATIAACRQAAASgMAMQgMAMgSAAgAgaBhIAaAAQAMgBAHgGQAIgHAAgMIAAiNQAAgMgHgGQgIgIgLAAIgbAAg");
	this.shape.setTransform(89.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBzIAAjlIBIAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA2AAIAAASg");
	this.shape_1.setTransform(75.6,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBzIgojlIAUAAIAcC2IAAAOIABgOIAci2IAVAAIgpDlg");
	this.shape_2.setTransform(62.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBzIAAjlIATAAIAADlg");
	this.shape_3.setTransform(51.3,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBzIAAjlIBJAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA2AAIAAASg");
	this.shape_4.setTransform(41.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBzQgHAAgEgFQgFgFAAgHIAAjDQAAgIAFgEQAEgEAHgBIA6AAQAIABAEAEQAFAEAAAIIAAA1IgVAAIAAg0IgyAAIAADBIAyAAIAAg5IAVAAIAAA6QAAAHgFAFQgEAFgIAAg");
	this.shape_5.setTransform(27.3,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBzIAAjlIBJAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA2AAIAAASg");
	this.shape_6.setTransform(13.8,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBzIgph6IACgFIAkAAIAAhUIg0AAIAADTIgUAAIAAjlIBMAAQAHABAFAEQAEAEAAAIIAABXQAAAPgWAAIgHAAIgGgBIAoBvg");
	this.shape_7.setTransform(0.1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBzIAAjlIBIAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA2AAIAAASg");
	this.shape_8.setTransform(-21.5,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_9.setTransform(-35.6,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_10.setTransform(-50.1,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcBzQgHAAgFgFQgEgFAAgHIAAg6IAVAAIAAA5IAwAAIAAg3Ig/hMQgGgIAAgJIAAguQAAgIAEgEQAFgEAHgBIA5AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgwAAIAAAwIA+BMQAGAIAAAJIAAA1QAAAHgEAFQgFAFgHAAg");
	this.shape_11.setTransform(-64.3,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBzQgIAAgFgFQgEgFAAgHIAAg6IAUAAIAAA5IAxAAIAAg3Ig+hMQgHgIAAgJIAAguQAAgIAEgEQAFgEAIgBIA4AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgxAAIAAAwIA/BMQAGAIAAAJIAAA1QAAAHgEAFQgFAFgHAAg");
	this.shape_12.setTransform(-78.9,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglBzIAAjlIBKAAIAAASIg1AAIAABWIAwAAIAAARIgwAAIAABaIA2AAIAAASg");
	this.shape_13.setTransform(-92.2,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBzIAAiRIABgSIglCNIgDAAIgmiNIADASIAACRIgUAAIAAjlIATAAIAlCVIAAAGIABgGIAliVIASAAIAADlg");
	this.shape_14.setTransform(-107.3,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-18.8,216.7,37.7);


(lib.Text03_Anim03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGA0QgCgDAAgEQAAgEACgDQADgDADAAQAFAAACADQACADABAEQgBAEgCADQgCADgFAAQgDAAgDgDgAgFAWIgBhMIAOAAIgDBMg");
	this.shape.setTransform(74.5,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_1.setTransform(69.9,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_2.setTransform(64.1,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_3.setTransform(57,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgCgFgGgEQgFgEgHAAQgHAAgFAEg");
	this.shape_4.setTransform(48.7,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_5.setTransform(36.5,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_6.setTransform(28,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_7.setTransform(20.9,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_8.setTransform(12.9,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_9.setTransform(9.1,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfA2IgMgiIgmAAIgLAiIgOAAIAlhrIAQAAIAkBrgAAQAJIgLgeIgCgKIgDgKIAAAAIgCAKIgDAKIgKAeIAfAAg");
	this.shape_10.setTransform(2.4,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAACADQAEADAAADQgBAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(-7.4,26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIgBAAIgFAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_12.setTransform(-13.6,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_13.setTransform(-22.5,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgBADgDIAGgHQAEgDACgGIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_14.setTransform(-30.6,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_15.setTransform(-41.8,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTA0QgHgEgFgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHAEgJAAQgIAAgIgGgAgKgHQgGADgCAHQgDAGAAAJQAAAIADAGQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgFACgHIABgDIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgFAEg");
	this.shape_16.setTransform(-50.5,21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_17.setTransform(-56.7,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_18.setTransform(-62.9,23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_19.setTransform(-72.1,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_20.setTransform(97.2,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_21.setTransform(93.4,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_22.setTransform(89.7,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_23.setTransform(81.9,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_24.setTransform(69.4,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AABAxQgDgCgCgDQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAHADAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_25.setTransform(63.6,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_26.setTransform(56.5,1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_27.setTransform(48.1,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_28.setTransform(39.3,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgEgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_29.setTransform(31.1,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAGgFAHAAIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAAEIAAAng");
	this.shape_30.setTransform(21.8,1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQADgCADgDIAEgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_31.setTransform(14.4,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZAxQgLgHgGgNQgGgLAAgRQAAgQAGgNQAHgMALgIQALgGAOAAQAOAAALAGQALAIAGALQAGANAAAQQAAARgHANQgHANgLAGQgLAGgNABQgOgBgLgGgAgSglQgIAHgEAJQgEALAAALQAAALAEAKQAEAKAIAGQAIAGAKABQALgBAIgGQAHgGAEgKQAEgKAAgMQAAgIgCgHQgCgIgEgHQgEgFgHgFQgGgDgJAAQgLAAgHAGg");
	this.shape_32.setTransform(4.5,0.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAACADQADACAAAEQAAAEgCADQgDADgEAAQgEAAgCgDg");
	this.shape_33.setTransform(-5.9,4.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_34.setTransform(-10.9,1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_35.setTransform(-18.6,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_36.setTransform(-27.4,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_37.setTransform(-33.7,0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AABAxQgDgCgCgDQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAHADAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgHABQgGgBgDgBg");
	this.shape_38.setTransform(-38.2,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_39.setTransform(-44.9,1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgLAAgIgFg");
	this.shape_40.setTransform(-52,1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_41.setTransform(-60.1,1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_42.setTransform(-66.4,-0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIAAADIgBAEIAAAng");
	this.shape_43.setTransform(-73.9,1.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAlQgGgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_44.setTransform(-81.3,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_45.setTransform(-90.2,1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_46.setTransform(-96.4,-0.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_47.setTransform(91.9,-19.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_48.setTransform(83.5,-21.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_49.setTransform(76.3,-20.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_50.setTransform(65.9,-19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_51.setTransform(58.8,-20.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_52.setTransform(50.9,-21.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_53.setTransform(45,-19.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_54.setTransform(37.2,-19.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_55.setTransform(29.3,-19.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_56.setTransform(23.4,-19.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AABAxQgDgCgCgDQgDgCgCgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAHADAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_57.setTransform(17.7,-20.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_58.setTransform(7.2,-19.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_59.setTransform(0.2,-20.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIAAgIgGgAgLgHQgEADgDAHQgDAGAAAJQAAAHADAHQACAHAFADQAFAEAHABQAHAAAFgFQAGgFACgHIABgEIAAgDIAAgNIAAgDIgBgDQgBgFgGgFQgFgFgIAAQgGAAgGAEg");
	this.shape_60.setTransform(-10.6,-21.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_61.setTransform(-18.8,-19.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_62.setTransform(-26.8,-19.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_63.setTransform(-35.3,-19.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_64.setTransform(-45.1,-21.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_65.setTransform(-48.9,-21.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_66.setTransform(-52.6,-21);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_67.setTransform(-60.4,-19.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgFgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQADgCAEgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_68.setTransform(-74.1,-19.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_69.setTransform(-82.9,-19.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGALIAEALIAFgLIAGgLIAPgeIAQAAIgkA9IAAAug");
	this.shape_70.setTransform(-91.5,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text03_Anim03, new cjs.Rectangle(-102.9,-32.9,205.8,65.8), null);


(lib.Text02_Anim02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAIQgCgEgBgEQABgDACgDQACgDAEAAQAEAAADADQACADAAADQABAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(124.7,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIAAQgFAAgEgBg");
	this.shape_1.setTransform(120.2,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_2.setTransform(113.1,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_3.setTransform(104.7,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_4.setTransform(94,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_5.setTransform(82.9,54.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAFgEQAFgEAHgBIADAAIACABIAAANIgDgBIgDAAQgHABgFAEQgEAFgBAIIgBAEIAAADIAAApg");
	this.shape_6.setTransform(76.3,54.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_7.setTransform(69.2,54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_8.setTransform(61.4,54.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_9.setTransform(53.1,54.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAzQgKgCgIgIQgHgHgEgKQgEgKAAgOQAAgOAHgNQAHgMANgIQANgHARAAQAJAAAIABIAKAEIgEALIgKgDIgNgBQgOAAgIAFQgKAFgFAKQgFAKAAAMQAAAOAEAKQAGAJAJAGQAJAEAMAAIAMAAIAHgCIAAghIgXAAIAAgKIAkAAIAAAzIgNAEQgJACgLAAQgLAAgKgEg");
	this.shape_10.setTransform(43.4,53.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_11.setTransform(31,54.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_12.setTransform(22.5,53.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIAAQgFAAgEgBg");
	this.shape_13.setTransform(15.4,53.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_14.setTransform(4.9,54.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQgBAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgHAAQgGAAgDgBg");
	this.shape_15.setTransform(-2.1,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgDgDgBgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgIAAQgEAAgFgBg");
	this.shape_16.setTransform(-10.8,53.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_17.setTransform(-15.3,53.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGAAgDgBg");
	this.shape_18.setTransform(-23.3,53.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_19.setTransform(-27.8,53.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_20.setTransform(-36.3,54.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_21.setTransform(-46.2,54.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_22.setTransform(-53.8,54.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_23.setTransform(-62.3,54.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIACAAIACABIAAANIgCgBIgCAAQgIABgFAEQgEAFgBAIIAAAEIgBADIAAApg");
	this.shape_24.setTransform(-68.1,54.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgDQgDgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_25.setTransform(-73.9,53.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_26.setTransform(-81.8,53.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_27.setTransform(-85.6,53.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_28.setTransform(-89.4,53.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_29.setTransform(-97.1,54.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_30.setTransform(-110.4,54.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_31.setTransform(-120.3,54.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_32.setTransform(141.3,37.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_33.setTransform(136.6,33.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_34.setTransform(129.4,33.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_35.setTransform(123.5,31.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_36.setTransform(119.7,32.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_37.setTransform(116,31.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_38.setTransform(105.8,33.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_39.setTransform(97.4,31.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGAAgDgBg");
	this.shape_40.setTransform(90.2,32.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_41.setTransform(82.3,31.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_42.setTransform(78.5,31.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_43.setTransform(72.6,33.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_44.setTransform(61.5,33.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_45.setTransform(53.7,33.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_46.setTransform(45.8,33.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_47.setTransform(37.7,31.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_48.setTransform(25.8,33.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_49.setTransform(15.9,33.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_50.setTransform(2.6,33.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAKgFALAAQAGAAAGABIAHADIgDALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIACALIgIADQgGABgIAAQgKAAgJgFg");
	this.shape_51.setTransform(-4.9,33.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_52.setTransform(-13,33.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgZAxQgLgHgGgNQgGgLAAgRQAAgQAGgNQAHgMALgHQALgIAOAAQAOAAALAIQALAGAGANQAGAMAAAQQAAARgHANQgHANgLAGQgLAHgNgBQgOABgLgHgAgSglQgIAHgEAKQgEAKAAAKQAAAMAEALQAEAJAIAGQAIAGAKAAQALAAAIgGQAHgGAEgKQAEgKAAgMQAAgHgCgJQgCgHgEgGQgEgHgHgDQgGgEgJAAQgLAAgHAGg");
	this.shape_53.setTransform(-22.9,32.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAIQgDgDABgFQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_54.setTransform(-33.3,36.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_55.setTransform(-39.1,33.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_56.setTransform(-47.6,33.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_57.setTransform(-56.5,33.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgCADgDIAGgGQAEgEACgFIABgCIAAgBIAAgCIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_58.setTransform(-68,35.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgCAHIgBADIgBADIAAAOIABACIABADQABAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_59.setTransform(-76.1,31.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_60.setTransform(-88.3,33.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_61.setTransform(-96.8,33.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_62.setTransform(-105.6,33.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_63.setTransform(-117.4,33.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgDgEgBgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgIAAQgEAAgFgBg");
	this.shape_64.setTransform(-123.8,32.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_65.setTransform(-130.4,33.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgFgJABgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgLgHQgEAEgDAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAHAAQAHAAAFgEQAGgEACgJIABgCIAAgDIAAgOIAAgDIgBgDQgBgGgGgFQgFgEgIAAQgGAAgGAEg");
	this.shape_66.setTransform(-138.8,31.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgCQgCgEgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgEIAAAWIAUAAIAAAMIgUAAIAAAoQgBAHADAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGABgDgCg");
	this.shape_67.setTransform(141,11.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_68.setTransform(134.3,12.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_69.setTransform(126.2,10.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgCQgEgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgEIAAAWIAUAAIAAAMIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEABgFgCg");
	this.shape_70.setTransform(119.1,11.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_71.setTransform(111.1,10.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgFACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_72.setTransform(105.2,12.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_73.setTransform(97.6,12.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgCQgDgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgEIAAAWIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgIAAQgEABgEgCg");
	this.shape_74.setTransform(90.9,11.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_75.setTransform(85.1,12.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgEgJAAgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAALIABAJIgNAAIAAgNIgBAAQgDAGgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAGABQAIgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgCgGgEgFQgGgEgIAAQgHAAgEAEg");
	this.shape_76.setTransform(73.8,10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_77.setTransform(65,12.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_78.setTransform(56.6,12.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_79.setTransform(43.6,12.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_80.setTransform(33.3,12.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJABgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAALIABAJIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAHABQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgFQgFgEgIAAQgGAAgFAEg");
	this.shape_81.setTransform(24.2,10.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_82.setTransform(15.9,12.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_83.setTransform(7.8,10.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_84.setTransform(0.1,12.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_85.setTransform(-10.9,12.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_86.setTransform(-17.2,10.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_87.setTransform(-26.9,12.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_88.setTransform(-36,14);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_89.setTransform(-45.6,10.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_90.setTransform(-49.4,10.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_91.setTransform(-53.1,10.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_92.setTransform(-60.9,12.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgRAlQgGgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_93.setTransform(-74.6,12.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_94.setTransform(-83.4,12.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGAMIAEAKIAFgKIAGgMIAPgeIAQAAIgkA9IAAAug");
	this.shape_95.setTransform(-92,10.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQADADAAADQAAAEgCADQgDADgEAAQgEAAgCgDg");
	this.shape_96.setTransform(-101.3,15.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAHgFAHABIACAAIABAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIgBAEIAAADIAAApg");
	this.shape_97.setTransform(-105.3,12.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_98.setTransform(-112.4,12.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_99.setTransform(-120.2,12.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_100.setTransform(-126.3,12.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_101.setTransform(-133.3,12.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_102.setTransform(-140.5,12.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_103.setTransform(137,-8.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_104.setTransform(132,-10.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_105.setTransform(126.2,-8.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_106.setTransform(117.7,-10.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgEQgDgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgFABgEgCg");
	this.shape_107.setTransform(110.6,-9.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_108.setTransform(100.1,-8.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_109.setTransform(91.2,-8.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_110.setTransform(79.5,-8.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_111.setTransform(73.5,-10.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_112.setTransform(69.8,-10.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_113.setTransform(66,-10.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_114.setTransform(55.8,-8.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgEQgDgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgIAAQgEABgFgCg");
	this.shape_115.setTransform(49.5,-9.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_116.setTransform(42.8,-8.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIAAgIgEgAgLgHQgEAEgDAFQgDAHAAAJQAAAHADAHQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_117.setTransform(34.4,-10.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgEgJAAgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAEQAFAFAGAAQAIgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgCgGgEgEQgGgFgIAAQgHAAgEAEg");
	this.shape_118.setTransform(22,-10.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_119.setTransform(13.8,-8.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgEQgDgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgFABgEgCg");
	this.shape_120.setTransform(7.1,-9.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgkA3IAAhSIAAgOIAAgMIAMAAIACAOQAEgHAHgEQAGgEAJAAQAJAAAIAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAGAEAHAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgCgGgFgEQgGgEgHAAQgHAAgFAFg");
	this.shape_121.setTransform(0.2,-7.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgBADgDIAGgHQAEgDACgGIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAVIgHAQQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_122.setTransform(-8.4,-7.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAAEIAAAng");
	this.shape_123.setTransform(-14.4,-8.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_124.setTransform(-20.9,-8.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_125.setTransform(-29.1,-8.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_126.setTransform(-37.5,-8.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_127.setTransform(-48.9,-8.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_128.setTransform(-54.8,-10.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_129.setTransform(-61.4,-7.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_130.setTransform(-70.1,-8.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_131.setTransform(-76.4,-10.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_132.setTransform(-81.5,-8.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_133.setTransform(-92.1,-8.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_134.setTransform(-102.3,-8.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_135.setTransform(-109.5,-8.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAHgFAHABIACAAIABAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIgBAEIAAAEIAAAng");
	this.shape_136.setTransform(-115.7,-8.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_137.setTransform(-123.2,-8.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgEgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgDIAAAVIAUAAIAAAMIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEABgFgCg");
	this.shape_138.setTransform(-130.2,-9.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_139.setTransform(-136,-8.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_140.setTransform(138.2,-30.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_141.setTransform(129.4,-30.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_142.setTransform(123.1,-31.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgEQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgGAAgDgBg");
	this.shape_143.setTransform(118.6,-31.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_144.setTransform(111.9,-30.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAFABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAGAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_145.setTransform(104.8,-30.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_146.setTransform(96.7,-30.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_147.setTransform(90.4,-31.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_148.setTransform(80.7,-31.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_149.setTransform(72.7,-30.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_150.setTransform(65,-30.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgdA2IAAhrIA5AAIAAAMIgsAAIAAAiIApAAIAAAKIgpAAIAAAoIAvAAIAAALg");
	this.shape_151.setTransform(57.8,-31.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQADADABADQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_152.setTransform(48.6,-27.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAQA5IgaglIgIAIIAAAdIgOAAIAAhxIAOAAIAABHIABAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_153.setTransform(43.7,-31.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIABAPIAAAAQADgHAEgFQAGgFAHABIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_154.setTransform(37.1,-30.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_155.setTransform(29.6,-30.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_156.setTransform(19.4,-30.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIAAAPIABAAQADgHAEgFQAGgFAHABIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_157.setTransform(7.9,-30.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_158.setTransform(2.9,-31.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_159.setTransform(-2.9,-30.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_160.setTransform(-11.4,-31.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEAAgFgBg");
	this.shape_161.setTransform(-18.5,-31.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_162.setTransform(-28.5,-30.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIAAAEIgBAEIAAAng");
	this.shape_163.setTransform(-34.7,-30.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_164.setTransform(-42.2,-30.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgEQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgGAAgDgBg");
	this.shape_165.setTransform(-49.3,-31.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_166.setTransform(-55.1,-30.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIABgIgGgAgLgHQgEADgDAHQgDAGAAAJQAAAIADAGQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgFACgHIABgDIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_167.setTransform(-66.4,-31.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_168.setTransform(-75.1,-30.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_169.setTransform(-83.6,-30.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_170.setTransform(-94.6,-30.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEAAgFgBg");
	this.shape_171.setTransform(-101.3,-31.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_172.setTransform(-108,-30.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_173.setTransform(-113.8,-30.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_174.setTransform(-120.9,-30.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgjA3IAAhSIAAgOIgBgMIAMAAIABAOQAFgHAHgEQAHgEAIAAQAKAAAHAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIgBAAIAAAqgAgNgmQgFAEgCAIIgBADIgBADIAAANIABADIABADQABAGAGAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_175.setTransform(-129.2,-28.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_176.setTransform(-138.4,-30.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgCADgCIAGgGQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_177.setTransform(128.8,-49.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_178.setTransform(121,-51.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_179.setTransform(112.6,-53.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgDQgCgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAHADAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_180.setTransform(105.4,-52.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_181.setTransform(95.4,-51.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgFAHAAIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAAEIAAAng");
	this.shape_182.setTransform(89.2,-51.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_183.setTransform(82.2,-51.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAEACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_184.setTransform(73.7,-53.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_185.setTransform(63.4,-51.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_186.setTransform(50.9,-51.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgMA2QgHgDgEgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_187.setTransform(43.4,-53.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_188.setTransform(34.6,-51.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_189.setTransform(29,-53.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIAAADIgBAEIAAAng");
	this.shape_190.setTransform(21.5,-51.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgRAlQgGgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_191.setTransform(14.1,-51.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_192.setTransform(5.2,-51.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_193.setTransform(-1,-53.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_194.setTransform(-10.4,-51.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_195.setTransform(-17.6,-51.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_196.setTransform(-25.7,-53.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgGAHQgCgDgBgEQABgEACgCQACgDAEAAQAEAAADADQACACAAAEQABAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_197.setTransform(-35,-48.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgLAAgIgFg");
	this.shape_198.setTransform(-40.3,-51.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_199.setTransform(-48.5,-51.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_200.setTransform(-54.8,-52.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_201.setTransform(-64.8,-49.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_202.setTransform(-73.5,-51.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_203.setTransform(-82.9,-52.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_204.setTransform(-90.9,-51.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgFAHAAIACAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBAEIAAAng");
	this.shape_205.setTransform(-95.6,-51.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_206.setTransform(-102.6,-51.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgMA2QgHgDgEgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_207.setTransform(-110.9,-53.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgCADgCIAGgGQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_208.setTransform(-119.5,-49.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgMQAHgNANgIQAMgGAQAAQAKAAAHABIAJADIgDALIgKgDQgFgBgHAAQgNAAgIAFQgKAFgFAKQgFALAAANQAAANAFAJQAEAKAKAFQAIAGANAAQAHAAAGgCQAGgBAEgCIADALIgLAEQgIABgKABQgOgBgMgGg");
	this.shape_209.setTransform(-127.9,-52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text02_Anim02, new cjs.Rectangle(-146,-64.7,292.1,129.5), null);


(lib.Text01_Anim01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAIQgDgDABgFQgBgEADgCQADgDADAAQAEAAADADQADACAAAEQgBAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(91.3,121.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_1.setTransform(83.6,118.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_2.setTransform(73.3,118.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAALIAAAsg");
	this.shape_3.setTransform(64.4,118.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_4.setTransform(54.7,116.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_5.setTransform(50.9,116.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_6.setTransform(47.1,117.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_7.setTransform(42.6,117.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_8.setTransform(33.4,118.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_9.setTransform(26.2,118.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_10.setTransform(20.3,117.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABAxQgDgCgCgDQgDgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQgBAHADAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgHABQgGgBgDgBg");
	this.shape_11.setTransform(15.8,117.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_12.setTransform(11.3,117.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_13.setTransform(7.2,118.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_14.setTransform(-0.3,118.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_15.setTransform(-9.1,116.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgIABQgEgBgFgBg");
	this.shape_16.setTransform(-16.2,117.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgFgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQADgCAEgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_17.setTransform(-23.2,118.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_18.setTransform(-31.7,118.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_19.setTransform(-43.5,120.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAALIAAAsg");
	this.shape_20.setTransform(-52.2,118.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_21.setTransform(-58.5,117.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAgtIAOAAIAABcIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAEQgGAFgJAAQgKAAgHgGgAgKgHQgFADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAGABQAIAAAGgFQAFgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgDgFgEgFQgGgFgIAAQgHAAgEAEg");
	this.shape_22.setTransform(-65.1,116.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_23.setTransform(-73.4,118.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_24.setTransform(-80.9,118.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_25.setTransform(-88.7,118.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_26.setTransform(128.9,97.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_27.setTransform(120.5,97.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_28.setTransform(112.5,97.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_29.setTransform(104.2,95.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_30.setTransform(92,97.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_31.setTransform(84.2,97.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_32.setTransform(76.3,97.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_33.setTransform(68.2,95.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAtIADAJIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAWIgHAPQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_34.setTransform(56.5,99.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_35.setTransform(48.8,97.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgEgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_36.setTransform(40.3,95.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgDQgDgDgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgFAAgEgCg");
	this.shape_37.setTransform(33.2,96.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_38.setTransform(25.4,101.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_39.setTransform(20.7,97.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_40.setTransform(13.5,97.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_41.setTransform(7.6,95.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_42.setTransform(1,99);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_43.setTransform(-7.6,97.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_44.setTransform(-13.9,95.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_45.setTransform(-20.2,97.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_46.setTransform(-29.1,97.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_47.setTransform(-37.9,95.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_48.setTransform(-45.9,97.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_49.setTransform(-53.5,97.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_50.setTransform(-60.2,96.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_51.setTransform(-70.7,95.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_52.setTransform(-78.6,97.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_53.setTransform(-85,96.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_54.setTransform(-92,97.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_55.setTransform(-100.9,97.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_56.setTransform(-107.7,96.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkA3IAAhSIAAgOIAAgMIANAAIABAOQAEgHAHgEQAHgEAIAAQAKAAAHAFQAIAEAEAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAGAEAHAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgCgGgFgEQgGgEgHAAQgHAAgFAFg");
	this.shape_57.setTransform(-114.5,98.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_58.setTransform(-123.7,97.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgDgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_59.setTransform(-130.8,96.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJAAgMQABgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgGAEgKABQgJgBgHgEgAgLgHQgEAEgEAFQgCAHAAAJQAAAIACAGQADAHAFAEQAFADAHAAQAHABAFgFQAGgEADgJIAAgDIAAgCIAAgOIAAgDIAAgDQgDgFgFgGQgFgEgIAAQgGAAgGAEg");
	this.shape_60.setTransform(141.3,74.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_61.setTransform(132.6,76.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_62.setTransform(124.1,76.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_63.setTransform(113.3,77.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_64.setTransform(106.8,75.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_65.setTransform(102.3,74.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIAAAPIABAAQADgIAEgEQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_66.setTransform(98.3,76.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgFAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_67.setTransform(90.8,76.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_68.setTransform(82.9,76.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_69.setTransform(75.3,76.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_70.setTransform(68.1,76.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgHAEgIABQgJgBgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAHAFAEQAFADAGAAQAIABAGgFQAFgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgCgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_71.setTransform(56.8,74.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_72.setTransform(48,76.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_73.setTransform(39.6,76.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_74.setTransform(33.2,75.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_75.setTransform(26.3,74.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_76.setTransform(17.1,77.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_77.setTransform(11,74.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_78.setTransform(4.7,74.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgIAFgEQAGgEAGgBIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAADIAAApg");
	this.shape_79.setTransform(-5.4,76.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_80.setTransform(-10.3,74.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_81.setTransform(-16.2,76.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_82.setTransform(-24.6,74.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_83.setTransform(-31.8,75.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_84.setTransform(-42.2,74.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_85.setTransform(-49.4,75.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_86.setTransform(-53.9,74.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAVA2IgOg3IgEgTIgDgRIAAAAIgDARIgFATIgPA3IgPAAIgbhrIAPAAIANA1IAEAVIAEARIAEgRIAFgVIAOg1IAOAAIANA2IAEATIADASIABAAIAEgSIAEgUIAPg1IAOAAIgfBrg");
	this.shape_87.setTransform(-62.5,74.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgGAIQgCgDgBgFQABgDACgDQACgDAEAAQAEAAADADQACADAAADQABAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_88.setTransform(-74.2,79.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_89.setTransform(-79.2,76.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_90.setTransform(-86.3,76.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AABAxQgDgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_91.setTransform(-93,75.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_92.setTransform(-99.7,76.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_93.setTransform(-106.8,76.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_94.setTransform(-112.4,74.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgGAEgJABQgKgBgHgEgAgLgHQgEAEgEAFQgCAHAAAJQAAAIACAGQADAHAFAEQAFADAGAAQAIABAGgFQAFgEADgJIAAgDIAAgCIAAgOIAAgDIAAgDQgCgFgFgGQgGgEgIAAQgHAAgFAEg");
	this.shape_95.setTransform(-119,74.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_96.setTransform(-127.7,76.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_97.setTransform(-135.9,77.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_98.setTransform(-142.9,76.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJABgMQAAgMAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_99.setTransform(127.2,53.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_100.setTransform(118.5,54.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_101.setTransform(110,54.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_102.setTransform(99.8,54.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_103.setTransform(92.6,54.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_104.setTransform(87,53.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_105.setTransform(83.3,53);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgDgDQgEgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_106.setTransform(76.5,54.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_107.setTransform(66.1,54.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgCADgDIAGgGQAEgEACgFIABgCIAAgBIAAgCIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_108.setTransform(52.3,56.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgMA2QgHgDgEgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAHAFQAHAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAGgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgFgEgIAAQgGAAgHAEg");
	this.shape_109.setTransform(44.2,53.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgFgJABgMQAAgMAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgLgHQgEAEgDAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_110.setTransform(31.3,53.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_111.setTransform(23,54.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJABgMQAAgMAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_112.setTransform(14.3,53.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_113.setTransform(5.5,54.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIgBAAIgFAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_114.setTransform(-3.3,55);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_115.setTransform(-9.6,53);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_116.setTransform(-17.5,58.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_117.setTransform(-22.2,54.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_118.setTransform(-29.9,54.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_119.setTransform(-38.7,54.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_120.setTransform(-45,53.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgDgDgBgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgIAAQgEAAgFgBg");
	this.shape_121.setTransform(-49.5,53.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_122.setTransform(-56.2,54.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCgBIgCAAQgIABgFAEQgEAFgBAIIAAAEIgBADIAAApg");
	this.shape_123.setTransform(-62,54.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_124.setTransform(-69.1,54.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgkA3IAAhSIAAgOIAAgMIANAAIABAOQAEgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIgBAAIAAAqgAgNgmQgFAEgDAIIAAADIgBADIAAANIABADIAAADQACAGAGAFQAGAEAHAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgEgEQgFgEgIAAQgHAAgGAFg");
	this.shape_125.setTransform(-77.4,56.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_126.setTransform(-86.6,54.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_127.setTransform(-98.4,54.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_128.setTransform(-109.1,54.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_129.setTransform(-117.6,53.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIACAAIACABIAAANIgCgBIgCAAQgIABgFAEQgEAFgBAIIAAAEIgBADIAAApg");
	this.shape_130.setTransform(-121.7,54.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_131.setTransform(-128.2,54.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgEAGAAIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_132.setTransform(132.2,33.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_133.setTransform(125.2,33.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQADAHAFAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_134.setTransform(116.9,31.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgCADgDIAGgGQAEgEACgFIABgCIAAgBIAAgCIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_135.setTransform(108.3,35.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_136.setTransform(101,33.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAHgEAHAAIACAAIABAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIgBAEIAAADIAAApg");
	this.shape_137.setTransform(91.8,33.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_138.setTransform(84.3,33.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_139.setTransform(78,31.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgjA3IAAhSIAAgOIgBgMIAMAAIABAOQAFgHAHgEQAHgEAIAAQAJAAAIAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgCgGgGgEQgFgEgHAAQgHAAgFAFg");
	this.shape_140.setTransform(67.6,35.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIgBAAIgFAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_141.setTransform(58.4,33.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIABAQIAAAAQADgJAEgEQAGgEAHAAIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAADIAAApg");
	this.shape_142.setTransform(48.4,33.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_143.setTransform(41.3,33.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_144.setTransform(33.5,33.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_145.setTransform(25.2,33.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_146.setTransform(17.3,33.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgFACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_147.setTransform(6.2,33.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgDQgCgEgCgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAHADAEQADAEAFAAIAFAAIADgBIABAKIgFACIgIAAQgFAAgEgBg");
	this.shape_148.setTransform(-3.5,32.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_149.setTransform(-9.6,33.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_150.setTransform(-17.3,33.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_151.setTransform(-22.9,31.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_152.setTransform(-33.5,33.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_153.setTransform(-39.8,32.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_154.setTransform(-48.3,33.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_155.setTransform(-53.3,32.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_156.setTransform(-60.4,37.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_157.setTransform(-66.4,33.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_158.setTransform(-75.2,33.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_159.setTransform(-81.5,32.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgDQgDgEgCgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_160.setTransform(-86,32.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_161.setTransform(-92.7,33.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_162.setTransform(-100.2,33.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_163.setTransform(-108.5,33.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_164.setTransform(-117.3,33.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_165.setTransform(-126.2,33.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_166.setTransform(-132.5,32.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgLQAAgNAGgJQAEgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAALIAAAJIgMAAIAAgNIgBAAQgDAGgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAGABQAIgBAGgEQAFgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgCgGgEgFQgGgEgIAAQgHAAgEAEg");
	this.shape_167.setTransform(130.1,10.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_168.setTransform(121.4,12.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_169.setTransform(112.9,12.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgBADgDIAGgHQAEgEACgFIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAvIADAHIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_170.setTransform(102.1,14.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_171.setTransform(93.6,14);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_172.setTransform(84.9,12.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_173.setTransform(78.6,10.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_174.setTransform(72.3,12.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_175.setTransform(63.5,12.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_176.setTransform(54.6,10.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_177.setTransform(46.7,12.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_178.setTransform(39,12.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgCQgDgEgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgEIAAAWIAUAAIAAAMIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEABgFgCg");
	this.shape_179.setTransform(32.3,11.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_180.setTransform(22.3,12.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_181.setTransform(16.1,12.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_182.setTransform(9,12.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_183.setTransform(-0.5,12.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AABAxQgDgCgDgCQgDgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgEIAAAWIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgFABgEgCg");
	this.shape_184.setTransform(-9.1,11.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_185.setTransform(-13.6,10.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_186.setTransform(-20.8,12.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_187.setTransform(-28.4,12.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_188.setTransform(-39.4,12.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_189.setTransform(-45.7,10.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_190.setTransform(-53.2,12.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_191.setTransform(-60.2,12.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJABgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAALIABAJIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAHABQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgFQgFgEgIAAQgGAAgFAEg");
	this.shape_192.setTransform(-69,10.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_193.setTransform(-77.3,12.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_194.setTransform(-84.9,12.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_195.setTransform(-90.9,10.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJAAgLQABgNAFgJQAEgJAIgFQAIgFAJAAQAIAAAGAEQAGADADAFIAAAAIAAgvIAOAAIAABdIAAALIAAAJIgMAAIgBgNIAAAAQgDAGgHAFQgGADgKAAQgJAAgHgEgAgLgHQgFAEgDAFQgCAHAAAJQAAAHACAHQADAGAFAFQAFADAGABQAIgBAGgEQAFgEADgJIAAgCIAAgEIAAgNIAAgDIAAgDQgDgGgFgFQgFgEgIAAQgHAAgFAEg");
	this.shape_196.setTransform(-100.9,10.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_197.setTransform(-107.1,10.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAADIAAApg");
	this.shape_198.setTransform(-111.1,12.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_199.setTransform(-118.6,12.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_200.setTransform(-128.9,12.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_201.setTransform(140,-8.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgEgJAAgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgCgGgEgEQgGgFgIAAQgHAAgEAEg");
	this.shape_202.setTransform(128.2,-10.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_203.setTransform(120,-8.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_204.setTransform(113.8,-8.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_205.setTransform(106.7,-8.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgTA1QgHgFgFgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgFAEg");
	this.shape_206.setTransform(98,-10.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_207.setTransform(91.8,-10.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_208.setTransform(86.8,-8.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_209.setTransform(79.1,-8.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_210.setTransform(70.3,-8.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_211.setTransform(62.4,-8.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgBADgDIAGgHQAEgDACgGIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAVIgHAQQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_212.setTransform(51.6,-7.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_213.setTransform(45.9,-10.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_214.setTransform(40,-8.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgTA1QgIgFgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIAAgIgEgAgLgHQgEAEgDAFQgDAHAAAJQAAAHADAHQACAGAFAEQAFAFAHAAQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_215.setTransform(31.3,-10.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_216.setTransform(25.1,-10.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_217.setTransform(17.4,-8.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_218.setTransform(3.6,-10.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_219.setTransform(-5.6,-7.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_220.setTransform(-14.2,-8.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_221.setTransform(-23,-8.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_222.setTransform(-31.8,-10.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgEgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIAAQgEABgFgCg");
	this.shape_223.setTransform(-39,-9.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgGAHQgDgDABgEQgBgEADgCQADgDADAAQAEAAADADQADACAAAEQgBAEgCADQgDADgEAAQgEAAgCgDg");
	this.shape_224.setTransform(-46.5,-5.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgDALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgIgFg");
	this.shape_225.setTransform(-51.8,-8.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_226.setTransform(-59.9,-8.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_227.setTransform(-66.2,-10.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_228.setTransform(-76.3,-7.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_229.setTransform(-84.9,-8.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_230.setTransform(-94.3,-10.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_231.setTransform(-102.4,-9.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_232.setTransform(-107,-8.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_233.setTransform(-114.1,-8.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgMA2QgHgDgDgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAOAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgFgEgIAAQgHAAgGAEg");
	this.shape_234.setTransform(-122.4,-10.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgfAtIAGgDQADgBADgDIAGgHQAEgDACgGIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAVIgHAQQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_235.setTransform(-131,-7.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgMQAHgOANgGQAMgIAQABQAKgBAHACIAJADIgDAMIgKgEQgFgBgHAAQgNAAgIAGQgKAFgFAJQgFALAAAMQAAAOAFAKQAEAJAKAFQAIAGANAAQAHAAAGgBQAGgCAEgCIADAMIgLADQgIACgKgBQgOAAgMgGg");
	this.shape_236.setTransform(-139.4,-10.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_237.setTransform(141.7,-30.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAFgFAHABIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_238.setTransform(132.9,-30.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_239.setTransform(127.9,-31.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_240.setTransform(124.2,-32);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_241.setTransform(114.8,-30.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgHAIIADgNIADgMIANgBIgEANIgGAOIgEAKIgJAAIAEgLg");
	this.shape_242.setTransform(110.1,-35.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIABgIgGgAgLgHQgEADgEAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAHAAQAHgBAFgEQAGgFADgHIAAgDIAAgEIAAgNIAAgDIAAgDQgCgGgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_243.setTransform(103.6,-31.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_244.setTransform(97.5,-31.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_245.setTransform(91.2,-30.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIAAAEIgBAEIAAAng");
	this.shape_246.setTransform(84.6,-30.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_247.setTransform(76.5,-31.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgGAHQgDgDABgEQgBgDADgDQADgDADAAQAEAAADADQADADAAADQgBAEgCADQgDADgEAAQgEAAgCgDg");
	this.shape_248.setTransform(66,-27.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBAEIAAAng");
	this.shape_249.setTransform(62,-30.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_250.setTransform(53.9,-31.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEAAgFgBg");
	this.shape_251.setTransform(42.2,-31.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_252.setTransform(35.6,-30.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_253.setTransform(27.5,-31.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgDgEQgCgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABALIgFABIgIAAQgFAAgEgBg");
	this.shape_254.setTransform(20.3,-31.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_255.setTransform(12.4,-31.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_256.setTransform(6.5,-30.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgEQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEAAgFgBg");
	this.shape_257.setTransform(-0.2,-31.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_258.setTransform(-7.3,-30.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_259.setTransform(-13.6,-31.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgTA0QgHgEgFgJQgEgJgBgLQAAgOAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAFQgGADgJAAQgKABgHgGgAgLgHQgEADgEAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIgBAGgEQAFgFADgHIAAgDIAAgEIAAgNIAAgDIAAgDQgCgGgFgEQgGgFgIAAQgHAAgFAEg");
	this.shape_260.setTransform(-23.6,-31.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_261.setTransform(-31.8,-30.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_262.setTransform(-42.5,-30.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIAAAEIgBAEIAAAng");
	this.shape_263.setTransform(-51.4,-30.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_264.setTransform(-56.3,-31.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_265.setTransform(-60.1,-32);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_266.setTransform(-67.3,-30.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_267.setTransform(-76.2,-30.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_268.setTransform(-84,-30.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_269.setTransform(-95.1,-30.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_270.setTransform(-102.9,-30.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_271.setTransform(-110.8,-30.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_272.setTransform(-118.9,-31.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_273.setTransform(-130.8,-30.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAVA2IgOg3IgEgTIgDgQIAAAAIgDAQIgFATIgPA3IgPAAIgbhrIAPAAIANA2IAEATIAEASIAEgSIAFgTIAOg2IAOAAIANA2IAEATIADASIABAAIAEgSIAEgTIAPg2IAOAAIgfBrg");
	this.shape_274.setTransform(-141.5,-31.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAACADQADACABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_275.setTransform(147.2,-48.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AADAIIAEgNIACgMIAPgBIgFANIgFAOIgFAKIgJABIADgMgAgTAIIADgNIADgMIANgBIgDANIgGAOIgFAKIgJABIAEgMg");
	this.shape_276.setTransform(142.6,-56.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgaA0IAshbIAAgBIgyAAIAAgLIBBAAIAAAJIgsBeg");
	this.shape_277.setTransform(135.7,-52.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgVAzQgGgCgFgCIAEgLIAKAEQAGACAGAAQAGAAAGgDQAFgDADgFQAEgFAAgHQAAgKgHgGQgIgGgOAAIgIAAIgGABIAHgyIAwAAIAAAMIgmAAIgFAbIAFgBIAEAAIALABQAGACAFADQAFADAFAGQAEAHAAAKQAAAKgEAIQgFAIgKAEQgIAFgLAAQgIAAgHgCg");
	this.shape_278.setTransform(127.2,-52.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_279.setTransform(115.9,-51.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgTA0QgHgEgFgJQgEgJgBgLQAAgOAGgIQAEgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAEQgHAFgIAAQgJAAgIgGgAgKgHQgGADgCAHQgDAGAAAJQAAAIADAGQACAGAFAEQAFAFAGAAQAIAAAGgFQAFgFACgHIABgEIAAgDIAAgNIAAgDIgBgDQgCgFgEgFQgGgFgIAAQgHAAgEAEg");
	this.shape_280.setTransform(107.2,-53.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_281.setTransform(98.5,-51.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgMQAHgNANgIQAMgGAQAAQAKAAAHABIAJADIgDALIgKgDQgFgBgHAAQgNAAgIAFQgKAFgFAKQgFALAAANQAAANAFAJQAEAKAKAFQAIAGANAAQAHAAAGgCQAGgBAEgCIADALIgLAEQgIABgKABQgOgBgMgGg");
	this.shape_282.setTransform(89.5,-52.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAFAFIAFgMIAFgKIAJgBIgEALIgDAMIgDANIgOACIAFgPgAgSAFIAFgMIAFgKIAIgBIgCALIgEAMIgCANIgPACIAFgPg");
	this.shape_283.setTransform(82.1,-56.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_284.setTransform(71.7,-51.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgRA8IAIgCQAEgCADgCIADgGIABgJIABgOIAAhAIANAAIAABFQAAALgCAIQgCAIgFAFIgHAFIgHADIgJABgAADg3QgCgCAAgEQAAgEACgCQADgDAEAAQAEAAACADQACACAAAEQAAAEgCACQgCADgEAAQgEAAgDgDg");
	this.shape_285.setTransform(65.3,-51.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_286.setTransform(59.7,-51.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_287.setTransform(53.4,-52.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAbA2Ighg2IgLgSIgKgRIAAAAIABAUIAAAXIAAAuIgOAAIAAhrIAQAAIAiA2IAKASIAJARIAAAAIgBgWIAAgVIAAguIAMAAIAABrg");
	this.shape_288.setTransform(46.2,-52.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_289.setTransform(38.5,-51.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_290.setTransform(34.2,-52.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_291.setTransform(25.7,-51.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_292.setTransform(18.5,-51.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_293.setTransform(7,-51.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_294.setTransform(-1.9,-51.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_295.setTransform(-8.1,-52.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_296.setTransform(-13.2,-51.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_297.setTransform(-19.5,-51.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_298.setTransform(-24.6,-52.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_299.setTransform(-33.1,-51.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_300.setTransform(-46.4,-51.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_301.setTransform(-51.4,-52.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_302.setTransform(-57.7,-53.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_303.setTransform(-64.9,-52.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgFAHAAIACAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBAEIAAAng");
	this.shape_304.setTransform(-73.1,-51.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_305.setTransform(-80.6,-51.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_306.setTransform(-86.8,-53.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgLQABgOAFgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIgBgOIAAAAQgDAHgHAEQgGAFgKAAQgJAAgHgGgAgLgHQgFADgDAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIAAAGgFQAFgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgDgFgFgFQgFgFgIAAQgHAAgFAEg");
	this.shape_307.setTransform(-97.7,-53.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_308.setTransform(-106,-51.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_309.setTransform(-112.7,-52.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_310.setTransform(-118.8,-51.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_311.setTransform(-126.4,-51.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_312.setTransform(-132.4,-53.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_313.setTransform(-138.2,-51.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_314.setTransform(-145.4,-51.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_315.setTransform(134,-72.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_316.setTransform(125.6,-72.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_317.setTransform(117.6,-72.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgCAHIgBADIgBADIAAAOIABACIABADQABAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_318.setTransform(109.3,-74.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_319.setTransform(97.1,-72.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_320.setTransform(89.3,-72.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_321.setTransform(81.4,-72.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_322.setTransform(73.3,-74.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_323.setTransform(61,-72.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_324.setTransform(52.2,-72.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGALIAEALIAFgLIAGgLIAPgeIAQAAIgkA9IAAAug");
	this.shape_325.setTransform(43.6,-74.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgGAHQgCgCgBgFQABgEACgCQACgDAEAAQAEAAADADQACACAAAEQABAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_326.setTransform(34.3,-69.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_327.setTransform(28.7,-70.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_328.setTransform(21.4,-72.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_329.setTransform(13.3,-72.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_330.setTransform(4.9,-72.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_331.setTransform(-3.9,-71);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_332.setTransform(-12.1,-72.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAGgFAHAAIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_333.setTransform(-21.4,-72.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_334.setTransform(-28.4,-72.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_335.setTransform(-36.3,-72.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_336.setTransform(-44.6,-72.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_337.setTransform(-52.4,-72.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAGgFAHAAIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_338.setTransform(-58.3,-72.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_339.setTransform(-65.3,-72.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAEQgGAFgJAAQgKAAgHgGgAgKgHQgFADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAGABQAIAAAGgFQAFgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgDgFgEgFQgGgFgIAAQgHAAgEAEg");
	this.shape_340.setTransform(-74.1,-74.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_341.setTransform(-82.8,-72.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgFgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQADgCAEgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_342.setTransform(-91.6,-72.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_343.setTransform(-103.9,-74.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_344.setTransform(-111.8,-72.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_345.setTransform(-118.2,-73.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_346.setTransform(-125.2,-72.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_347.setTransform(-134.1,-72.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgkA3IAAhSIAAgOIAAgMIANAAIABAOQAEgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAGAEAHAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgEgEQgGgEgHAAQgHAAgFAFg");
	this.shape_348.setTransform(132.2,-92.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_349.setTransform(123,-93.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgEgDgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_350.setTransform(115.9,-94.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_351.setTransform(106.7,-93.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgHAIIADgMIADgNIANgCIgEAPIgGAMIgEALIgJABIAEgMg");
	this.shape_352.setTransform(102,-99);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAgtIAOAAIAABcIAAAKIABAKIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIgBgIgFgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAHAAQAHABAFgFQAGgFADgHIAAgEIAAgCIAAgOIAAgDIAAgDQgCgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_353.setTransform(95.5,-95.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_354.setTransform(89.3,-95.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAFgFQAFgEAHgBIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAAog");
	this.shape_355.setTransform(85.3,-93.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_356.setTransform(77.8,-93.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_357.setTransform(67.5,-93.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_358.setTransform(54.2,-93.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_359.setTransform(45.8,-95.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAAAxQgCgCgCgDQgDgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_360.setTransform(38.6,-94.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_361.setTransform(30.8,-90);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgPBBQAJgMAFgQQAFgQAAgVQAAgVgFgQQgFgQgJgLIALAAQAEAGAFAJQAFAKADAMQADAMAAAPQAAAPgDANQgDAMgFAJQgFAJgEAHg");
	this.shape_362.setTransform(26.7,-94.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgjA3IAAhSIAAgOIgBgMIANAAIAAAOQAFgHAHgEQAGgEAJAAQAJAAAIAFQAHAEAEAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIgBAAIAAAqgAgNgmQgFAEgDAIIAAADIgBADIAAANIABADIAAADQACAGAGAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_363.setTransform(20.5,-92.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQAEgCACgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_364.setTransform(11.3,-93.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_365.setTransform(2.4,-93.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgEAGgBIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIAAADIgBADIAAAog");
	this.shape_366.setTransform(-4.1,-93.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgKAzQgKgDgIgHQgHgHgEgKQgEgKAAgNQAAgQAHgMQAHgMANgIQANgGARgBQAKAAAGACIALADIgEALIgKgDIgNgBQgOAAgIAFQgKAFgFAKQgGAKABAMQAAAOAEAJQAGAKAJAGQAJAEAMAAIAMAAIAGgDIAAggIgWAAIAAgKIAkAAIAAAzIgNAEQgJACgLAAQgLAAgKgEg");
	this.shape_367.setTransform(-12.5,-95.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_368.setTransform(-25,-93.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgRA8IAIgCQAEgCADgCIACgGIACgJIAAgOIAAhAIAPAAIAABFQAAALgCAIQgCAIgGAFIgHAFIgIADIgIABgAADg3QgCgCgBgEQABgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_369.setTransform(-31.4,-93.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAsg");
	this.shape_370.setTransform(-37,-93.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_371.setTransform(-43.3,-95.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AAaA2Iggg2IgMgSIgJgSIgBAAIABAVIABAXIAAAuIgNAAIAAhrIAPAAIAhA2IALASIAJARIAAgBIgBgVIgBgVIAAguIAOAAIAABrg");
	this.shape_372.setTransform(-50.5,-95.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAAog");
	this.shape_373.setTransform(-61.3,-93.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_374.setTransform(-68.4,-93.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_375.setTransform(-76.7,-95.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAtIADAJIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAWIgHAPQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_376.setTransform(-85.3,-92.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgIQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_377.setTransform(-93.7,-95.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AAFBBQgFgHgEgJQgFgJgDgMQgDgMAAgQQAAgPADgMQADgMAFgJQAEgKAFgGIALAAQgJALgFAQQgFAQAAAVQAAAVAFAQQAFAQAJAMg");
	this.shape_378.setTransform(-100.3,-94.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgKAzQgLgDgHgHQgHgHgEgKQgEgKAAgNQAAgQAHgMQAHgMANgIQANgGARgBQAKAAAGACIALADIgEALIgKgDIgNgBQgOAAgIAFQgJAFgGAKQgGAKABAMQAAAOAEAJQAGAKAJAGQAJAEAMAAIAMAAIAGgDIAAggIgVAAIAAgKIAjAAIAAAzIgNAEQgJACgLAAQgLAAgKgEg");
	this.shape_379.setTransform(-111.6,-95.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AAaA2Iggg2IgMgSIgJgSIgBAAIABAVIABAXIAAAuIgOAAIAAhrIAQAAIAiA2IAKASIAJARIAAgBIgBgVIAAgVIAAguIAMAAIAABrg");
	this.shape_380.setTransform(-121.9,-95.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgIQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_381.setTransform(-131.8,-95.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_382.setTransform(142.3,-117);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_383.setTransform(135.1,-115.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAKAAQAHAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgGAEgJABQgKgBgHgFgAgKgHQgFAEgEAFQgCAHAAAJQAAAHACAHQADAHAFAEQAFADAGAAQAIABAGgFQAFgEADgJIAAgDIAAgCIAAgOIAAgDIAAgDQgDgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_384.setTransform(122.6,-116.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACIgKAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_385.setTransform(114.3,-115.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_386.setTransform(106.6,-115.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AAaA2IAAgyIgzAAIAAAyIgOAAIAAhrIAOAAIAAAtIAzAAIAAgtIAOAAIAABrg");
	this.shape_387.setTransform(97.4,-116.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_388.setTransform(86.9,-116.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_389.setTransform(80.6,-116.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAKgFALAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgLAAgIgFg");
	this.shape_390.setTransform(72.6,-115.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_391.setTransform(67.1,-116.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACIgKAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_392.setTransform(61.2,-115.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_393.setTransform(52.5,-116.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_394.setTransform(39.5,-115.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_395.setTransform(31,-116.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AABAxQgDgBgCgDQgDgEgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgHABQgGAAgDgCg");
	this.shape_396.setTransform(23.9,-116.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_397.setTransform(11.2,-115.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgEgDQgEgDgHAAQgGAAgFACIgJAEIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_398.setTransform(0.5,-115.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_399.setTransform(-8.5,-116.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgGAIQgDgDAAgFQAAgDADgDQACgDAEAAQAEAAACADQADADABADQAAAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_400.setTransform(-15.3,-112.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACIgJAEIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_401.setTransform(-21.1,-115.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgRA8IAJgCQAEgCACgCIADgGIABgJIAAgOIAAhAIAPAAIAABFQAAALgDAIQgBAIgGAFIgHAFIgHADIgJABgAADg3QgCgCAAgEQAAgEACgCQADgDAEAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAQgEAAgDgDg");
	this.shape_402.setTransform(-27.6,-115);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_403.setTransform(-33.2,-115.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_404.setTransform(-39.5,-116.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AAaA2Ighg2IgLgSIgJgSIgBAAIABAVIABAXIAAAuIgNAAIAAhrIAPAAIAhA2IALASIAJARIAAgBIgBgVIgBgWIAAgtIAOAAIAABrg");
	this.shape_405.setTransform(-46.6,-116.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_406.setTransform(-54.3,-115.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_407.setTransform(-58.7,-116.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_408.setTransform(-68.4,-115.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_409.setTransform(-75.4,-116.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_410.setTransform(-85.4,-115.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_411.setTransform(-96.1,-115.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_412.setTransform(-107.2,-115.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_413.setTransform(-115.1,-115.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_414.setTransform(-120.7,-116.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_415.setTransform(-126.5,-115.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AAVA2IgOg3IgEgTIgDgRIAAAAIgDARIgFATIgPA3IgPAAIgbhrIAPAAIANA1IAEAVIAEARIAEgRIAFgVIAOg1IAOAAIANA2IAEATIADASIABAAIAEgSIAEgUIAPg1IAOAAIgfBrg");
	this.shape_416.setTransform(-137.3,-116.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text01_Anim01, new cjs.Rectangle(-152.6,-128.5,305.4,257), null);


(lib.Outercircle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.OuterCircle01();
	this.instance.parent = this;
	this.instance.setTransform(-382,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382,-325,764,650);


(lib.NinjaStand01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NinjaStanding2();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-314,203,628);


(lib.Next01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(6,1,1).p("ABnCuIjNiuIDNit");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(70,19,42,0)").s().p("AhmAAIDNitIAAFbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-20.4,26.6,40.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// png logo
	this.instance = new lib.logo_medium();
	this.instance.parent = this;
	this.instance.setTransform(-238,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-238.8,-76.4,486.2,158.4), null);


(lib.Innercircle01_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.InnerCircle01();
	this.instance.parent = this;
	this.instance.setTransform(-257,-257.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257,-257.5,514,515);


(lib.Circle02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Circle2_Splash01();
	this.instance.parent = this;
	this.instance.setTransform(-308,-295.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Circle02, new cjs.Rectangle(-308,-295.5,616,591), null);


(lib.Circle01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Circle_Splash01();
	this.instance.parent = this;
	this.instance.setTransform(-507,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Circle01, new cjs.Rectangle(-507,-119,1014,238), null);


(lib.bgimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackGround_Splash();
	this.instance.parent = this;
	this.instance.setTransform(-507,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgimage, new cjs.Rectangle(-507,-325,1014,650), null);


(lib.bg_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Splash_sfs_Music");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Back01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(6,1,1).p("AhmCuIDNiuIjNit");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(70,19,42,0)").s().p("AhmitIDNCtIjNCug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-20.4,26.6,40.8);


(lib.Balckpatch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhPNAyyMAAAhljMCebAAAMAAABljg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Balckpatch, new cjs.Rectangle(-507,-325,1014,650), null);


(lib.AccecptMissionBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAWBcIgrhzIACAOIAABlIgaAAIAAi3IAXAAIArBwQgCgIAAgFIAAhjIAbAAIAAC3g");
	this.shape.setTransform(62.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgdBcQgQAAAAgRIAAiVQAAgRAQAAIA7AAQAQAAAAARIAACVQAAARgQAAgAgSBEIAlAAIAAiHIglAAg");
	this.shape_1.setTransform(50.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgNBcIAAi3IAbAAIAAC3g");
	this.shape_2.setTransform(42.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgbBcQgQAAAAgRIAAgsIAbAAIAAAmIAhAAIAAgkIg2gzQgGgGAAgJIAAgpQAAgRAQAAIA3AAQAQAAAAARIAAApIgbAAIAAgjIghAAIAAAiIA2AyQAGAGAAAJIAAAsQAAARgQAAg");
	this.shape_3.setTransform(34.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgbBcQgQAAAAgRIAAgsIAbAAIAAAmIAhAAIAAgkIg2gzQgGgGAAgJIAAgpQAAgRAQAAIA3AAQAQAAAAARIAAApIgbAAIAAgjIghAAIAAAiIA2AyQAGAGAAAJIAAAsQAAARgQAAg");
	this.shape_4.setTransform(23.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgNBcIAAi3IAbAAIAAC3g");
	this.shape_5.setTransform(15.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AAdBcIAAhbIACgTIgYBdIgNAAIgYhdIACATIAABbIgbAAIAAi3IAaAAIAdBlIAAAIIAAgIIAehlIAZAAIAAC3g");
	this.shape_6.setTransform(6.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgNBcIAAieIgeAAIAAgZIBXAAIAAAZIgeAAIAACeg");
	this.shape_7.setTransform(-9.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgrBcIAAi3IBHAAQAQAAAAARIAABSQAAARgQAAIgsAAIAABDgAgQACIAhAAIAAhFIghAAg");
	this.shape_8.setTransform(-19.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AglBcIAAi3IBLAAIAAAZIgwAAIAAA1IApAAIAAAXIgpAAIAAA5IAwAAIAAAZg");
	this.shape_9.setTransform(-29.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgcBcQgQAAAAgRIAAiVQAAgRAQAAIA4AAQARAAAAARIAAArIgbAAIAAgkIgjAAIAACHIAjAAIAAgmIAbAAIAAAtQAAARgRAAg");
	this.shape_10.setTransform(-40.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgcBcQgQAAAAgRIAAiVQAAgRAQAAIA4AAQARAAAAARIAAArIgbAAIAAgkIgjAAIAACHIAjAAIAAgmIAbAAIAAAtQAAARgRAAg");
	this.shape_11.setTransform(-51.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AAXBcIgGgjIghAAIgGAjIgbAAIAAgBIAki2IAbAAIAkC3gAgNAhIAaAAIgNhRg");
	this.shape_12.setTransform(-62.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("Ar7CbIAAk1IX3AAIAAE1g");
	this.shape_13.setTransform(-1.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-15.9,140.3,32);


(lib.AccecpetMissionLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ButtonLine();
	this.instance.parent = this;
	this.instance.setTransform(-170,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AccecpetMissionLine, new cjs.Rectangle(-170,-29.5,340,59), null);


(lib.Text03_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btn3_nxt = new lib.Back01();
	this.btn3_nxt.parent = this;
	this.btn3_nxt.setTransform(184.5,0);
	new cjs.ButtonHelper(this.btn3_nxt, 0, 1, 2, false, new lib.Back01(), 3);

	this.btn3_prev = new lib.Next01();
	this.btn3_prev.parent = this;
	this.btn3_prev.setTransform(-183.8,0);
	new cjs.ButtonHelper(this.btn3_prev, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3_prev},{t:this.btn3_nxt}]}).wait(2));

	// Layer 1
	this.instance = new lib.Text03_Anim03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-32.9,394.9,65.8);


(lib.Text02_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btn2_prev = new lib.Next01();
	this.btn2_prev.parent = this;
	this.btn2_prev.setTransform(-183.8,0);
	new cjs.ButtonHelper(this.btn2_prev, 0, 1, 1);

	this.btn2_nxt = new lib.Back01();
	this.btn2_nxt.parent = this;
	this.btn2_nxt.setTransform(185.2,0);
	new cjs.ButtonHelper(this.btn2_nxt, 0, 1, 2, false, new lib.Back01(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn2_nxt},{t:this.btn2_prev}]}).wait(2));

	// Layer 1
	this.instance = new lib.Text02_Anim02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-64.7,395.6,129.5);


(lib.Text01_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btn1 = new lib.Back01();
	this.btn1.parent = this;
	this.btn1.setTransform(185.2,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Back01(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(2));

	// Layer 1
	this.instance = new lib.Text01_Anim01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.6,-128.5,351.2,257);


// stage content:
(lib.splash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{next_mc:83});

	// timeline functions:
	this.frame_0 = function() {
		var that=this;
		this["btn1"].addEventListener('click', function(){that.methods.btnClicked()});
		this.text2_mc.visible=false;
		this.text3_mc.visible=false;
		this.text1_mc.btn1.addEventListener('click', function(){
			that.text1_mc.visible=false;
			that.text2_mc.visible=true;
			});
		this.text2_mc.btn2_nxt.addEventListener('click', function(){
			that.text2_mc.visible=false;
			that.text3_mc.visible=true;
			});
		this.text2_mc.btn2_prev.addEventListener('click', function(){
			that.text2_mc.visible=false;
			that.text1_mc.visible=true;
			});
		this.text3_mc.btn3_nxt.addEventListener('click', function(){
			that.methods.gotoMap()
			});
		this.text3_mc.btn3_prev.addEventListener('click', function(){
			that.text3_mc.visible=false;
			that.text2_mc.visible=true;
			});
	}
	this.frame_11 = function() {
		playSound("Splash_sfx01");
	}
	this.frame_27 = function() {
		playSound("Splash_sfx02");
	}
	this.frame_44 = function() {
		playSound("Splash_sfx03");
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		playSound("Splash_sfx04");
	}
	this.frame_114 = function() {
		playSound("Splash_sfx05");
	}
	this.frame_160 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(16).call(this.frame_27).wait(17).call(this.frame_44).wait(16).call(this.frame_60).wait(28).call(this.frame_88).wait(26).call(this.frame_114).wait(46).call(this.frame_160).wait(1));

	// audio
	this.instance = new lib.bg_music();
	this.instance.parent = this;
	this.instance.setTransform(18.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-223.1,440);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({x:278.9},3,cjs.Ease.get(-1)).to({x:238.9},3).wait(83).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:95.6,y:41.8},5,cjs.Ease.get(1)).wait(40));

	// Text03
	this.text3_mc = new lib.Text03_MC();
	this.text3_mc.parent = this;
	this.text3_mc.setTransform(507,323.6);
	this.text3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text3_mc).wait(138).to({_off:false},0).wait(23));

	// Text02
	this.text2_mc = new lib.Text02_MC();
	this.text2_mc.parent = this;
	this.text2_mc.setTransform(507,323.6);
	this.text2_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text2_mc).wait(138).to({_off:false},0).wait(23));

	// Text01
	this.text = new cjs.Text("", "9px 'MyriadPro-Regular'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(-61.8,252.5);

	this.text1_mc = new lib.Text01_MC();
	this.text1_mc.parent = this;
	this.text1_mc.setTransform(507,323.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text1_mc},{t:this.text}]},138).wait(23));

	// Layer 10
	this.instance_2 = new lib.Title();
	this.instance_2.parent = this;
	this.instance_2.setTransform(507,95.9);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({y:165.9,alpha:1},3).to({y:155.9},3).wait(25));

	// Layer 9
	this.instance_3 = new lib.NinjaStand01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.5,484);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({x:246.5,alpha:1},4).to({x:226.5},4).wait(34));

	// logo
	this.instance_4 = new lib.Innercircle01_MC("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(506.2,324.9,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:507,y:324.5},5).to({scaleX:1,scaleY:1},5).wait(35));

	// Layer 6
	this.btn1 = new lib.AccecptMissionBtn();
	this.btn1.parent = this;
	this.btn1.setTransform(865.8,544.2);
	this.btn1._off = true;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.AccecptMissionBtn(), 3);

	this.instance_5 = new lib.Outercircle_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(506,325,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_5.alpha = 0.762;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(60).to({_off:false},0).wait(41).to({y:464.2,alpha:0},5).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(116).to({_off:false},0).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).wait(35));

	// Layer 8
	this.instance_6 = new lib.AccecpetMissionLine();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1146.8,568.7,0.041,1,0,0,0,142.3,2.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).to({regX:142.8,scaleX:1.7,x:959.9},4).to({regY:2.3,scaleX:0.65,x:981.9,y:568.8},3).to({regY:2.2,scaleX:1,x:959.8,y:568.7},4).wait(49).to({regY:2.3,scaleX:0.65,x:981.9,y:568.8},4).to({regY:2.2,scaleX:1.7,x:959.9,y:568.7},3).to({regX:142.3,scaleX:0.04,x:1146.8},4).to({_off:true},1).wait(46));

	// Layer 1
	this.instance_7 = new lib.NinjaAppear0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(325,-100);

	this.instance_8 = new lib.NinjaAppear0002();
	this.instance_8.parent = this;
	this.instance_8.setTransform(325,-100);

	this.instance_9 = new lib.NinjaAppear0003();
	this.instance_9.parent = this;
	this.instance_9.setTransform(325,-100);

	this.instance_10 = new lib.NinjaAppear0004();
	this.instance_10.parent = this;
	this.instance_10.setTransform(325,-100);

	this.instance_11 = new lib.NinjaAppear0005();
	this.instance_11.parent = this;
	this.instance_11.setTransform(325,-100);

	this.instance_12 = new lib.NinjaAppear0006();
	this.instance_12.parent = this;
	this.instance_12.setTransform(325,-100);

	this.instance_13 = new lib.NinjaAppear0007();
	this.instance_13.parent = this;
	this.instance_13.setTransform(325,-100);

	this.instance_14 = new lib.NinjaAppear0008();
	this.instance_14.parent = this;
	this.instance_14.setTransform(325,-100);

	this.instance_15 = new lib.NinjaAppear0009();
	this.instance_15.parent = this;
	this.instance_15.setTransform(325,-100);

	this.instance_16 = new lib.NinjaAppear0010();
	this.instance_16.parent = this;
	this.instance_16.setTransform(325,-100);

	this.instance_17 = new lib.NinjaAppear0011();
	this.instance_17.parent = this;
	this.instance_17.setTransform(325,-100);

	this.instance_18 = new lib.NinjaAppear0012();
	this.instance_18.parent = this;
	this.instance_18.setTransform(325,-100);

	this.instance_19 = new lib.NinjaAppear0013();
	this.instance_19.parent = this;
	this.instance_19.setTransform(325,-100);

	this.instance_20 = new lib.NinjaAppear0014();
	this.instance_20.parent = this;
	this.instance_20.setTransform(325,-100);

	this.instance_21 = new lib.NinjaAppear0015();
	this.instance_21.parent = this;
	this.instance_21.setTransform(325,-100);

	this.instance_22 = new lib.NinjaAppear0016();
	this.instance_22.parent = this;
	this.instance_22.setTransform(325,-100);

	this.instance_23 = new lib.NinjaAppear0017();
	this.instance_23.parent = this;
	this.instance_23.setTransform(325,-100);

	this.instance_24 = new lib.NinjaAppear0018();
	this.instance_24.parent = this;
	this.instance_24.setTransform(325,-100);

	this.instance_25 = new lib.NinjaAppear0019();
	this.instance_25.parent = this;
	this.instance_25.setTransform(325,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},12).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},53).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).wait(60));

	// Layer 7
	this.instance_26 = new lib.Circle02();
	this.instance_26.parent = this;
	this.instance_26.setTransform(470,354.5);
	this.instance_26.alpha = 0;
	this.instance_26.compositeOperation = "lighter";
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(25).to({_off:false},0).to({alpha:1},5).wait(53).to({_off:true},39).wait(39));

	// Layer 2
	this.instance_27 = new lib.Balckpatch();
	this.instance_27.parent = this;
	this.instance_27.setTransform(507,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({alpha:0},7).to({_off:true},1).wait(153));

	// Circle01
	this.instance_28 = new lib.Circle01();
	this.instance_28.parent = this;
	this.instance_28.setTransform(507,533,1.1,1.1);
	this.instance_28.alpha = 0;
	this.instance_28.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:1,scaleY:1,alpha:0.441},11).wait(150));

	// Bg
	this.instance_29 = new lib.bgimage();
	this.instance_29.parent = this;
	this.instance_29.setTransform(507,325,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(152));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(456.3,292.5,1115.4,715);
// library properties:
lib.properties = {
	width: 1014,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Splash_atlas_.png", id:"Splash_atlas_"},
		{src:"images/Splash_atlas_2.png", id:"Splash_atlas_2"},
		{src:"images/Splash_atlas_3.png", id:"Splash_atlas_3"},
		{src:"images/Splash_atlas_4.png", id:"Splash_atlas_4"},
		{src:"sounds/Splash_sfs_Music.mp3", id:"Splash_sfs_Music"},
		{src:"sounds/Splash_sfx01.mp3", id:"Splash_sfx01"},
		{src:"sounds/Splash_sfx02.mp3", id:"Splash_sfx02"},
		{src:"sounds/Splash_sfx03.mp3", id:"Splash_sfx03"},
		{src:"sounds/Splash_sfx04.mp3", id:"Splash_sfx04"},
		{src:"sounds/Splash_sfx05.mp3", id:"Splash_sfx05"}
	],
	preloads: []
};


return lib;
}