var MAP  = function() {
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



(lib.BG_map = function() {
	this.initialize(img.BG_map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1014,650);


(lib.map_marker_active = function() {
	this.initialize(img.map_marker_active);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.map_marker_locked = function() {
	this.initialize(img.map_marker_locked);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.map_marker_visited = function() {
	this.initialize(img.map_marker_visited);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.txt_Sydney = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape.setTransform(44.7,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIAKAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_1.setTransform(37,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_2.setTransform(29.4,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgVArIAAhUIAMAAIAAACIAKgCIALgBQALAAAAAKIAAATIgMAAIAAgSIgUABIAABJg");
	this.shape_3.setTransform(21.2,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_4.setTransform(13,28.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgTBAQgFgFABgHIAAgzQgBgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_5.setTransform(-1.1,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape_6.setTransform(-9.8,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AALBFIgWgsIAAAsIgMAAIAAiJIAMAAIAABXIAVgjIAMAAIAAABIgYAkIAaAwg");
	this.shape_7.setTransform(-17.8,28.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_8.setTransform(-26.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAUBFIgkhkIAABkIgLAAIAAiJIAJAAIAjBjIAAhjIALAAIAACJg");
	this.shape_9.setTransform(-35.8,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_10.setTransform(45.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgJBzIAAhZQgCgLgEgNIgIgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_11.setTransform(24.7,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AglBzIAAjlIBKAAIAAASIg1AAIAABWIAwAAIAAARIgwAAIAABaIA2AAIAAASg");
	this.shape_12.setTransform(11.7,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_13.setTransform(-2.4,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AguBzIAAjlIAzAAQASAAAMAMQAMALAAATIAACRQAAASgMAMQgMAMgSAAgAgaBhIAaAAQAMgBAHgGQAIgHAAgMIAAiNQAAgMgHgGQgIgIgLAAIgbAAg");
	this.shape_14.setTransform(-17.4,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgJBzIAAhZQgCgLgFgNIgHgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_15.setTransform(-31.8,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgbBzQgIAAgFgFQgEgFAAgHIAAg6IAUAAIAAA5IAxAAIAAg3Ig+hMQgHgIAAgJIAAguQAAgIAEgEQAFgEAIgBIA4AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgxAAIAAAwIA/BMQAGAIAAAJIAAA1QAAAHgEAFQgFAFgHAAg");
	this.shape_16.setTransform(-45.9,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape_17.setTransform(44.7,28.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIAKAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_18.setTransform(37,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_19.setTransform(29.4,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AgVArIAAhUIAMAAIAAACIAKgCIALgBQALAAAAAKIAAATIgMAAIAAgSIgUABIAABJg");
	this.shape_20.setTransform(21.2,31.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_21.setTransform(13,28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgTBAQgFgFABgHIAAgzQgBgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_22.setTransform(-1.1,29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape_23.setTransform(-9.8,31.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AALBFIgWgsIAAAsIgMAAIAAiJIAMAAIAABXIAVgjIAMAAIAAABIgYAkIAaAwg");
	this.shape_24.setTransform(-17.8,28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_25.setTransform(-26.5,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AAUBFIgkhkIAABkIgLAAIAAiJIAJAAIAjBjIAAhjIALAAIAACJg");
	this.shape_26.setTransform(-35.8,28.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_27.setTransform(45.7,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AgJBzIAAhZQgCgLgEgNIgIgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_28.setTransform(24.7,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AglBzIAAjlIBKAAIAAASIg1AAIAABWIAwAAIAAARIgwAAIAABaIA2AAIAAASg");
	this.shape_29.setTransform(11.7,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_30.setTransform(-2.4,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AguBzIAAjlIAzAAQASAAAMAMQAMALAAATIAACRQAAASgMAMQgMAMgSAAgAgaBhIAaAAQAMgBAHgGQAIgHAAgMIAAiNQAAgMgHgGQgIgIgLAAIgbAAg");
	this.shape_31.setTransform(-17.4,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgJBzIAAhZQgCgLgFgNIgHgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_32.setTransform(-31.8,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgbBzQgIAAgFgFQgEgFAAgHIAAg6IAUAAIAAA5IAxAAIAAg3Ig+hMQgHgIAAgJIAAguQAAgIAEgEQAFgEAIgBIA4AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgxAAIAAAwIA/BMQAGAIAAAJIAAA1QAAAHgEAFQgFAFgHAAg");
	this.shape_33.setTransform(-45.9,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FF00").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape_34.setTransform(44.7,28.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIAKAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_35.setTransform(37,30.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_36.setTransform(29.4,31.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FF00").s().p("AgVArIAAhUIAMAAIAAACIAKgCIALgBQALAAAAAKIAAATIgMAAIAAgSIgUABIAABJg");
	this.shape_37.setTransform(21.2,31.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FF00").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_38.setTransform(13,28.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FF00").s().p("AgTBAQgFgFABgHIAAgzQgBgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_39.setTransform(-1.1,29);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape_40.setTransform(-9.8,31.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FF00").s().p("AALBFIgWgsIAAAsIgMAAIAAiJIAMAAIAABXIAVgjIAMAAIAAABIgYAkIAaAwg");
	this.shape_41.setTransform(-17.8,28.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FF00").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_42.setTransform(-26.5,31.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FF00").s().p("AAUBFIgkhkIAABkIgLAAIAAiJIAJAAIAjBjIAAhjIALAAIAACJg");
	this.shape_43.setTransform(-35.8,28.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_44.setTransform(45.7,1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FF00").s().p("AgJBzIAAhZQgCgLgEgNIgIgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_45.setTransform(24.7,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FF00").s().p("AglBzIAAjlIBKAAIAAASIg1AAIAABWIAwAAIAAARIgwAAIAABaIA2AAIAAASg");
	this.shape_46.setTransform(11.7,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_47.setTransform(-2.4,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FF00").s().p("AguBzIAAjlIAzAAQASAAAMAMQAMALAAATIAACRQAAASgMAMQgMAMgSAAgAgaBhIAaAAQAMgBAHgGQAIgHAAgMIAAiNQAAgMgHgGQgIgIgLAAIgbAAg");
	this.shape_48.setTransform(-17.4,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("AgJBzIAAhZQgCgLgFgNIgHgVIgcheIAAgBIAVAAIAeByIAghyIAUAAIAAABIgcBeQgFANgJAgIAABZg");
	this.shape_49.setTransform(-31.8,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AgbBzQgIAAgFgFQgEgFAAgHIAAg6IAUAAIAAA5IAxAAIAAg3Ig+hMQgHgIAAgJIAAguQAAgIAEgEQAFgEAIgBIA4AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgxAAIAAAwIA/BMQAGAIAAAJIAAA1QAAAHgEAFQgFAFgHAAg");
	this.shape_50.setTransform(-45.9,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

	// Layer 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#001C31").s().p("AngCCIAAkDIPAAAIAAEDg");
	this.shape_51.setTransform(5.3,29.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#001C31").s().p("Ar6CbIAAk1IX1AAIAAE1g");
	this.shape_52.setTransform(-0.1,0,0.695,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.4,-18.8,108.9,61.3);


(lib.txt_MissionMap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuDlIAAnJICzAAQAqAAAAAqIAADOQAAArgqAAIhuAAIAACmgAgpAEIBTAAIAAitIhTAAg");
	this.shape.setTransform(121.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4DlIgNhXIhVAAIgOBXIhEAAIAAAAIBZnKIBHAAIBZHKgAghBUIBCAAIghjOg");
	this.shape_1.setTransform(94.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJDlIAAjiQAAgRAEggIg7DpIgiAAIg8jpQAFAhAAAQIAADiIhCAAIAAnJIBBAAIBID8IAAAVIACgVIBIj8IBAAAIAAHJg");
	this.shape_2.setTransform(64.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA4DlIhtkfQAFAVAAAMIAAD+IhDAAIAAnJIA8AAIBtEZQgFgVAAgMIAAj4IBDAAIAAHJg");
	this.shape_3.setTransform(21,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJDlQgpAAgBgqIAAl1QABgqApAAICTAAQAqAAAAAqIAAF1QAAAqgqAAgAguCqIBdAAIAAlTIhdAAg");
	this.shape_4.setTransform(-7.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghDlIAAnJIBDAAIAAHJg");
	this.shape_5.setTransform(-28.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEDlQgpAAgBgqIAAhtIBFAAIAABeIBSAAIAAhaIiHiBQgPgPgBgWIAAhmQABgqApAAICIAAQArAAAAApIAABnIhGAAIAAhXIhSAAIAABTICICBQAQAOAAAXIAABtQAAAqgrAAg");
	this.shape_6.setTransform(-48.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFDlQgoAAAAgqIAAhtIBEAAIAABeIBTAAIAAhaIiJiBQgOgPAAgWIAAhmQAAgqAoAAICKAAQAqAAgBApIAABnIhEAAIAAhXIhTAAIAABTICJCBQAPAOgBAXIAABtQABAqgqAAg");
	this.shape_7.setTransform(-75.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiDlIAAnJIBEAAIAAHJg");
	this.shape_8.setTransform(-95.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABJDlIAAjiQAAgRAEggIg7DpIgiAAIg8jpQAFAhAAAQIAADiIhDAAIAAnJIBCAAIBID8IAAAVIACgVIBIj8IBAAAIAAHJg");
	this.shape_9.setTransform(-118.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-36.9,274.3,73.9);


(lib.txt_Jakarta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNA7IAJghIgWhUIANAAIANBDIAPhDIALAAIgUBUIgHAhg");
	this.shape.setTransform(53.7,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_1.setTransform(45.3,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXAiIAAggQgBgIAKgBIAbAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_2.setTransform(36.6,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAfArIAAhKIgZABIAABJIgLAAIAAhKIgZABIAABJIgMAAIAAhUIAMAAIAAACIAOgCIANgBQAFAAACADIAPgCIAPgBQAJAAAAAKIAABLg");
	this.shape_3.setTransform(26,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgNArQgLAAABgKIAAhBQgBgKALAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgMAgIAZAAIAAg/IgZAAg");
	this.shape_4.setTransform(15.3,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_5.setTransform(7.6,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgYA7IAAh1IANAAIAAADIAMgCIAOgBQAKAAAAAJIAAA5QgBAIgFAGQgFAFgHAAIgSAAIAAAggAgLgvIAAA/IAOAAQAKAAAAgJIAAg2g");
	this.shape_6.setTransform(0,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgNA7IAJghIgVhUIAMAAIAOBDIAOhDIALAAIgUBUIgIAhg");
	this.shape_7.setTransform(-8.5,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgVArIAAhUIALAAIAAACIALgCIAMgBQAJAAABAKIAAATIgMAAIAAgSIgVABIAABJg");
	this.shape_8.setTransform(-16.4,31.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgRBFQgEAAgDgDQgCgDgBgEIAAh1QABgEACgDQADgDAEAAIAiAAQAFAAADADQACADAAAEIAAAgIgMAAIAAgfIgdAAIAABzIAdAAIAAgiIAMAAIAAAjQAAAEgCADQgDADgFAAg");
	this.shape_9.setTransform(-25.4,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_10.setTransform(51.5,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_11.setTransform(30.3,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgJBzIAAjTIgkAAIAAgSIBbAAIAAASIgkAAIAADTg");
	this.shape_12.setTransform(17.2,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAbBzIgph6IACgFIAkAAIAAhUIg0AAIAADTIgUAAIAAjlIBMAAQAHABAFAEQAEAEAAAIIAABXQAAAPgWAAIgHAAIgGgBIAoBvg");
	this.shape_13.setTransform(3.9,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_14.setTransform(-10.8,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_15.setTransform(-23.7,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_16.setTransform(-38.4,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgaBzQgGAAgFgFQgFgFAAgHIAAg6IAVAAIAAA5IAsAAIAAjTIAUAAIAADUQAAAHgFAFQgEAFgHAAg");
	this.shape_17.setTransform(-52.5,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgNA7IAJghIgWhUIANAAIANBDIAPhDIALAAIgUBUIgHAhg");
	this.shape_18.setTransform(53.7,33.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_19.setTransform(45.3,31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AgXAiIAAggQgBgIAKgBIAbAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_20.setTransform(36.6,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AAfArIAAhKIgZABIAABJIgLAAIAAhKIgZABIAABJIgMAAIAAhUIAMAAIAAACIAOgCIANgBQAFAAACADIAPgCIAPgBQAJAAAAAKIAABLg");
	this.shape_21.setTransform(26,31.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgNArQgLAAABgKIAAhBQgBgKALAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgMAgIAZAAIAAg/IgZAAg");
	this.shape_22.setTransform(15.3,31.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_23.setTransform(7.6,30.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgYA7IAAh1IANAAIAAADIAMgCIAOgBQAKAAAAAJIAAA5QgBAIgFAGQgFAFgHAAIgSAAIAAAggAgLgvIAAA/IAOAAQAKAAAAgJIAAg2g");
	this.shape_24.setTransform(0,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgNA7IAJghIgVhUIAMAAIAOBDIAOhDIALAAIgUBUIgIAhg");
	this.shape_25.setTransform(-8.5,33.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgVArIAAhUIALAAIAAACIALgCIAMgBQAJAAABAKIAAATIgMAAIAAgSIgVABIAABJg");
	this.shape_26.setTransform(-16.4,31.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgRBFQgEAAgDgDQgCgDgBgEIAAh1QABgEACgDQADgDAEAAIAiAAQAFAAADADQACADAAAEIAAAgIgMAAIAAgfIgdAAIAABzIAdAAIAAgiIAMAAIAAAjQAAAEgCADQgDADgFAAg");
	this.shape_27.setTransform(-25.4,28.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_28.setTransform(51.3,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_29.setTransform(30.1,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgJBzIAAjTIgkAAIAAgSIBbAAIAAASIgjAAIAADTg");
	this.shape_30.setTransform(17,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AAbBzIgph6IACgFIAkAAIAAhUIg0AAIAADTIgUAAIAAjlIBMAAQAHABAFAEQAEAEAAAIIAABXQAAAPgWAAIgHAAIgGgBIAoBvg");
	this.shape_31.setTransform(3.7,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_32.setTransform(-11,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_33.setTransform(-23.9,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_34.setTransform(-38.6,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgaBzQgHAAgEgFQgFgFAAgHIAAg6IAUAAIAAA5IAsAAIAAjTIAVAAIAADUQAAAHgFAFQgEAFgHAAg");
	this.shape_35.setTransform(-52.7,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("AgNA7IAJghIgWhUIANAAIANBDIAPhDIALAAIgUBUIgHAhg");
	this.shape_36.setTransform(53.7,33.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_37.setTransform(45.3,31.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FF00").s().p("AgXAiIAAggQgBgIAKgBIAbAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_38.setTransform(36.6,31.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FF00").s().p("AAfArIAAhKIgZABIAABJIgLAAIAAhKIgZABIAABJIgMAAIAAhUIAMAAIAAACIAOgCIANgBQAFAAACADIAPgCIAPgBQAJAAAAAKIAABLg");
	this.shape_39.setTransform(26,31.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("AgNArQgLAAABgKIAAhBQgBgKALAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgMAgIAZAAIAAg/IgZAAg");
	this.shape_40.setTransform(15.3,31.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FF00").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_41.setTransform(7.6,30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FF00").s().p("AgYA7IAAh1IANAAIAAADIAMgCIAOgBQAKAAAAAJIAAA5QgBAIgFAGQgFAFgHAAIgSAAIAAAggAgLgvIAAA/IAOAAQAKAAAAgJIAAg2g");
	this.shape_42.setTransform(0,33.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FF00").s().p("AgNA7IAJghIgVhUIAMAAIAOBDIAOhDIALAAIgUBUIgIAhg");
	this.shape_43.setTransform(-8.5,33.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FF00").s().p("AgVArIAAhUIALAAIAAACIALgCIAMgBQAJAAABAKIAAATIgMAAIAAgSIgVABIAABJg");
	this.shape_44.setTransform(-16.4,31.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FF00").s().p("AgRBFQgEAAgDgDQgCgDgBgEIAAh1QABgEACgDQADgDAEAAIAiAAQAFAAADADQACADAAAEIAAAgIgMAAIAAgfIgdAAIAABzIAdAAIAAgiIAMAAIAAAjQAAAEgCADQgDADgFAAg");
	this.shape_45.setTransform(-25.4,28.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_46.setTransform(51.3,1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_47.setTransform(30.1,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FF00").s().p("AgJBzIAAjTIgkAAIAAgSIBbAAIAAASIgjAAIAADTg");
	this.shape_48.setTransform(17,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("AAbBzIgph6IACgFIAkAAIAAhUIg0AAIAADTIgUAAIAAjlIBMAAQAHABAFAEQAEAEAAAIIAABXQAAAPgWAAIgHAAIgGgBIAoBvg");
	this.shape_49.setTransform(3.7,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_50.setTransform(-11,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_51.setTransform(-23.9,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_52.setTransform(-38.6,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AgaBzQgHAAgEgFQgFgFAAgHIAAg6IAUAAIAAA5IAsAAIAAjTIAVAAIAADUQAAAHgFAFQgEAFgHAAg");
	this.shape_53.setTransform(-52.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

	// Layer 2
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#001C31").s().p("AngCCIAAkDIPAAAIAAEDg");
	this.shape_54.setTransform(13.3,29.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#001C31").s().p("Ar6CbIAAk1IX1AAIAAE1g");
	this.shape_55.setTransform(0,0,0.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-18.8,122.4,61.3);


(lib.txt_HongKong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape.setTransform(64.7,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_1.setTransform(56,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_2.setTransform(47.3,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQAAgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_3.setTransform(38.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgQBFQgEAAgDgDQgDgDAAgEIAAgjIAMAAIAAAiIAdAAIAAghIglgtQgEgEAAgGIAAgcQAAgEADgDQADgDAEAAIAiAAQAEAAACADQADADAAAEIAAAgIgMAAIAAgfIgdAAIAAAdIAlAtQAEAEAAAGIAAAgQAAAEgDADQgCADgEAAg");
	this.shape_4.setTransform(29.4,28.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_5.setTransform(21,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_6.setTransform(14,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgOArQgJAAgBgKIAAhBQABgKAJAAIAdAAQAKAAAAAKIAABBQAAAKgKAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_7.setTransform(6.4,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AARBFIAAhCIghAAIAABCIgMAAIAAiJIAMAAIAAA9IAhAAIAAg9IAMAAIAACJg");
	this.shape_8.setTransform(-3,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_9.setTransform(-16.8,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_10.setTransform(-24.4,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_11.setTransform(-33,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgLBMIAAgLIAMAAIAAhqIALAAIAABrQAAAKgKAAgAAAg8IAAgPIAMAAIAAAPg");
	this.shape_12.setTransform(-40.6,31.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_13.setTransform(-47,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgWArIAAhUIANAAIAAACIAKgCIALgBQALAAgBAKIAAATIgLAAIAAgSIgUABIAABJg");
	this.shape_14.setTransform(-55.1,31.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgaBFIAAiJIArAAQAFAAADADQACADAAAEIAAA+QAAAFgCACQgDADgFAAIgfAAIAAA3gAgOADIAdAAIAAg8IgdAAg");
	this.shape_15.setTransform(-63.9,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_16.setTransform(65.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_17.setTransform(50.1,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_18.setTransform(34.9,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_19.setTransform(21.3,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_20.setTransform(-1.6,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_21.setTransform(-16.6,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_22.setTransform(-31.8,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAbBzIAAhvIg2AAIAABvIgUAAIAAjlIAUAAIAABlIA2AAIAAhlIAVAAIAADlg");
	this.shape_23.setTransform(-47.1,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAkA8IhIg3IAAgJIBJg3IAAAUIg1AnIA1AoIAAAUg");
	this.shape_24.setTransform(-68.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape_25.setTransform(64.7,31.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_26.setTransform(56,31.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_27.setTransform(47.3,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQAAgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_28.setTransform(38.5,31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AgQBFQgEAAgDgDQgDgDAAgEIAAgjIAMAAIAAAiIAdAAIAAghIglgtQgEgEAAgGIAAgcQAAgEADgDQADgDAEAAIAiAAQAEAAACADQADADAAAEIAAAgIgMAAIAAgfIgdAAIAAAdIAlAtQAEAEAAAGIAAAgQAAAEgDADQgCADgEAAg");
	this.shape_29.setTransform(29.4,28.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_30.setTransform(21,30.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_31.setTransform(14,30.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgOArQgJAAgBgKIAAhBQABgKAJAAIAdAAQAKAAAAAKIAABBQAAAKgKAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_32.setTransform(6.4,31.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AARBFIAAhCIghAAIAABCIgMAAIAAiJIAMAAIAAA9IAhAAIAAg9IAMAAIAACJg");
	this.shape_33.setTransform(-3,28.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_34.setTransform(-16.8,30.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_35.setTransform(-24.4,31.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_36.setTransform(-33,31.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AgLBMIAAgLIAMAAIAAhqIALAAIAABrQAAAKgKAAgAAAg8IAAgPIAMAAIAAAPg");
	this.shape_37.setTransform(-40.6,31.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_38.setTransform(-47,31.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgWArIAAhUIANAAIAAACIAKgCIALgBQALAAgBAKIAAATIgLAAIAAgSIgUABIAABJg");
	this.shape_39.setTransform(-55.1,31.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AgaBFIAAiJIArAAQAFAAADADQACADAAAEIAAA+QAAAFgCACQgDADgFAAIgfAAIAAA3gAgOADIAdAAIAAg8IgdAAg");
	this.shape_40.setTransform(-63.9,28.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_41.setTransform(65.1,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_42.setTransform(50.1,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_43.setTransform(34.9,-0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_44.setTransform(21.3,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_45.setTransform(-1.6,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_46.setTransform(-16.6,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_47.setTransform(-31.8,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AAbBzIAAhvIg2AAIAABvIgUAAIAAjlIAUAAIAABlIA2AAIAAhlIAVAAIAADlg");
	this.shape_48.setTransform(-47.1,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AAkA8IhIg3IAAgJIBJg3IAAAUIg1AnIA1AoIAAAUg");
	this.shape_49.setTransform(-68.9,1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAYAAIAAgQIAMAAIAAAQQAAAKgKAAgAgMgGIAYAAIAAgaIgYAAg");
	this.shape_50.setTransform(64.7,31.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_51.setTransform(56,31.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AgXAiIAAhMIALAAIAABKIAZAAIAAhKIALAAIAABVIgLAAIAAgDIgNACIgOABQgJAAAAgJg");
	this.shape_52.setTransform(47.3,31.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQAAgKAKAAIAbAAQAKAAAAAKIAABLIgLAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_53.setTransform(38.5,31.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("AgQBFQgEAAgDgDQgDgDAAgEIAAgjIAMAAIAAAiIAdAAIAAghIglgtQgEgEAAgGIAAgcQAAgEADgDQADgDAEAAIAiAAQAEAAACADQADADAAAEIAAAgIgMAAIAAgfIgdAAIAAAdIAlAtQAEAEAAAGIAAAgQAAAEgDADQgCADgEAAg");
	this.shape_54.setTransform(29.4,28.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FF00").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_55.setTransform(21,30.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FF00").s().p("AACA4QgJAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAPAAIAAAKIgPAAIAAA/IAPAAIAAALg");
	this.shape_56.setTransform(14,30.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FF00").s().p("AgOArQgJAAgBgKIAAhBQABgKAJAAIAdAAQAKAAAAAKIAABBQAAAKgKAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_57.setTransform(6.4,31.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("AARBFIAAhCIghAAIAABCIgMAAIAAiJIAMAAIAAA9IAhAAIAAg9IAMAAIAACJg");
	this.shape_58.setTransform(-3,28.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_59.setTransform(-16.8,30.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAARIgMAAIAAgQIgXAAIAAA/IAXAAIAAgTIAMAAIAAAUQAAAKgKAAg");
	this.shape_60.setTransform(-24.4,31.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_61.setTransform(-33,31.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FF00").s().p("AgLBMIAAgLIAMAAIAAhqIALAAIAABrQAAAKgKAAgAAAg8IAAgPIAMAAIAAAPg");
	this.shape_62.setTransform(-40.6,31.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAcAAQAJAAAAAKIAABBQAAAKgJAAgAgLAgIAYAAIAAg/IgYAAg");
	this.shape_63.setTransform(-47,31.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FF00").s().p("AgWArIAAhUIANAAIAAACIAKgCIALgBQALAAgBAKIAAATIgLAAIAAgSIgUABIAABJg");
	this.shape_64.setTransform(-55.1,31.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FF00").s().p("AgaBFIAAiJIArAAQAFAAADADQACADAAAEIAAA+QAAAFgCACQgDADgFAAIgfAAIAAA3gAgOADIAdAAIAAg8IgdAAg");
	this.shape_65.setTransform(-63.9,28.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_66.setTransform(65.1,-0.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_67.setTransform(50.1,-0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_68.setTransform(34.9,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_69.setTransform(21.3,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_70.setTransform(-1.6,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_71.setTransform(-16.6,-0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_72.setTransform(-31.8,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FF00").s().p("AAbBzIAAhvIg2AAIAABvIgUAAIAAjlIAUAAIAABlIA2AAIAAhlIAVAAIAADlg");
	this.shape_73.setTransform(-47.1,-0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FF00").s().p("AAkA8IhIg3IAAgJIBJg3IAAAUIg1AnIA1AoIAAAUg");
	this.shape_74.setTransform(-68.9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

	// Layer 2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#001C31").s().p("Ar6CCIAAkDIX1AAIAAEDg");
	this.shape_75.setTransform(0,29.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#001C31").s().p("Ar6CbIAAk1IX1AAIAAE1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-18.8,152.6,61.3);


(lib.txt_completed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAOBzIAAg8IhAAAIAAgKIA3ifIATAAIAAABIgzCWIApAAIAAhSIATAAIAABSIASAAIAAASIgSAAIAAA8g");
	this.shape.setTransform(84.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ag5BzIAAgCIBgjjIATAAIAAABIhgDkg");
	this.shape_1.setTransform(72.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgFBzIAAieIgJAAIAAgBIANhGIAQAAIAADlg");
	this.shape_2.setTransform(62.4,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AguBzIAAjlIAzAAQASAAAMAMQAMALAAATIAACRQAAASgMAMQgMAMgSAAgAgaBhIAaAAQAMgBAHgGQAIgHAAgMIAAiNQAAgMgHgGQgIgIgLAAIgbAAg");
	this.shape_3.setTransform(47.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AglBzIAAjlIBJAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA3AAIAAASg");
	this.shape_4.setTransform(35.9,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AgJBzIAAjTIgkAAIAAgSIBbAAIAAASIgkAAIAADTg");
	this.shape_5.setTransform(25.2,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgkBzIAAjlIBIAAIAAASIg1AAIAABWIAxAAIAAARIgxAAIAABaIA2AAIAAASg");
	this.shape_6.setTransform(14.9,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AgjBzIAAjlIAUAAIAADTIA0AAIAAASg");
	this.shape_7.setTransform(4.7,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AgsBzIAAjlIBJAAQAHABAFAEQAEAEAAAIIAABoQAAAIgEAEQgFAFgHgBIg1AAIAABcgAgYAFIAxAAIAAhlIgxAAg");
	this.shape_8.setTransform(-6.7,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF00").s().p("AAmBzIAAiRIABgSIglCNIgDAAIgmiNIACASIAACRIgTAAIAAjlIATAAIAlCVIAAAGIABgGIAliVIATAAIAADlg");
	this.shape_9.setTransform(-20.6,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_10.setTransform(-34.8,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AgdBzQgHAAgEgFQgFgFAAgHIAAjDQAAgIAFgEQAEgEAHgBIA6AAQAIABAEAEQAFAEAAAIIAAA1IgVAAIAAg0IgyAAIAADBIAyAAIAAg5IAVAAIAAA6QAAAHgFAFQgEAFgIAAg");
	this.shape_11.setTransform(-47.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FF00").s().p("AAOBzIAAg8IhAAAIAAgKIA3ifIATAAIAAABIg0CWIAqAAIAAhSIATAAIAABSIARAAIAAASIgRAAIAAA8g");
	this.shape_12.setTransform(90.1,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FF00").s().p("AgtBzIAAgMIBGiQIAAg3IguAAIAAA0IgUAAIAAg1QgBgIAFgEQAEgEAIgBIA2AAQAHABAFAEQAEAEAAAIIAAAwQABAJgGALIg8B+IBBAAIAAASg");
	this.shape_13.setTransform(65.6,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FF00").s().p("AAOBzIAAg8Ig/AAIAAgKIA2ifIATAAIAAABIg0CWIAqAAIAAhSIATAAIAABSIASAAIAAASIgSAAIAAA8g");
	this.shape_14.setTransform(91.1,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FF00").s().p("AgdBzQgHAAgEgFQgFgFAAgHIAAg6IAUAAIAAA5IAyAAIAAhGIgngeIAAgEIAngeIAAg7IgxAAIAAA0IgVAAIAAg1QAAgIAFgEQAEgEAIgBIA5AAQAHABAFAEQAEAEAAAIIAAA3QAAAMgIAFIgcATIAcATQAJAGAAALIAABEQAAAHgFAFQgEAFgIAAg");
	this.shape_15.setTransform(66.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:72.4}},{t:this.shape,p:{x:84.6}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_13},{t:this.shape_1,p:{x:77.9}},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_15},{t:this.shape_1,p:{x:78.9}},{t:this.shape_14,p:{x:91.1}}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_14,p:{x:65.5}},{t:this.shape_1,p:{x:77.8}},{t:this.shape,p:{x:90}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-18.8,148.8,37.7);


(lib.txt_Bangkok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape.setTransform(50.7,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_1.setTransform(43,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_2.setTransform(35.4,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgTBAQgFgFAAgHIAAgzQAAgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_3.setTransform(26.6,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAMArIgMhAIgLBAIgLAAIgShVIAMAAIALBBIANhBIAJAAIANBBIALhBIALAAIgRBVg");
	this.shape_4.setTransform(11.2,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAXAAIAAgQIAMAAIAAAQQAAAKgKAAgAgLgGIAXAAIAAgaIgXAAg");
	this.shape_5.setTransform(1.3,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgFA8IAAhVIALAAIAABVgAgFgsIAAgOIALAAIAAAOg");
	this.shape_6.setTransform(-5.6,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgEArIgWhVIANAAIANBDIAPhDIALAAIgUBVg");
	this.shape_7.setTransform(-12.3,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_8.setTransform(-20.1,30.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_9.setTransform(-28.1,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgFBFIAAiJIALAAIAACJg");
	this.shape_10.setTransform(-35,28.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgMA7QgKAAAAgMIAAgFIAAgEIALAAIAAALIAYAAIAAgWIgSAAQgIAAgFgFQgFgGgBgIIAAgxQABgHAEgFQAFgFAIAAIATADIAAgDIALAAIAABrQABAKgKAAgAgMgmIAAAtQAAAJAKAAIAPAAIAAg/IgPgBQgKAAAAAKg");
	this.shape_11.setTransform(-42.1,33.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_12.setTransform(-50.8,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgVBFIAAiJIArAAIAAALIggAAIAAAzIAdAAIAAAKIgdAAIAAA2IAhAAIAAALg");
	this.shape_13.setTransform(-59.2,28.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAZAAIAAgQIALAAIAAAQQAAAKgKAAgAgMgGIAZAAIAAgaIgZAAg");
	this.shape_14.setTransform(-73.4,31.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape_15.setTransform(-82.2,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_16.setTransform(-90.6,28.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_17.setTransform(53.9,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_18.setTransform(33.8,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_19.setTransform(18.5,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_20.setTransform(4.9,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_21.setTransform(-10.2,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_22.setTransform(-25.2,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_23.setTransform(-39.8,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgtBzIAAjlIBKAAQAHABAFAEQAEAEAAAIIAABDQAAAJgIAHIgQAJIARAKQAIAFAAAKIAABOQAAAHgFAFQgEAFgHAAgAgZBhIAyAAIAAhQIgUgNIgeAAgAgZgNIAdAAIAVgNIAAhGIgyAAg");
	this.shape_24.setTransform(-54.1,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_25.setTransform(50.7,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_26.setTransform(43,30.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_27.setTransform(35.4,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AgTBAQgFgFAAgHIAAgzQAAgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_28.setTransform(26.6,29);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AAMArIgMhAIgLBAIgLAAIgShVIAMAAIALBBIANhBIAJAAIANBBIALhBIALAAIgRBVg");
	this.shape_29.setTransform(11.2,31.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAXAAIAAgQIAMAAIAAAQQAAAKgKAAgAgLgGIAXAAIAAgaIgXAAg");
	this.shape_30.setTransform(1.3,31.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgFA8IAAhVIALAAIAABVgAgFgsIAAgOIALAAIAAAOg");
	this.shape_31.setTransform(-5.6,29.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgEArIgWhVIANAAIANBDIAPhDIALAAIgUBVg");
	this.shape_32.setTransform(-12.3,31.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_33.setTransform(-20.1,30.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_34.setTransform(-28.1,31.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgFBFIAAiJIALAAIAACJg");
	this.shape_35.setTransform(-35,28.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgMA7QgKAAAAgMIAAgFIAAgEIALAAIAAALIAYAAIAAgWIgSAAQgIAAgFgFQgFgGgBgIIAAgxQABgHAEgFQAFgFAIAAIATADIAAgDIALAAIAABrQABAKgKAAgAgMgmIAAAtQAAAJAKAAIAPAAIAAg/IgPgBQgKAAAAAKg");
	this.shape_36.setTransform(-42.1,33.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_37.setTransform(-50.8,31.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgVBFIAAiJIArAAIAAALIggAAIAAAzIAdAAIAAAKIgdAAIAAA2IAhAAIAAALg");
	this.shape_38.setTransform(-59.2,28.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAZAAIAAgQIALAAIAAAQQAAAKgKAAgAgMgGIAZAAIAAgaIgZAAg");
	this.shape_39.setTransform(-73.4,31.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape_40.setTransform(-82.2,28.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_41.setTransform(-90.6,28.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_42.setTransform(53.9,1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_43.setTransform(33.8,-0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_44.setTransform(18.5,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_45.setTransform(4.9,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_46.setTransform(-10.2,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_47.setTransform(-25.2,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_48.setTransform(-39.8,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AgtBzIAAjlIBKAAQAHABAFAEQAEAEAAAIIAABDQAAAJgIAHIgQAJIARAKQAIAFAAAKIAABOQAAAHgFAFQgEAFgHAAgAgZBhIAyAAIAAhQIgUgNIgeAAgAgZgNIAdAAIAVgNIAAhGIgyAAg");
	this.shape_49.setTransform(-54.1,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_50.setTransform(50.7,31.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AABA4QgIAAAAgKIAAhAIgLAAIAAgKIALAAIAAgbIALAAIAAAbIAOAAIAAAKIgOAAIAAA/IAOAAIAAALg");
	this.shape_51.setTransform(43,30.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AgYAiIAAggQAAgIAKgBIAbAAIAAgaIgYAAIAAAPIgMAAIAAgOQABgKAJAAIAbAAQALAAAAAKIAABLIgMAAIAAgDIgNACIgOABQgKAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_52.setTransform(35.4,31.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AgTBAQgFgFAAgHIAAgzQAAgGAGgFQAFgGAIAAIASAAIAAg0IAMAAIAACJIgMAAIAAgDIgUADQgHAAgFgFgAgMADIAAAuQAAAKAKAAIAPgBIAAhAIgPAAQgKAAAAAJg");
	this.shape_53.setTransform(26.6,29);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("AAMArIgMhAIgLBAIgLAAIgShVIAMAAIALBBIANhBIAJAAIANBBIALhBIALAAIgRBVg");
	this.shape_54.setTransform(11.2,31.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAXAAIAAgQIAMAAIAAAQQAAAKgKAAgAgLgGIAXAAIAAgaIgXAAg");
	this.shape_55.setTransform(1.3,31.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FF00").s().p("AgFA8IAAhVIALAAIAABVgAgFgsIAAgOIALAAIAAAOg");
	this.shape_56.setTransform(-5.6,29.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FF00").s().p("AgEArIgWhVIANAAIANBDIAPhDIALAAIgUBVg");
	this.shape_57.setTransform(-12.3,31.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_58.setTransform(-20.1,30.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIgfAAIAAAfIAYAAIAAgQIALAAIAAAQQAAAKgKAAgAgLgGIAYAAIAAgaIgYAAg");
	this.shape_59.setTransform(-28.1,31.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FF00").s().p("AgFBFIAAiJIALAAIAACJg");
	this.shape_60.setTransform(-35,28.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FF00").s().p("AgMA7QgKAAAAgMIAAgFIAAgEIALAAIAAALIAYAAIAAgWIgSAAQgIAAgFgFQgFgGgBgIIAAgxQABgHAEgFQAFgFAIAAIATADIAAgDIALAAIAABrQABAKgKAAgAgMgmIAAAtQAAAJAKAAIAPAAIAAg/IgPgBQgKAAAAAKg");
	this.shape_61.setTransform(-42.1,33.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FF00").s().p("AgXAiIAAggQgBgIALgBIAaAAIAAgaIgYAAIAAAPIgLAAIAAgOQgBgKAKAAIAbAAQALAAgBAKIAABLIgLAAIAAgDIgNACIgOABQgJAAAAgJgAgMAhIAZgBIAAgfIgZAAg");
	this.shape_62.setTransform(-50.8,31.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FF00").s().p("AgVBFIAAiJIArAAIAAALIggAAIAAAzIAdAAIAAAKIgdAAIAAA2IAhAAIAAALg");
	this.shape_63.setTransform(-59.2,28.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FF00").s().p("AgNArQgKAAAAgKIAAhBQAAgKAKAAIAbAAQAKAAAAAKIAAAfIgEADIggAAIAAAfIAZAAIAAgQIALAAIAAAQQAAAKgKAAgAgMgGIAZAAIAAgaIgZAAg");
	this.shape_64.setTransform(-73.4,31.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FF00").s().p("AANBFIAAhKIgYAAIAABKIgNAAIAAiJIANAAIAAA3IAMgCIAOgBQAKAAAAAJIAABMg");
	this.shape_65.setTransform(-82.2,28.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FF00").s().p("AgFBFIAAh+IgWAAIAAgLIA2AAIAAALIgVAAIAAB+g");
	this.shape_66.setTransform(-90.6,28.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FF00").s().p("AgkAoIA1goIg1gnIAAgUIABAAIBIA3IAAAJIhJA3g");
	this.shape_67.setTransform(53.9,1.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_68.setTransform(33.8,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FF00").s().p("AgfBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA/AAQAHABAFAEQAEAEAAAIIAADDQAAAHgEAFQgFAFgHAAgAgbBhIA3AAIAAjBIg3AAg");
	this.shape_69.setTransform(18.5,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FF00").s().p("AAZBzIg0hvIAABvIgUAAIAAjlIAUAAIAABnIAvhnIAXAAIAAABIgzBtIA4B3g");
	this.shape_70.setTransform(4.9,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FF00").s().p("AgdBzQgHAAgFgFQgEgFAAgHIAAjDQAAgIAEgEQAFgEAHgBIA7AAQAHABAFAEQAEAEAAAIIAAA1IgUAAIAAg0IgzAAIAADBIAzAAIAAhQIgZAAIAAgRIAtAAIAABiQAAAHgEAFQgFAFgHAAg");
	this.shape_71.setTransform(-10.2,-0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FF00").s().p("AAhBzIg8ioIAACoIgTAAIAAjlIAPAAIA7ClIAAilIATAAIAADlg");
	this.shape_72.setTransform(-25.2,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FF00").s().p("AAfBzIgIgzIgtAAIgIAzIgUAAIAAAAIApjlIATAAIApDlgAgTAuIAnAAIgUh7g");
	this.shape_73.setTransform(-39.8,-0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FF00").s().p("AgtBzIAAjlIBKAAQAHABAFAEQAEAEAAAIIAABDQAAAJgIAHIgQAJIARAKQAIAFAAAKIAABOQAAAHgFAFQgEAFgHAAgAgZBhIAyAAIAAhQIgUgNIgeAAgAgZgNIAdAAIAVgNIAAhGIgyAAg");
	this.shape_74.setTransform(-54.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

	// Layer 2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#001C31").s().p("AsnCCIAAkDIZPAAIAAEDg");
	this.shape_75.setTransform(-19.5,29.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#001C31").s().p("ApiCbIAAk1ITFAAIAAE1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.3,-18.8,163,61.3);


(lib.text_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAACADQAEADAAADQgBAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(158.6,157.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_1.setTransform(153,154.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_2.setTransform(147.1,152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIAOAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgCgFgGgEQgFgEgHAAQgHAAgFAEg");
	this.shape_3.setTransform(140.9,152.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIgBAAIgFAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_4.setTransform(131.7,154.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_5.setTransform(122.9,154.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_6.setTransform(116.5,154.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AABAxQgDgCgCgCQgDgEgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgDIAAAVIAUAAIAAAMIgUAAIAAAoQgBAHADAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgHAAQgGABgDgCg");
	this.shape_7.setTransform(110.7,153.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_8.setTransform(101.5,154.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgFAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_9.setTransform(94,154.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_10.setTransform(85.1,154.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_11.setTransform(78.9,152.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAHgFAHABIACAAIABAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_12.setTransform(74.8,154.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_13.setTransform(67.7,154.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_14.setTransform(60.5,154.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_15.setTransform(50,154.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_16.setTransform(39.3,154);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_17.setTransform(28.2,154.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_18.setTransform(20.6,154.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AABAxQgDgCgCgCQgDgEgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgDIAAAVIAUAAIAAAMIgUAAIAAAoQgBAHADAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGABgDgCg");
	this.shape_19.setTransform(11.4,153.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_20.setTransform(5.1,154.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_21.setTransform(-2.6,154.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgkA3IAAhSIAAgOIAAgMIANAAIABAOQAEgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIAAAAIAAAqgAgMgmQgGAEgDAIIAAADIAAADIAAANIAAADIAAADQADAGAFAFQAGAEAHAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgEgEQgGgEgHAAQgHAAgFAFg");
	this.shape_22.setTransform(-10.9,155.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AATAnIgLgSIgEgGIgEgHIAAAAIgDAHIgFAGIgLASIgPAAIAbgnIgagmIAQAAIALARIAEAGIACAHIABAAIAEgHIAEgGIAKgRIAQAAIgbAmIAbAng");
	this.shape_23.setTransform(-19.4,154.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_24.setTransform(-27,154.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_25.setTransform(-38.9,154.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FFFF").s().p("AgOA2IgKgCIgIgEIAEgLQAFADAGACQAHACAHAAQAKAAAGgFQAFgFAAgIQABgIgFgEQgFgGgKgEQgNgEgIgHQgHgHAAgMQAAgHAEgIQAEgGAIgEQAIgDAKAAQAIgBAGACIAJADIgDAMIgIgDQgGgCgHAAQgGAAgFACQgEADgCADQgCAEAAAEQAAAHAFAFQAFAFAKAEQAOAFAHAHQAHAHAAAMQAAAIgEAHQgFAHgIAEQgIAFgMgBIgKgBg");
	this.shape_26.setTransform(-47.3,152.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAACADQAEADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_27.setTransform(-56.1,157.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_28.setTransform(-62.4,155.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_29.setTransform(-71.1,154.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_30.setTransform(-77.4,152.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_31.setTransform(-83.7,154.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_32.setTransform(-92.8,155.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_33.setTransform(-102.3,152.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_34.setTransform(-109.5,154.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_35.setTransform(-124,154);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_36.setTransform(-134.7,154.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_37.setTransform(-142.3,154.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgFAHABIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAADIAAApg");
	this.shape_38.setTransform(-148.4,154.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FFFF").s().p("AgTA1QgHgFgFgJQgEgJAAgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAALIAAAJIgMAAIAAgNIgBAAQgDAGgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAGABQAIgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgCgGgEgFQgGgEgIAAQgHAAgEAEg");
	this.shape_39.setTransform(-156.2,152.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_40.setTransform(160.4,134.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_41.setTransform(152,134.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_42.setTransform(144.3,134.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_43.setTransform(136.4,134.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgMQAAgMAGgJQAEgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAFQgHADgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAGAAQAIAAAGgEQAFgEACgJIABgCIAAgDIAAgOIAAgDIgBgDQgCgGgEgFQgGgEgIAAQgHAAgEAEg");
	this.shape_44.setTransform(124.3,133.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_45.setTransform(118.1,133.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_46.setTransform(111.8,135);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_47.setTransform(103,134.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_48.setTransform(95.2,134.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_49.setTransform(84.2,134.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_50.setTransform(77,134.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_51.setTransform(71.9,133.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_52.setTransform(66,134.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_53.setTransform(54.6,134.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAQAEgBAFACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_54.setTransform(46.1,134.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_55.setTransform(37.3,134.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_56.setTransform(25.1,134.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAIAJABQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_57.setTransform(16.2,134.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_58.setTransform(4.4,134.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgEAIAAIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_59.setTransform(-1.6,134.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_60.setTransform(-8.7,134.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_61.setTransform(-17.1,133.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_62.setTransform(-27.5,134.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_63.setTransform(-41.2,133.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_64.setTransform(-49.2,134.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_65.setTransform(-56.9,134.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_66.setTransform(-64.5,134.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAIAAIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBADIAAApg");
	this.shape_67.setTransform(-70.6,134.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_68.setTransform(-81.5,134.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGAAgDgBg");
	this.shape_69.setTransform(-88.4,133.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_70.setTransform(-98.4,134.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_71.setTransform(-104.4,133.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_72.setTransform(-110.5,133.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_73.setTransform(-119.4,134.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAIAJABQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_74.setTransform(-130.9,134.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_75.setTransform(-139.3,134.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_76.setTransform(-147.3,134.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00FFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgCgFgGgEQgFgEgHAAQgHAAgFAEg");
	this.shape_77.setTransform(-155.6,133.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_78.setTransform(188.6,115.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_79.setTransform(180.9,115.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_80.setTransform(173.2,115.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_81.setTransform(165.1,113.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_82.setTransform(154,115.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_83.setTransform(146.8,115.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FFFF").s().p("AgRA8IAJgCQADgCADgCIACgGIACgJIAAgOIAAhAIAPAAIAABFQAAALgCAIQgDAIgFAFIgHAFIgIADIgIABgAADg3QgCgCgBgEQABgEACgCQADgDAEAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAQgEAAgDgDg");
	this.shape_84.setTransform(140.4,115.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_85.setTransform(134.8,115.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_86.setTransform(128.5,114.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FFFF").s().p("AAbA2Ighg2IgLgSIgKgSIgBAAIACAVIAAAXIAAAuIgOAAIAAhrIAQAAIAiA2IAKASIAJARIAAgBIgBgUIAAgXIAAgtIAMAAIAABrg");
	this.shape_87.setTransform(121.2,114.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_88.setTransform(113.5,115.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_89.setTransform(109.1,114.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FFFF").s().p("AAuAIQgCgEAAgEQAAgDACgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDAEQgDACgEAAQgEAAgDgCgAgGAIQgDgEAAgEQAAgDADgDQADgDADAAQAEAAADADQACADAAADQAAAEgCAEQgDACgEAAQgEAAgCgCgAg7AIQgDgEAAgEQAAgDADgDQACgDAEAAQAFAAACADQADADAAADQAAAEgDAEQgCACgFAAQgEAAgCgCg");
	this.shape_90.setTransform(95.9,118.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_91.setTransform(84.9,115.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgFAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_92.setTransform(77.3,115.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_93.setTransform(68.5,115.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_94.setTransform(62.2,114.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBADIAAApg");
	this.shape_95.setTransform(58.1,115.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_96.setTransform(50.7,115.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_97.setTransform(44.4,113.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_98.setTransform(35,115.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_99.setTransform(30,114.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgMQAAgMAGgJQAEgJAIgFQAIgFAJAAQAIAAAGAEQAGADADAFIAAAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgGAEgJAAQgKAAgHgEgAgKgHQgFAEgEAFQgCAHAAAJQAAAIACAGQADAGAFAFQAFADAGAAQAIABAGgFQAFgEADgJIAAgDIAAgCIAAgOIAAgDIAAgDQgDgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_100.setTransform(20,113.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_101.setTransform(13.8,114.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_102.setTransform(7.5,115.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAFgEQAFgEAHgBIADAAIACABIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAADIAAApg");
	this.shape_103.setTransform(1.1,115.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_104.setTransform(-7,114.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00FFFF").s().p("AgGAIQgCgEgBgEQABgDACgDQACgDAEAAQAEAAADADQACADAAADQABAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_105.setTransform(-17.5,118.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBADIAAApg");
	this.shape_106.setTransform(-20.6,115.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_107.setTransform(-28.7,114.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_108.setTransform(-39.5,119.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_109.setTransform(-45.1,115.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_110.setTransform(-52.6,115.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_111.setTransform(-57.7,113.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00FFFF").s().p("AAfA2IgMgiIgmAAIgLAiIgOAAIAkhrIAQAAIAlBrgAAQAJIgLgeIgCgKIgDgJIAAAAIgCAJIgDAKIgKAeIAfAAg");
	this.shape_112.setTransform(-64.4,114.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00FFFF").s().p("AgGAIQgDgEAAgEQAAgDADgDQACgDAEAAQAEAAACADQADADABADQAAAEgDAEQgDACgEAAQgEAAgCgCg");
	this.shape_113.setTransform(-74.2,118.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_114.setTransform(-80.1,115.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgDgBgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_115.setTransform(-87,114.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_116.setTransform(-94.1,115.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_117.setTransform(-100.4,114.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgNAAIAAhxIANAAIAABHIABAAIAEgFIADgEIAVgaIARAAIgdAfIAiAug");
	this.shape_118.setTransform(-108.7,113.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_119.setTransform(-117.2,115.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_120.setTransform(-124.8,115.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBADIAAApg");
	this.shape_121.setTransform(-130.9,115.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgDAHIAAADIAAADIAAAOIAAACIAAADQADAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgGgEgHAAQgHAAgFAEg");
	this.shape_122.setTransform(-138.2,113.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_123.setTransform(-150.9,115.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGAAgDgBg");
	this.shape_124.setTransform(-157.8,114.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_125.setTransform(202.8,95.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_126.setTransform(197,96.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_127.setTransform(189.8,96.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_128.setTransform(183.9,94.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgOAAIAAhxIAOAAIAABHIABAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_129.setTransform(178.7,94.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_130.setTransform(170.8,96.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_131.setTransform(165.3,94.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgIAEgEQAHgEAHgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_132.setTransform(161.2,96.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_133.setTransform(155.4,95.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_134.setTransform(145.4,96.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_135.setTransform(137,94.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_136.setTransform(129.8,95.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_137.setTransform(119.8,96.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgDAHIAAADIAAADIAAAOIAAACIAAADQADAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgGgEgHAAQgHAAgFAEg");
	this.shape_138.setTransform(111.5,94.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_139.setTransform(98.9,96.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_140.setTransform(91.9,95.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_141.setTransform(81.4,96.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_142.setTransform(71.1,96.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_143.setTransform(60.9,96.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_144.setTransform(52,96.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgNAAIAAhxIANAAIAABHIABAAIAEgFIADgEIAVgaIARAAIgdAfIAiAug");
	this.shape_145.setTransform(44.3,94.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_146.setTransform(33.3,96.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_147.setTransform(28.2,94.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_148.setTransform(19.2,98.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_149.setTransform(11.4,96.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_150.setTransform(2.9,96.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgHAEgIABQgJgBgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAHAFAEQAFADAGAAQAIABAGgFQAFgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgCgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_151.setTransform(-6.2,94.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_152.setTransform(-14.1,98.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00FFFF").s().p("AgOA2IgKgCIgIgDIAEgMQAFADAGACQAHACAHAAQAKAAAGgFQAFgFAAgJQABgGgFgFQgFgFgKgFQgNgEgIgGQgHgIAAgMQAAgIAEgGQAEgHAIgDQAIgFAKAAQAIABAGABIAJAEIgDALIgIgDQgGgCgHAAQgGAAgFADQgEACgCADQgCAFAAADQAAAHAFAFQAFAFAKAEQAOAFAHAHQAHAHAAALQAAAJgEAHQgFAHgIAEQgIAFgMAAIgKgCg");
	this.shape_153.setTransform(-21.7,94.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_154.setTransform(-33.5,96.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_155.setTransform(-39.8,94.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_156.setTransform(-48.9,98.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgFAAgEgCg");
	this.shape_157.setTransform(-55.5,95.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_158.setTransform(-60,94.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_159.setTransform(-63.8,94.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_160.setTransform(-67.5,94.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_161.setTransform(-72.9,96.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACIgKAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_162.setTransform(-80.6,96.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_163.setTransform(-86.1,94.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgIABQgEAAgFgCg");
	this.shape_164.setTransform(-95,95.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_165.setTransform(-101.6,96.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgIAFgEQAGgEAGgBIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_166.setTransform(-107.6,96.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_167.setTransform(-114.2,96.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_168.setTransform(-121.8,96.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_169.setTransform(-129,96.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_170.setTransform(-134.6,95.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00FFFF").s().p("AgjA3IAAhSIAAgOIgBgMIANAAIAAAOQAFgHAHgEQAGgEAJAAQAJAAAIAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIgBAAIAAAqgAgNgmQgFAEgDAIIAAADIgBADIAAANIABADIAAADQACAGAGAFQAFAEAIAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_171.setTransform(-141.6,97.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_172.setTransform(-150.9,96.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_173.setTransform(-157.8,95.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_174.setTransform(169.7,77.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00FFFF").s().p("AgHAIIADgMIACgNIAOgCIgFAPIgFAMIgEALIgJABIAEgMg");
	this.shape_175.setTransform(166.2,72);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_176.setTransform(160,78.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_177.setTransform(151.4,77.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_178.setTransform(141.9,75.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_179.setTransform(133.9,76.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIAAAPIABAAQADgHAEgFQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAApg");
	this.shape_180.setTransform(129.3,77.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_181.setTransform(122.3,77.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00FFFF").s().p("AgMA2QgHgDgEgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAHAFQAHAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAGgIQAHgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_182.setTransform(114,75.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAtIADAJIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAWIgHAPQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_183.setTransform(105.4,78.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgIQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_184.setTransform(97.3,75.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00FFFF").s().p("AgGAIQgDgDABgFQgBgEADgCQADgDADAAQAEAAADADQACACABAEQgBAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_185.setTransform(87.7,80.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_186.setTransform(84.6,77.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_187.setTransform(77.5,77.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_188.setTransform(69.8,77.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_189.setTransform(61.6,77.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_190.setTransform(47.2,77);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_191.setTransform(36.1,77.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_192.setTransform(29.7,77.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_193.setTransform(24.7,75.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIAAAPIABAAQADgHAEgFQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAApg");
	this.shape_194.setTransform(16.4,77.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_195.setTransform(9.3,77.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_196.setTransform(3.7,75.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_197.setTransform(-5.6,77.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_198.setTransform(-10.7,75.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_199.setTransform(-20.4,77.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_200.setTransform(-29.3,77.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_201.setTransform(-35.5,75.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_202.setTransform(-40.6,77.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_203.setTransform(-46.9,77.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_204.setTransform(-52,75.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_205.setTransform(-60.5,77);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgEAHgBIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_206.setTransform(-72.8,77.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00FFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIgBAAIgFAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_207.setTransform(-80.2,77.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_208.setTransform(-89.1,77.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_209.setTransform(-98.6,81);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_210.setTransform(-103.1,77.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_211.setTransform(-110.8,77.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_212.setTransform(-119.6,77.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_213.setTransform(-125.9,75.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_214.setTransform(-130.4,76.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_215.setTransform(-137,77.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_216.setTransform(-144.2,77.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_217.setTransform(-152.3,77.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_218.setTransform(-158.6,75.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_219.setTransform(158.9,57.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_220.setTransform(150.9,57.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIAAADIgBAEIAAAng");
	this.shape_221.setTransform(144.8,57.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_222.setTransform(137.3,56.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgCgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQgBAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgHABQgGgBgDgBg");
	this.shape_223.setTransform(130.2,56.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_224.setTransform(117.5,57.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_225.setTransform(106.4,57.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAGgFAIAAIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBAEIAAAng");
	this.shape_226.setTransform(100,57.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_227.setTransform(95,56);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_228.setTransform(84.8,57.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_229.setTransform(78.5,56.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_230.setTransform(71.9,57.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgMQABgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgGAFgKAAQgJAAgHgGgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAHABQAHAAAFgFQAGgFADgHIAAgEIAAgCIAAgOIAAgDIAAgDQgDgFgFgFQgFgFgIAAQgGAAgGAEg");
	this.shape_231.setTransform(63.5,56.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_232.setTransform(51.8,57.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_233.setTransform(43.4,56.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQAAAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_234.setTransform(36.2,56.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgDQgCgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQAAAHADAEQADAEAFAAIAFAAIADgBIABALIgFABIgIABQgFgBgEgBg");
	this.shape_235.setTransform(27.5,56.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_236.setTransform(20.9,57.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_237.setTransform(12.2,59.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_238.setTransform(0.1,57.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgDgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_239.setTransform(-6.8,56.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgEgJAAgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAEQgHAFgIAAQgJAAgIgGgAgKgHQgGADgCAHQgDAGAAAJQAAAHADAHQACAHAFADQAFAEAGABQAIAAAFgFQAGgFACgHIABgEIAAgCIAAgOIAAgDIgBgDQgCgFgEgFQgGgFgIAAQgHAAgEAEg");
	this.shape_240.setTransform(-17.6,56.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_241.setTransform(-25.8,57.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_242.setTransform(-34.6,59.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_243.setTransform(-42.8,57.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_244.setTransform(-51,57.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_245.setTransform(-59.4,57.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_246.setTransform(-69.8,57.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_247.setTransform(-84.2,58);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_248.setTransform(-93.1,57.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAtIADAIIABAHIAAAAIADgHIACgIIAQgtIAOAAIgVA3IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_249.setTransform(-101.1,59.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_250.setTransform(-112.7,56.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_251.setTransform(-121.9,59.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQAEgCACgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_252.setTransform(-130.5,58);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_253.setTransform(-139.3,57.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_254.setTransform(-148.1,56.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00FFFF").s().p("AgGA2IAAhfIghAAIAAgMIBPAAIAAAMIghAAIAABfg");
	this.shape_255.setTransform(-156.5,56.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_256.setTransform(-104.2,42.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00FFFF").s().p("AgaA0IAshbIAAgBIgyAAIAAgLIBBAAIAAAJIgsBeg");
	this.shape_257.setTransform(-109.7,37.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00FFFF").s().p("AgVAzQgGgCgFgCIAEgLIAJAEQAGACAIAAQAFAAAGgDQAFgDADgFQAEgFAAgHQAAgKgHgGQgHgGgPAAIgIAAIgGABIAGgyIAxAAIAAAMIgmAAIgFAbIAFgBIAEAAIALABQAFACAGADQAGADAEAGQAEAHAAAKQAAAKgEAIQgGAIgJAEQgIAFgKAAQgJAAgHgCg");
	this.shape_258.setTransform(-118.2,37.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_259.setTransform(-129.5,38.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIAAgIgGgAgKgHQgGADgCAHQgDAGAAAJQAAAIADAGQACAGAFAEQAFAFAHAAQAHAAAFgFQAGgFACgHIABgEIAAgDIAAgNIAAgDIgBgDQgBgFgGgFQgFgFgIAAQgGAAgFAEg");
	this.shape_260.setTransform(-138.3,36.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_261.setTransform(-147,38.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgMQAHgNANgIQAMgGAQAAQAKAAAHABIAJADIgDALIgKgDQgFgBgHAAQgNAAgIAFQgKAFgFAKQgFALAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgCIADALIgLAEQgIABgKABQgOgBgMgGg");
	this.shape_262.setTransform(-155.8,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,22,40,0.6)").s().p("EgiSASIMAAAgkPMBElAAAMAAAAkPg");
	this.shape_263.setTransform(24,96);

	this.timeline.addTween(cjs.Tween.get(this.shape_263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-20,439,232);


(lib.text_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgGA0QgCgDAAgEQAAgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgAgEAWIgChMIANAAIgCBMg");
	this.shape.setTransform(71.2,143.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIAAQgFAAgEgBg");
	this.shape_1.setTransform(66.7,143.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIACAAIACABIAAANIgCgBIgCAAQgIABgFAEQgEAFgBAIIAAAEIgBADIAAApg");
	this.shape_2.setTransform(61.5,144.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_3.setTransform(54.4,144.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_4.setTransform(48.5,143.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_5.setTransform(42.6,144.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgMQAAgMAGgJQAEgJAIgFQAIgFAKAAQAHAAAGAEQAGADADAFIAAAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgGAEgJAAQgKAAgHgEgAgKgHQgFAEgEAFQgCAHAAAJQAAAIACAGQADAGAFAFQAFADAGAAQAIABAGgFQAFgEADgJIAAgCIAAgDIAAgOIAAgDIAAgDQgDgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_6.setTransform(30.8,143.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_7.setTransform(22,144.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_8.setTransform(13.6,144.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AAPA5IgZglIgIAIIAAAdIgNAAIAAhxIANAAIAABHIABAAIAEgFIADgEIAWgaIAQAAIgdAfIAiAug");
	this.shape_9.setTransform(3.4,143.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_10.setTransform(-4.5,144.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_11.setTransform(-10,143.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_12.setTransform(-16.3,145);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AAWA3IAAgrIgBAAQgDAGgGADQgHAEgIAAQgJAAgHgEQgIgFgEgJQgFgIABgMQAAgOAFgJQAFgKAJgEQAHgEAJAAQAHAAAGAEQAHADACAGIABgMIAOAAIgBAKIAAAMIAABWgAgLgnQgEADgDAHQgDAHAAAJQAAAHADAGQACAGAFAEQAFAEAHAAQAGAAAGgEQAFgEADgGIAAgDIABgEIAAgOIAAgDIgBgDQgBgHgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_13.setTransform(-25.4,146.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_14.setTransform(-37.1,144.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AgYA2IgJgBIAAhpIAMgBIANgBQAKAAAHACQAHACAFAEQAEADADAFQACAFAAAGQAAAIgFAGQgEAGgJAEQAFABAGADQAEADAEAFQADAGAAAIQAAAHgCAFQgDAGgEAEQgFAFgKACQgJADgMAAIgNgBgAgTArIAFABIAHAAQAHAAAGgCQAFgCAEgFQAEgEAAgIQAAgIgEgEQgDgFgGgCQgGgCgIAAIgLAAgAgOgrIgFABIAAAiIANAAQAKAAAGgFQAGgFAAgIQAAgJgHgEQgGgEgKAAIgHAAg");
	this.shape_15.setTransform(-45.2,143.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AgGAIQgCgEAAgEQAAgDACgDQADgDADAAQAEAAACADQAEADAAADQgBAEgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_16.setTransform(-54.7,147.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgfAtIAGgDQADgCADgDIAGgGQAEgEACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_17.setTransform(-59.7,146.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgDgBgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgFAAgEgBg");
	this.shape_18.setTransform(-66.3,143.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_19.setTransform(-70.8,143.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_20.setTransform(-74.6,143.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_21.setTransform(-78.3,143.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAEABIAJADIgDALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_22.setTransform(-83.7,144.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_23.setTransform(-91.4,144.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_24.setTransform(-96.9,143);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("AgfAtIAGgDQADgCADgDIAGgGQAEgEACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_25.setTransform(-106.9,146.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgDgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_26.setTransform(-113.5,143.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_27.setTransform(-118,143.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAHgEAHgBIACAAIABABIAAANIgCgBIgDAAQgHABgFAEQgEAFgBAIIgBAEIAAADIAAApg");
	this.shape_28.setTransform(-122.1,144.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("AgSAlQgFgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_29.setTransform(-129.5,145);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_30.setTransform(-137.4,144.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_31.setTransform(-145.1,144.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_32.setTransform(-152.3,144.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_33.setTransform(175.2,125.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_34.setTransform(168.3,123.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_35.setTransform(159.1,127.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_36.setTransform(153,124.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_37.setTransform(146.7,123.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_38.setTransform(135.6,125.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_39.setTransform(130.6,124.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_40.setTransform(124.3,123.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgHABQgGAAgDgCg");
	this.shape_41.setTransform(117.1,124.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_42.setTransform(104.4,125.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_43.setTransform(93.3,125.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgIAEgEQAHgEAHgBIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_44.setTransform(86.9,125.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_45.setTransform(82,123.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_46.setTransform(71.8,125.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_47.setTransform(65.4,124.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAEgDAHgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_48.setTransform(58.8,125.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgMQABgNAFgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgGAEgKABQgJgBgHgFgAgLgHQgEAEgEAFQgCAHAAAJQAAAHACAHQADAHAFAEQAFADAHAAQAHABAGgFQAFgEADgJIAAgDIAAgCIAAgOIAAgDIAAgDQgDgFgFgGQgFgEgIAAQgGAAgGAEg");
	this.shape_49.setTransform(50.4,123.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJABQgIgBgIgFgAgLgHQgEAEgDAFQgDAHAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_50.setTransform(38,123.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_51.setTransform(29.8,125.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJABQgIgBgIgFgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_52.setTransform(21,123.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_53.setTransform(12.3,125.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAKgFALAAQAGAAAGABIAHADIgDALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIACALIgIADQgGABgIAAQgKAAgJgFg");
	this.shape_54.setTransform(4.6,125.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_55.setTransform(-3.1,125.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJABQgIgBgIgFgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_56.setTransform(-11.8,123.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_57.setTransform(-23.5,125.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_58.setTransform(-31.9,123.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_59.setTransform(-39.1,124.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_60.setTransform(-49.8,127.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_61.setTransform(-58.5,125.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_62.setTransform(-64.8,124.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgDgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_63.setTransform(-69.4,124.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_64.setTransform(-73.9,124.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_65.setTransform(-79.8,125.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_66.setTransform(-89.3,125.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_67.setTransform(-99.1,125.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_68.setTransform(-109.9,127.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_69.setTransform(-115.6,123.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgIAEgEQAHgEAHgBIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIgBADIAAADIAAApg");
	this.shape_70.setTransform(-119.7,125.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_71.setTransform(-126.8,125.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_72.setTransform(-135.5,127.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_73.setTransform(-143.8,125.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_74.setTransform(-151.4,125.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_75.setTransform(139.9,106.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_76.setTransform(134.8,104.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_77.setTransform(127.6,104.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_78.setTransform(121.3,106.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FFFF").s().p("AgkA3IAAhSIAAgOIAAgMIAMAAIACAOQAEgHAHgEQAGgEAJAAQAJAAAIAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAGAEAHAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgCgGgFgEQgGgEgHAAQgHAAgFAFg");
	this.shape_79.setTransform(112.7,107.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_80.setTransform(105.6,106.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_81.setTransform(98.6,106.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgDgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_82.setTransform(92,105.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_83.setTransform(84.9,106.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_84.setTransform(78.5,104.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00FFFF").s().p("AgGAIQgCgDAAgFQAAgEACgCQADgDADAAQAEAAACADQAEACAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_85.setTransform(71.7,109.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_86.setTransform(65.8,106.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgDgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_87.setTransform(58.9,105.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_88.setTransform(51.8,106.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_89.setTransform(45.5,104.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgDgBgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_90.setTransform(37.6,105.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_91.setTransform(31,106.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_92.setTransform(22.2,108);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_93.setTransform(10.2,106.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_94.setTransform(3.2,105.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEACAEIABAAIAAgtIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAFgJAAQgIgBgIgFgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFAEQAFADAHAAQAHABAFgFQAGgFACgHIABgEIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_95.setTransform(-7.5,104.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgEAHgBIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_96.setTransform(-13.8,106.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_97.setTransform(-20.9,106.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_98.setTransform(-29,104.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAgtIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAFgJAAQgIgBgIgFgAgLgHQgEADgDAHQgDAGAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgFACgHIABgEIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_99.setTransform(-41.6,104.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAtg");
	this.shape_100.setTransform(-50.4,106.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_101.setTransform(-58.8,106.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_102.setTransform(-69.1,106.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgEAHgBIACAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAApg");
	this.shape_103.setTransform(-74.4,106.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_104.setTransform(-81.5,106.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_105.setTransform(-88.1,105.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAApg");
	this.shape_106.setTransform(-93.3,106.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_107.setTransform(-100.4,106.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQAEgCACgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_108.setTransform(-108.4,106.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00FFFF").s().p("AAWA3IAAgrIgBAAQgDAGgGADQgHAEgIAAQgJAAgHgEQgHgFgFgJQgFgIABgMQAAgOAFgJQAFgKAJgEQAHgEAJAAQAHAAAGAEQAHADACAGIABgMIAOAAIgBAKIAAAMIAABWgAgKgnQgGADgCAHQgDAHAAAJQAAAHADAGQACAGAFAEQAFAEAHAAQAGAAAGgEQAFgEADgGIAAgDIABgEIAAgOIAAgDIgBgDQgBgHgGgEQgFgFgIAAQgGAAgFAEg");
	this.shape_109.setTransform(-117.6,107.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAgtIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAFgJAAQgIgBgIgFgAgKgHQgGADgCAHQgDAGAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgFACgHIABgEIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_110.setTransform(-126.6,104.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_111.setTransform(-134.9,106.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_112.setTransform(-142.5,106.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_113.setTransform(-151,104.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_114.setTransform(159.5,87.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00FFFF").s().p("AgIAIIAEgNIACgMIAOgCIgFAOIgFAOIgEAKIgJABIADgMg");
	this.shape_115.setTransform(156,82);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_116.setTransform(149.8,88.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_117.setTransform(141.2,87.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_118.setTransform(131.7,85.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_119.setTransform(123.7,86.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgFAHAAIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_120.setTransform(119.1,87.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_121.setTransform(112.1,87.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_122.setTransform(103.8,85.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchHIAPAAIARAuIADAJIABAGIAAAAIADgGIACgJIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_123.setTransform(95.2,88.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgNANgHQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgCIADALIgLAEQgIABgKABQgOgBgMgGg");
	this.shape_124.setTransform(87.1,85.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_125.setTransform(75.8,87.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_126.setTransform(70.8,85.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_127.setTransform(61.5,87.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_128.setTransform(55.1,86.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgFAHAAIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_129.setTransform(49.9,87.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_130.setTransform(42.8,87.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00FFFF").s().p("AAPA5IgZglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIADgFIAEgEIAVgaIASAAIgdAfIAgAug");
	this.shape_131.setTransform(35.8,85.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_132.setTransform(27.3,87.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00FFFF").s().p("AgIA3IgIgBIgHgCIACgLIAGABIAGABQAGAAAEgCQAEgCADgGQACgGAAgLIAAhGIAOAAIAABIQAAAOgEAIQgFAIgHAEQgGADgHAAIgDAAg");
	this.shape_133.setTransform(20.2,85.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00FFFF").s().p("AgGAIQgCgDgBgFQABgEACgCQACgDAEAAQAEAAACADQADACAAAEQAAAFgCADQgDACgEAAQgEAAgCgCg");
	this.shape_134.setTransform(12.9,90.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_135.setTransform(8.4,86.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_136.setTransform(2.6,87.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_137.setTransform(-4.5,87.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_138.setTransform(-13,85.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_139.setTransform(-22.2,88.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_140.setTransform(-30.8,87.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_141.setTransform(-39.6,87.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgGgBgDgBg");
	this.shape_142.setTransform(-46.6,86.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_143.setTransform(-56.6,87.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_144.setTransform(-65,85.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_145.setTransform(-72.2,86.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_146.setTransform(-82.2,87.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00FFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgCAHIgBADIgBADIAAAOIABACIABADQABAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_147.setTransform(-90.5,85.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_148.setTransform(-103.1,87.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_149.setTransform(-110.1,86.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_150.setTransform(-120.8,88.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAALIAAAsg");
	this.shape_151.setTransform(-129.5,87.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_152.setTransform(-135.8,85.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_153.setTransform(-142.1,87.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_154.setTransform(-151.2,88.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_155.setTransform(160.1,67.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgFAHAAIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAAEIAAAng");
	this.shape_156.setTransform(154,67.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_157.setTransform(146.9,67.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_158.setTransform(136.7,67.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_159.setTransform(129.5,67.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_160.setTransform(123.6,66.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_161.setTransform(119.1,66.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_162.setTransform(114.6,66.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgFgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_163.setTransform(109.2,67.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_164.setTransform(97.7,67.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_165.setTransform(87.6,67.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgCgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgHABQgGgBgDgBg");
	this.shape_166.setTransform(78.9,66.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgDQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgIABQgEgBgFgBg");
	this.shape_167.setTransform(70.2,66.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00FFFF").s().p("AATAnIgLgSIgEgGIgEgHIAAAAIgDAHIgFAGIgLASIgPAAIAbgnIgagmIAQAAIALARIAEAGIACAHIABAAIAEgHIAEgGIAKgRIAQAAIgbAmIAbAng");
	this.shape_168.setTransform(63.6,67.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_169.setTransform(56,67.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_170.setTransform(47.5,67.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_171.setTransform(35.7,67.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_172.setTransform(27.3,66.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_173.setTransform(20.1,66.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_174.setTransform(11.4,66.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_175.setTransform(4.4,68);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00FFFF").s().p("AgYA2IgJgBIAAhpIALgBIAPgBQAJAAAHACQAIACAEAEQAFADACAFQACAFAAAGQAAAIgFAGQgEAGgJAEQAFABAFADQAFADAEAFQADAGAAAIQAAAHgDAFQgCAGgEAEQgGAFgJACQgJADgMAAIgNgBgAgTArIAFABIAHAAQAHAAAFgCQAHgCADgFQAFgEAAgIQAAgIgFgEQgDgFgHgCQgFgCgHAAIgMAAgAgOgrIgFABIAAAiIANAAQAKAAAGgFQAGgFAAgIQAAgJgGgEQgHgEgJAAIgIAAg");
	this.shape_176.setTransform(-4,66.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00FFFF").s().p("AgGA0QgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADgBAEQABAEgDADQgDADgEAAQgEAAgCgDgAgFAWIgChMIAPAAIgCBMg");
	this.shape_177.setTransform(-13.9,66.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgOAAIAAhxIAOAAIAABHIABAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_178.setTransform(-18.8,66.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_179.setTransform(-27.7,67.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00FFFF").s().p("AAQA5IgaglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_180.setTransform(-35.1,66.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_181.setTransform(-44.3,69.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_182.setTransform(-53,67.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_183.setTransform(-61.4,67.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00FFFF").s().p("AgYA2IgJgBIAAhpIAMgBIANgBQAKAAAHACQAHACAFAEQAEADADAFQACAFAAAGQAAAIgFAGQgEAGgJAEQAFABAGADQAEADAEAFQADAGAAAIQAAAHgCAFQgDAGgEAEQgGAFgJACQgJADgMAAIgNgBgAgTArIAFABIAHAAQAHAAAGgCQAGgCAEgFQADgEAAgIQAAgIgDgEQgEgFgGgCQgGgCgIAAIgLAAgAgPgrIgEABIAAAiIANAAQAKAAAGgFQAGgFAAgIQAAgJgHgEQgGgEgKAAIgIAAg");
	this.shape_184.setTransform(-69.1,66.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_185.setTransform(-81.6,67.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_186.setTransform(-87.9,66.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_187.setTransform(-97.5,66.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_188.setTransform(-106.7,67.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00FFFF").s().p("AgRA8IAJgCQADgCADgCIACgGIACgJIAAgOIAAhAIAPAAIAABFQAAALgCAIQgDAIgFAFIgHAFIgIADIgIABgAADg3QgCgCgBgEQABgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_189.setTransform(-113.9,68);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgEgJgBgLQAAgOAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAEQgGAFgJAAQgKAAgHgGgAgKgHQgFADgEAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIAAAGgFQAFgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgDgFgEgFQgGgFgIAAQgHAAgEAEg");
	this.shape_190.setTransform(-123.1,66.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_191.setTransform(-131.8,67.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_192.setTransform(-140.6,67.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FFFF").s().p("AgKAzQgKgDgIgHQgHgHgEgKQgEgKAAgNQAAgPAHgNQAHgMANgIQANgGARgBQAKAAAGACIALADIgEALIgJgDIgOgBQgNAAgJAFQgJAFgGAKQgGAJABANQAAAOAEAJQAGAKAJAFQAJAFAMABIALgBIAHgDIAAgfIgVAAIAAgLIAjAAIAAAzIgNAEQgJACgLAAQgLAAgKgEg");
	this.shape_193.setTransform(-150.4,66.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_194.setTransform(-99.2,52.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00FFFF").s().p("AgaA0IAshbIAAAAIgyAAIAAgMIBBAAIAAAJIgtBeg");
	this.shape_195.setTransform(-104.7,47.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00FFFF").s().p("AgUAzQgIgCgDgCIADgLIAJAEQAGACAHAAQAGAAAGgDQAGgDADgFQADgFAAgHQAAgKgHgGQgIgGgOAAIgIAAIgGABIAGgyIAxAAIAAAMIgnAAIgDAbIADgBIAFAAIALABQAGACAEADQAGADAFAGQAEAHABAKQAAAKgGAIQgFAIgIAEQgJAFgLAAQgIAAgGgCg");
	this.shape_196.setTransform(-113.2,47.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_197.setTransform(-124.5,48.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgLQABgOAFgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIgBgOIAAAAQgDAHgHAFQgGADgKAAQgJABgHgGgAgLgHQgFADgDAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIgBAGgEQAFgFADgHIAAgDIAAgEIAAgNIAAgDIAAgDQgDgGgFgEQgFgFgIAAQgHAAgFAEg");
	this.shape_198.setTransform(-133.3,46.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_199.setTransform(-142,48.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgMQAHgNANgIQAMgGAQAAQAKAAAHABIAJADIgDALIgKgDQgFgBgHAAQgNAAgIAGQgKAEgFAKQgFALAAANQAAANAFAJQAEAKAKAFQAIAGANAAQAHAAAGgBQAGgCAEgCIADALIgLAEQgIABgKAAQgOAAgMgGg");
	this.shape_200.setTransform(-150.8,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,22,40,0.6)").s().p("EgiSASIMAAAgkPMBElAAAMAAAAkPg");
	this.shape_201.setTransform(24,96);

	this.timeline.addTween(cjs.Tween.get(this.shape_201).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-20,439,232);


(lib.text_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgGAIQgDgDABgFQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(-15.8,169.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_1.setTransform(-19.4,164.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_2.setTransform(-23.2,164.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_3.setTransform(-29,166.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_4.setTransform(-38.8,166.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_5.setTransform(-51.3,166.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_6.setTransform(-58.5,166.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_7.setTransform(-67.5,164.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_8.setTransform(-73.3,166.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_9.setTransform(-81,166.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_10.setTransform(-88.9,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_11.setTransform(-94.8,164.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_12.setTransform(-102.8,165.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AATAnIgLgSIgEgGIgEgHIAAAAIgDAHIgFAGIgLASIgPAAIAbgnIgagmIAQAAIALARIAEAGIACAHIABAAIAEgHIAEgGIAKgRIAQAAIgbAmIAbAng");
	this.shape_13.setTransform(-109.3,166.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_14.setTransform(-116.9,166.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgBAGAAIAJABQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_15.setTransform(-125.4,166.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_16.setTransform(-137.2,166.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_17.setTransform(-145.7,164.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgEgEgBgEIgBgNIAAgoIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAHADAEQACAEAGAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_18.setTransform(-152.8,165.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AAPA5IgZglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIAEgFIADgEIAWgaIARAAIgeAfIAhAug");
	this.shape_19.setTransform(170.2,145.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_20.setTransform(162.3,147.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_21.setTransform(154.6,147.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgEAGgBIACAAIADABIAAANIgDgBIgCAAQgIABgFAEQgEAFgBAIIAAAEIgBADIAAApg");
	this.shape_22.setTransform(148.9,147.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_23.setTransform(142.3,147.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_24.setTransform(129.4,147.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_25.setTransform(119.1,147.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FFFF").s().p("AAbA2Ighg2IgLgSIgKgSIgBAAIACAVIAAAXIAAAuIgOAAIAAhrIAQAAIAiA2IAKASIAJARIAAgBIgBgUIAAgXIAAgtIAMAAIAABrg");
	this.shape_26.setTransform(109.5,145.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFF").s().p("AgGAIQgDgEABgEQgBgDADgDQADgDADAAQAEAAADADQADADAAADQgBAEgCAEQgDACgEAAQgEAAgCgCg");
	this.shape_27.setTransform(99.3,150.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_28.setTransform(93,148.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_29.setTransform(84.3,147.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_30.setTransform(75.5,147.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FFFF").s().p("AAWA2Igjg1IgKAMIAAApIgOAAIAAhrIAOAAIAAA0IAAAAIAFgGIAEgFIAggpIARAAIgmAuIApA9g");
	this.shape_31.setTransform(67.5,145.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_32.setTransform(54.3,148.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_33.setTransform(45.6,147.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_34.setTransform(36.8,147.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FFFF").s().p("AAaA2IAAgyIgzAAIAAAyIgOAAIAAhrIAOAAIAAAtIAzAAIAAgtIAOAAIAABrg");
	this.shape_35.setTransform(27.2,145.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_36.setTransform(14.1,147.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_37.setTransform(7.8,145.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FFFF").s().p("AgTA1QgHgFgFgJQgFgJAAgMQABgMAEgJQAFgJAIgFQAIgFAJAAQAIAAAGAEQAGADADAFIAAAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgGAEgKAAQgJAAgHgEgAgLgHQgEAEgEAFQgCAHAAAJQAAAIACAGQADAGAFAFQAFADAHAAQAHABAFgFQAGgEADgJIAAgCIAAgDIAAgOIAAgDIAAgDQgDgFgFgGQgFgEgIAAQgGAAgGAEg");
	this.shape_38.setTransform(-2.2,145.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_39.setTransform(-10.5,147.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().p("AABAxQgDgBgCgDQgDgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQgBAIADADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgHAAQgGAAgDgBg");
	this.shape_40.setTransform(-17.1,146.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIAAgLIAMAAIAAAQIABAAQADgJAEgEQAGgEAHgBIADAAIACABIAAANIgDgBIgDAAQgHABgFAEQgEAFgBAIIgBAEIAAADIAAApg");
	this.shape_41.setTransform(-22.3,147.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_42.setTransform(-29.4,147.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_43.setTransform(-38.9,147.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_44.setTransform(-49,145.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgCgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIAAQgFAAgEgBg");
	this.shape_45.setTransform(-56.2,146.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_46.setTransform(-66.7,147.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_47.setTransform(-75.1,147.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_48.setTransform(-83.1,147.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgCAHIgBADIgBADIAAAOIABACIABADQABAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_49.setTransform(-91.4,145.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_50.setTransform(-102.8,147.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_51.setTransform(-110,147.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_52.setTransform(-118.1,145.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_53.setTransform(-130.4,147.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_54.setTransform(-138.9,147.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_55.setTransform(-144.5,145.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFFF").s().p("AgjA3IAAhSIAAgOIgBgMIANAAIAAAOQAFgHAHgEQAGgEAJAAQAJAAAIAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIgBAAIAAAqgAgNgmQgFAEgDAIIAAADIgBADIAAANIABADIAAADQACAGAGAFQAFAEAIAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_56.setTransform(-150.6,148.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_57.setTransform(181.7,127.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FFFF").s().p("AgIAIIAEgMIACgNIAOgCIgFAPIgFAMIgEAKIgJACIADgMg");
	this.shape_58.setTransform(178.1,122.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgHAEgIABQgJgBgIgFgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAHAFAEQAFADAGAAQAIABAGgFQAFgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgCgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_59.setTransform(171.5,126.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_60.setTransform(165.4,126.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_61.setTransform(159.1,127.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAADIAAApg");
	this.shape_62.setTransform(152.7,127.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_63.setTransform(144.6,126.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FFFF").s().p("AgGAIQgDgDABgFQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_64.setTransform(134.1,130.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAQIABAAQADgJAEgEQAHgEAHgBIACAAIABABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIgBADIAAADIAAApg");
	this.shape_65.setTransform(130.9,127.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_66.setTransform(122.8,126.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FFFF").s().p("AgGAIQgCgDgBgFQABgDACgDQACgDAEAAQAEAAACADQADADAAADQAAAFgCADQgDACgEAAQgEAAgCgCg");
	this.shape_67.setTransform(112.3,130.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_68.setTransform(108.7,126.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_69.setTransform(102.9,127.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_70.setTransform(95.2,127.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_71.setTransform(87.3,127.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_72.setTransform(81.4,126.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgCgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQAAAIADADQADAEAFAAIAFAAIADgBIABAKIgFACIgIABQgFAAgEgCg");
	this.shape_73.setTransform(73.4,126.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_74.setTransform(67.6,127.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_75.setTransform(62.3,127.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_76.setTransform(57.3,126.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_77.setTransform(53.6,126);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_78.setTransform(43.4,127.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgEgDQgDgEgHAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_79.setTransform(35,126.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgDgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_80.setTransform(27.8,126.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_81.setTransform(19.1,126.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_82.setTransform(13.3,127.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACIgKAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_83.setTransform(6.1,127.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FFFF").s().p("AgjA3IAAhSIAAgOIgBgMIAMAAIABAOQAFgHAHgEQAHgEAIAAQAKAAAHAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIgBAAIAAAqgAgNgmQgFAEgCAIIgBADIgBADIAAANIABADIABADQABAGAGAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_84.setTransform(-1.8,129.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgFAAgEgCg");
	this.shape_85.setTransform(-12.7,126.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_86.setTransform(-17.2,126.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_87.setTransform(-26.5,127.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJABQgIgBgIgFgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAHAFAEQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_88.setTransform(-35.2,126.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_89.setTransform(-43.5,127.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_90.setTransform(-53.9,127.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FFFF").s().p("AgSAlQgFgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_91.setTransform(-68.3,128);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_92.setTransform(-77.2,127.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00FFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGALIAEALIAFgLIAGgLIAPgeIAQAAIgkA9IAAAug");
	this.shape_93.setTransform(-84.6,126.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00FFFF").s().p("AgGA0QgCgDAAgEQAAgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgAgFAWIgBhMIANAAIgCBMg");
	this.shape_94.setTransform(-93.5,126.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_95.setTransform(-98.5,127.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00FFFF").s().p("AABAxQgDgBgCgDQgDgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgHABQgGAAgDgCg");
	this.shape_96.setTransform(-104.4,126.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACIgKAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_97.setTransform(-111,127.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIACAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_98.setTransform(-116.7,127.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_99.setTransform(-124.4,129.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAFIAAADIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_100.setTransform(-133.1,127.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_101.setTransform(-142,127.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgHQAMgIAQAAQAKABAHABIAJADIgDAMIgKgDQgFgCgHAAQgNAAgIAFQgKAFgFALQgFAKAAAMQAAAOAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_102.setTransform(-150.8,126.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_103.setTransform(-99.2,112.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00FFFF").s().p("AgaA0IAshbIAAgBIgyAAIAAgLIBBAAIAAAJIgtBeg");
	this.shape_104.setTransform(-104.7,107.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00FFFF").s().p("AgUAzQgIgCgDgCIADgLIAJAEQAGACAHAAQAGAAAGgDQAGgDADgFQADgFAAgHQAAgKgHgGQgIgGgOAAIgIAAIgGABIAGgyIAxAAIAAAMIgnAAIgDAbIADgBIAFAAIALABQAGACAEADQAGADAFAGQAEAHABAKQAAAKgGAIQgFAIgIAEQgJAFgLAAQgIAAgGgCg");
	this.shape_105.setTransform(-113.2,107.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_106.setTransform(-124.5,108.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgMQABgNAFgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAgtIAOAAIAABcIAAAKIAAAKIgMAAIgBgNIAAAAQgDAGgHAEQgGAFgKAAQgJgBgHgFgAgLgHQgFADgDAHQgCAGAAAJQAAAHACAHQADAHAFAEQAFADAGAAQAIABAGgFQAFgFADgHIAAgEIAAgCIAAgOIAAgDIAAgDQgDgFgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape_107.setTransform(-133.3,106.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_108.setTransform(-142,108.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgIQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_109.setTransform(-150.8,107.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,22,40,0.6)").s().p("EgiSAL9IAA35MBElAAAIAAX5g");
	this.shape_110.setTransform(24,135.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,59,439,153);


(lib.text_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgGA0QgDgDABgEQgBgEADgDQADgDADAAQAFAAACADQACADABAEQgBAEgCADQgCADgFAAQgDAAgDgDgAgFAWIgChMIAPAAIgDBMg");
	this.shape.setTransform(-82.5,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_1.setTransform(-87,163.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_2.setTransform(-92.8,164.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_3.setTransform(-100,164.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_4.setTransform(-108.3,162.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_5.setTransform(-120.5,164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgDgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_6.setTransform(-128.9,162.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgLIAAgqIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_7.setTransform(-136.1,163.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_8.setTransform(-144,162.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_9.setTransform(-147.8,162.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AAfA2IgMgiIgmAAIgKAiIgPAAIAkhrIAQAAIAlBrgAAQAJIgKgeIgDgKIgDgKIAAAAIgCAKIgDAKIgLAeIAgAAg");
	this.shape_10.setTransform(-154.5,163.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgGAHQgCgDgBgEQABgDACgDQACgDAEAAQAEAAADADQACADAAADQABAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(136.4,129.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_12.setTransform(131.6,126.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_13.setTransform(124,126.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_14.setTransform(115.1,126.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_15.setTransform(108.9,124.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgEQgDgDgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgDIAAAVIAUAAIAAAMIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIAAQgEABgFgCg");
	this.shape_16.setTransform(104.3,125.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_17.setTransform(97.7,126.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_18.setTransform(92,126.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_19.setTransform(84.9,126.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AgjA3IAAhSIAAgOIgBgMIANAAIABAOQAEgHAHgEQAGgEAJAAQAJAAAIAFQAIAEADAJQAFAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIgBAAIAAAqgAgNgmQgFAEgDAIIAAADIgBADIAAANIABADIAAADQACAGAGAFQAFAEAIAAQAHAAAFgDQAGgEACgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_20.setTransform(76.6,127.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_21.setTransform(67.4,126.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_22.setTransform(57.4,126.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_23.setTransform(52.5,124.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_24.setTransform(46.6,126.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_25.setTransform(38.2,124.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgEQgDgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgFABgFgCg");
	this.shape_26.setTransform(31,125.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_27.setTransform(20.6,126.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FFFF").s().p("AABAxQgDgBgCgEQgDgDgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgDIAAAVIAUAAIAAAMIgUAAIAAAoQgBAHADAEQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgGABgDgCg");
	this.shape_28.setTransform(13.6,125.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgEgJgBgLQAAgOAGgIQAEgJAIgFQAIgFAKAAQAHAAAGAEQAGADADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAFQgGADgJAAQgKAAgHgEgAgKgHQgFAEgEAGQgCAGAAAJQAAAHACAHQADAGAFAEQAFAFAGAAQAIgBAGgEQAFgEADgJIAAgCIAAgEIAAgNIAAgDIAAgDQgDgGgEgEQgGgFgIAAQgHAAgEAEg");
	this.shape_29.setTransform(2.9,124.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_30.setTransform(-5.9,126.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_31.setTransform(-14.3,126.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_32.setTransform(-26.2,126.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_33.setTransform(-34.6,126.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_34.setTransform(-46.4,127.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_35.setTransform(-55.1,126.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_36.setTransform(-61.4,124.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAng");
	this.shape_37.setTransform(-65.5,126.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FFFF").s().p("AgMA2QgHgDgDgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAOAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgFgEgIAAQgHAAgGAEg");
	this.shape_38.setTransform(-72.9,124.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAJAAQAIAAAGAEQAGADACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAFQgHADgJAAQgIAAgIgEgAgLgHQgEAEgEAGQgCAGAAAJQAAAHACAHQADAGAFAEQAFAFAHAAQAHgBAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgGAEg");
	this.shape_39.setTransform(-85.8,124.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgGgBgGQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAGIAAADIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFABAEAEQAEAEADAGQACAHAAAJIAAAtg");
	this.shape_40.setTransform(-94.6,126.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_41.setTransform(-103,126.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_42.setTransform(-111.9,130);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_43.setTransform(-116.4,126.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgEQgEgDgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgDIAAAVIAVAAIAAAMIgVAAIAAAoQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIAAQgEABgFgCg");
	this.shape_44.setTransform(-122.2,125.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_45.setTransform(-128.8,126.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgFAHABIADAAIACAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAAEIAAAng");
	this.shape_46.setTransform(-134.9,126.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_47.setTransform(-141.4,126.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_48.setTransform(-149.1,126.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_49.setTransform(-156.3,126.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAog");
	this.shape_50.setTransform(151.4,106.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_51.setTransform(146.4,105.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_52.setTransform(140.6,106.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgBgEgEgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_53.setTransform(132.1,105.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgCQgDgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgEIAAAWIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgFABgEgCg");
	this.shape_54.setTransform(125,105.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_55.setTransform(115,106.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAFgBAHIgBAEIAAAEIAAAog");
	this.shape_56.setTransform(108.9,106.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FFFF").s().p("AgRAlQgHgDgDgIQgFgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQAEAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgNAAIAAgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_57.setTransform(101.5,107);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgCQgDgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgEIAAAWIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgFABgEgCg");
	this.shape_58.setTransform(94.4,105.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FFFF").s().p("AgkA3IAAhSIAAgOIAAgMIAMAAIACAOQAEgHAHgEQAGgEAJAAQAJAAAIAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAGAEAHAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgCgGgFgEQgGgEgHAAQgHAAgFAFg");
	this.shape_59.setTransform(87.5,108.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_60.setTransform(78.6,106.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJABgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAHAAAFABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAGAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgKgFg");
	this.shape_61.setTransform(71.5,106.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_62.setTransform(62.6,110.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_63.setTransform(57.3,106.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_64.setTransform(50.1,106.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_65.setTransform(42.9,106.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFFF").s().p("AgMA2QgGgDgFgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQADgHAIgDQAGgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQADAHAFAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_66.setTransform(35,105.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgFAIABIABAAIACAAIAAANIgCgBIgCAAQgIABgFAFQgEAFgBAHIAAAEIgBAEIAAAog");
	this.shape_67.setTransform(24.6,106.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_68.setTransform(19.6,105.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_69.setTransform(13.8,106.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAEACAFADQAEAEADAGQACAGAAAKIAAAug");
	this.shape_70.setTransform(5.3,105.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgCQgDgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIAMgEIAAAWIAVAAIAAAMIgVAAIAAAoQABAHACAEQACAEAGAAIAFAAIADgBIABAKIgFACIgIAAQgEABgFgCg");
	this.shape_71.setTransform(-1.8,105.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_72.setTransform(-12.3,106.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgCQgCgEgCgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgEIAAAWIAUAAIAAAMIgUAAIAAAoQgBAHADAEQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGABgDgCg");
	this.shape_73.setTransform(-19.2,105.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAADIAAADIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_74.setTransform(-26.3,106.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_75.setTransform(-32.6,105.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00FFFF").s().p("AAPA5IgZglIgIAIIAAAdIgNAAIAAhxIANAAIAABHIABAAIAEgFIADgEIAWgaIARAAIgeAfIAhAug");
	this.shape_76.setTransform(-40.9,105.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_77.setTransform(-49.4,106.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_78.setTransform(-57,106.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAADIAAADIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_79.setTransform(-65.5,106.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_80.setTransform(-73.1,106.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_81.setTransform(-84.1,106.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgCQgEgEgBgEIgBgNIAAgoIgMAAIAAgMIAMAAIAAgSIANgEIAAAWIAUAAIAAAMIgUAAIAAAoQAAAHACAEQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEABgFgCg");
	this.shape_82.setTransform(-91.1,105.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FFFF").s().p("AgTA1QgHgFgFgJQgFgJABgLQAAgNAEgJQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAgvIAOAAIAABdIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAFQgHADgJAAQgIAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAGAFAFQAFADAHAAQAHAAAFgEQAGgEACgJIABgCIAAgEIAAgNIAAgDIgBgDQgBgGgGgEQgFgFgIAAQgGAAgFAEg");
	this.shape_83.setTransform(-101.8,105.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_84.setTransform(-110.1,106.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_85.setTransform(-118.1,106.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAADIAAADIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_86.setTransform(-126.6,106.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_87.setTransform(-138.8,107);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_88.setTransform(-147.6,106.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGAMIAEAKIAFgKIAGgMIAPgeIAQAAIgkA9IAAAug");
	this.shape_89.setTransform(-155,105.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FFFF").s().p("AgGAIQgCgEAAgEQAAgDACgDQADgDADAAQAEAAACADQAEADAAADQgBAEgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_90.setTransform(196.9,71.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FFFF").s().p("AgTA1QgIgFgEgJQgFgJABgMQAAgMAEgJQAFgJAIgFQAIgFAJAAQAIAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJAAQgIAAgIgEgAgLgHQgEAEgEAFQgCAHAAAJQAAAIACAGQADAGAFAFQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgGAEg");
	this.shape_91.setTransform(190.5,66.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_92.setTransform(184.3,66.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIAAAQIABAAQADgJAEgEQAGgEAIgBIABAAIACABIAAANIgCgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBADIAAApg");
	this.shape_93.setTransform(180.2,68.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_94.setTransform(172.7,68.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_95.setTransform(162.6,68.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_96.setTransform(149.3,68.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_97.setTransform(140.8,66.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00FFFF").s().p("AABAxQgDgBgCgDQgDgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQgBAIADADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgHAAQgGAAgDgBg");
	this.shape_98.setTransform(133.7,67.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00FFFF").s().p("AgTA1QgHgFgFgJQgEgJgBgMQAAgMAGgJQAEgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgNIgBAAQgDAGgHAEQgHAEgIAAQgJAAgIgEgAgKgHQgGAEgCAFQgDAHAAAJQAAAIADAGQACAGAFAFQAFADAGAAQAIABAGgFQAFgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgCgFgEgGQgGgEgIAAQgHAAgEAEg");
	this.shape_99.setTransform(122.9,66.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_100.setTransform(114.2,68.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00FFFF").s().p("AgRAlQgGgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_101.setTransform(105.4,68.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_102.setTransform(96.5,68.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIADAAIACABIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAADIAAApg");
	this.shape_103.setTransform(90.1,68.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_104.setTransform(83,68.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_105.setTransform(72.8,68.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_106.setTransform(65.6,68.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_107.setTransform(59.7,66.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAFgEAHgBIACAAIACABIAAANIgCgBIgCAAQgIABgFAFQgEAEgBAIIAAAEIgBADIAAApg");
	this.shape_108.setTransform(55.6,68.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgDgDgCgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIANgEIAAAXIAUAAIAAALIgUAAIAAAoQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIAAQgEAAgFgBg");
	this.shape_109.setTransform(49.9,67.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_110.setTransform(42.8,68.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_111.setTransform(34,68.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_112.setTransform(25.2,68.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00FFFF").s().p("AgMAjQgIgFgFgIQgEgJgBgMQAAgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgCALIgHgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgJgFg");
	this.shape_113.setTransform(17.4,68.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00FFFF").s().p("AASAnIgLglIgEgMIgDgNIAAAAIgDAOIgEALIgMAlIgNAAIgXhNIAOAAIAKAnIADAMIADAMIABAAIADgMIADgMIANgnIALAAIAMAmIAEANIADAMIAAAAIADgMIADgNIALgmIAOAAIgZBNg");
	this.shape_114.setTransform(4.5,68.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_115.setTransform(-5.4,68.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_116.setTransform(-11.1,66.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_117.setTransform(-21.3,68.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_118.setTransform(-32.9,68.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_119.setTransform(-39.2,66.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_120.setTransform(-47.6,68.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEADADAHQACAHAAAKIAAAtg");
	this.shape_121.setTransform(-55.3,68.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_122.setTransform(-64.1,68.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_123.setTransform(-70.4,66.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgDgBgFIgBgMIAAgpIgMAAIAAgLIAMAAIAAgTIAMgEIAAAXIAVAAIAAALIgVAAIAAAoQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHAAQgGAAgDgBg");
	this.shape_124.setTransform(-74.9,67.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_125.setTransform(-81.5,68.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgNIgBgLIANAAIABAQIAAAAQADgJAFgEQAGgEAGgBIACAAIADABIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAADIAAApg");
	this.shape_126.setTransform(-87.3,68.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_127.setTransform(-94.3,68.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00FFFF").s().p("AgjA3IAAhSIAAgOIgBgMIAMAAIABAOQAFgHAHgEQAHgEAIAAQAKAAAHAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgGgDgEgGIgBAAIAAAqgAgNgmQgFAEgCAIIgBADIgBADIAAANIABADIABADQABAGAGAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgDgGgFgEQgEgEgIAAQgGAAgHAFg");
	this.shape_128.setTransform(-102.6,69.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_129.setTransform(-111.9,68.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_130.setTransform(-121.6,66.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_131.setTransform(-127.5,68.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_132.setTransform(-135.9,70);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_133.setTransform(-144.1,68.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_134.setTransform(-150,66.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_135.setTransform(-153.8,66.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_136.setTransform(-157.6,66.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00FFFF").s().p("AAAAxQgCgBgCgDQgDgEgCgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_137.setTransform(170.5,48.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_138.setTransform(166,47.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_139.setTransform(160.1,49.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_140.setTransform(151.8,47.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_141.setTransform(145.1,47.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_142.setTransform(139.2,49.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_143.setTransform(128.1,49.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_144.setTransform(120.4,49.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_145.setTransform(114.7,47.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgFAAgEgCg");
	this.shape_146.setTransform(110.1,48.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_147.setTransform(105.6,47.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_148.setTransform(100.6,49.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAGIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_149.setTransform(92.9,49.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_150.setTransform(84.5,49.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_151.setTransform(77.3,49.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGAEQAGADACAFIABAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgNIAAAAQgDAGgHAEQgHAEgJABQgIgBgIgFgAgKgHQgGAEgCAFQgDAHAAAJQAAAHADAHQACAHAFAEQAFADAHAAQAHABAFgFQAGgEACgJIABgDIAAgCIAAgOIAAgDIgBgDQgBgFgGgGQgFgEgIAAQgGAAgFAEg");
	this.shape_152.setTransform(66,47.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAGIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_153.setTransform(57.3,49.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACIgJAEIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_154.setTransform(48.8,49.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_155.setTransform(37.8,49.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00FFFF").s().p("AgGAnIgehNIAPAAIAQArIADAKIACAKIAAAAIADgKIAEgKIAPgrIAPAAIgfBNg");
	this.shape_156.setTransform(30.1,49.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_157.setTransform(24.3,47.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgDQgDgEgBgEIgBgMIAAgqIgMAAIAAgKIAMAAIAAgTIAMgEIAAAXIAVAAIAAAKIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABAKIgFACIgIABQgEAAgFgCg");
	this.shape_158.setTransform(19.8,48.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_159.setTransform(13.2,49.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIgBgMIANAAIABAPIAAAAQADgIAFgEQAGgEAGgBIACAAIADABIAAANIgDAAIgCAAQgIAAgFAEQgEAFgBAJIAAADIgBADIAAApg");
	this.shape_160.setTransform(7.1,49.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_161.setTransform(0.6,49.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_162.setTransform(-7.1,49.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_163.setTransform(-14.3,49.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgCADgDIAGgFQAEgFACgFIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAVIgHAQQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_164.setTransform(-24.6,50.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_165.setTransform(-30.3,47.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_166.setTransform(-36.6,47.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_167.setTransform(-45.8,50.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_168.setTransform(-51.9,47.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_169.setTransform(-58.2,47.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_170.setTransform(-70.1,49.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_171.setTransform(-80.8,49);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_172.setTransform(-91.9,49.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_173.setTransform(-99.4,49.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAQgHAAgHgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_174.setTransform(-110.7,50.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAGIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_175.setTransform(-119.4,49.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_176.setTransform(-125.7,47.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAGIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_177.setTransform(-132.1,49.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgFQgCgGgEgDQgEgDgHAAQgGAAgFAFQgFAEgCAGIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgCQAEgCAGAAIAJACQAFACAEADQAEAEADAGQACAHAAAKIAAAtg");
	this.shape_178.setTransform(-141,49.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00FFFF").s().p("AgSAlQgFgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_179.setTransform(-149.8,49.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00FFFF").s().p("AgSAoIAAg1IAAgMIAAgMIAMAAIAAAPIABAAQADgIAEgEQAGgEAHgBIADAAIACABIAAANIgDAAIgDAAQgHAAgFAEQgEAFgBAJIgBADIAAADIAAApg");
	this.shape_180.setTransform(-156.4,49.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_181.setTransform(171.9,29.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAFgEAHgBIACAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAAog");
	this.shape_182.setTransform(165.9,29.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_183.setTransform(158.8,29.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00FFFF").s().p("AgGAIQgDgDAAgFQAAgEADgCQADgDADAAQAEAAACADQADACAAAEQAAAFgCADQgDACgEAAQgEAAgCgCg");
	this.shape_184.setTransform(150.2,32.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgLAAgIgFg");
	this.shape_185.setTransform(145.1,29.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAsg");
	this.shape_186.setTransform(136.9,29.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00FFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_187.setTransform(130.5,28.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_188.setTransform(120.4,31.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_189.setTransform(111.8,29.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_190.setTransform(102.3,28.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00FFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_191.setTransform(94.3,29.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIAAAPIABAAQADgHAEgFQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAAog");
	this.shape_192.setTransform(89.7,29.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_193.setTransform(82.7,29.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00FFFF").s().p("AgMA2QgHgDgDgIIgBAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAGgIQAHgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_194.setTransform(74.4,28.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgBADgEIAGgFQAEgEACgGIABgCIAAgCIAAgBIgBgCIgchGIAPAAIARAuIADAIIABAGIAAAAIADgGIACgJIAQgtIAOAAIgVA3IgJAWIgHAPQgEAGgFAEQgFAFgFACIgIACg");
	this.shape_195.setTransform(65.8,31.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00FFFF").s().p("AgOAxQgMgGgHgMQgHgMAAgSQAAgQAHgNQAHgMANgIQAMgGAQgBQAKAAAHACIAJADIgDALIgKgCQgFgCgHAAQgNAAgIAFQgKAGgFAKQgFAKAAANQAAANAFAJQAEAKAKAGQAIAFANAAQAHAAAGgCQAGgBAEgBIADAKIgLAEQgIACgKAAQgOAAgMgHg");
	this.shape_196.setTransform(57.7,28.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgCgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQgBAIADADQACAEAGAAIAFAAIADgBIABAKIgFACIgHABQgGAAgDgCg");
	this.shape_197.setTransform(46.9,28.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_198.setTransform(42.4,28.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00FFFF").s().p("AgOA6IAAhCIgKAAIAAgLIAKAAIAAgDQAAgJACgHQACgHAFgEQAEgEAEgCQAFgCAFAAIAHABIAFACIgCAKIgDgBIgGAAQgGAAgDADQgDADgBAFQgBAFAAAGIAAAEIASAAIAAALIgSAAIAABCg");
	this.shape_199.setTransform(38.7,28);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgDgDgCgFIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgEIAAAXIAUAAIAAAKIgUAAIAAApQAAAIACADQADAEAFAAIAFAAIAEgBIAAAKIgFACIgIABQgEAAgFgCg");
	this.shape_200.setTransform(33.2,28.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00FFFF").s().p("AgRAlQgGgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAFAAADgCQADgCADgDIAEgGIABgDIABgEIAAgvIANAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_201.setTransform(26.2,30);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_202.setTransform(17.4,29.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_203.setTransform(6.4,29.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_204.setTransform(1.4,28.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_205.setTransform(-4.9,28.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgMQABgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIABAKIgNAAIgBgOIAAAAQgDAHgHAEQgGAFgKAAQgJgBgHgFgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAHAAQAHABAFgFQAGgFADgHIAAgEIAAgCIAAgOIAAgDIAAgDQgDgFgFgGQgFgEgIAAQgGAAgGAEg");
	this.shape_206.setTransform(-17.5,28.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAsg");
	this.shape_207.setTransform(-26.3,29.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_208.setTransform(-34.7,29.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgEgJgBgMQAAgNAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAFIAAAAIAAguIAOAAIAABcIAAAKIAAAKIgMAAIAAgOIgBAAQgDAHgHAEQgGAFgJAAQgKgBgHgFgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAGAAQAIABAGgFQAFgFADgHIAAgEIAAgCIAAgOIAAgDIAAgDQgCgFgFgGQgGgEgIAAQgHAAgFAEg");
	this.shape_209.setTransform(-46.5,28.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_210.setTransform(-52.7,28.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_211.setTransform(-59,29.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgEAHgBIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAADIAAAog");
	this.shape_212.setTransform(-65.4,29.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_213.setTransform(-73.5,28.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00FFFF").s().p("AgGAIQgCgDgBgFQABgEACgCQACgDAEAAQAEAAADADQACACAAAEQABAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_214.setTransform(-84,32.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIAAAPIABAAQADgHAEgFQAGgEAIgBIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBADIAAAog");
	this.shape_215.setTransform(-87.1,29.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_216.setTransform(-95.2,28.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00FFFF").s().p("AgGAIQgDgDAAgFQAAgEADgCQACgDAEAAQAEAAACADQADACABAEQAAAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_217.setTransform(-105.7,32.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAADIAAAEIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgCAGAAIAJACQAFABAEAEQAEAEADAGQACAGAAALIAAAsg");
	this.shape_218.setTransform(-112,29.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_219.setTransform(-120.5,29.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_220.setTransform(-126.1,28.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00FFFF").s().p("AgkA3IAAhSIAAgOIAAgMIAMAAIABAOQAFgHAHgEQAHgEAIAAQAJAAAIAFQAHAEAFAJQAEAJAAAMQAAAOgFAIQgFAJgIAFQgIAEgJAAQgHAAgGgDQgHgDgDgGIAAAAIAAAqgAgMgmQgGAEgCAIIgBADIAAADIAAANIAAADIABADQACAGAFAFQAFAEAIAAQAHAAAFgDQAFgEADgHQADgFAAgJQAAgIgDgHQgCgGgGgEQgFgEgHAAQgHAAgFAFg");
	this.shape_221.setTransform(-132.2,31.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_222.setTransform(-143.6,29.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_223.setTransform(-148.7,28.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_224.setTransform(-155,28.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgFgDQgEgEgGAAQgGAAgEAEQgFAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAIgDIAGgBIAJABQAEACAFADQADAEADAGQADAGAAAKIAAAug");
	this.shape_225.setTransform(184.6,8.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_226.setTransform(175.4,12.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_227.setTransform(166.8,10.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_228.setTransform(157.9,10.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgFAHAAIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_229.setTransform(151.5,10.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgFAEgCAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAGgEIAGgDIAHgBIAIABQAFACAEADQAEAEAEAGQACAGAAAKIAAAug");
	this.shape_230.setTransform(144,8.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00FFFF").s().p("AAAAxQgCgCgDgDQgCgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIAMgDIAAAWIAVAAIAAAKIgVAAIAAApQAAAHADAEQADAEAFAAIAFAAIADgBIABALIgFABIgIABQgFgBgEgBg");
	this.shape_231.setTransform(136.9,9.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00FFFF").s().p("AAQA5IgaglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_232.setTransform(127.8,8.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_233.setTransform(119.3,10.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_234.setTransform(111.7,10.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIAAgMIAMAAIAAAPIABAAQADgHAEgFQAHgFAHAAIACAAIABABIAAANIgCAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_235.setTransform(105.6,10.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQADgHAIgDQAGgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgCAHIgBADIAAADIAAAOIAAACIABADQACAHAFAFQAGAEAHAAQALAAAGgIQAGgIAAgNQAAgIgDgHQgCgFgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_236.setTransform(98.3,8.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_237.setTransform(85.6,10.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgDgCgCgGIgBgLIAAgqIgMAAIAAgKIAMAAIAAgTIANgDIAAAWIAUAAIAAAKIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_238.setTransform(78.7,9.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_239.setTransform(69.5,10.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_240.setTransform(64.4,8.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_241.setTransform(60.6,8.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_242.setTransform(56.8,9.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00FFFF").s().p("AAQA5IgaglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIADgFIAEgEIAVgaIASAAIgdAfIAgAug");
	this.shape_243.setTransform(51.6,8.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_244.setTransform(44,10.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIAAgIgGgAgKgHQgGADgCAHQgDAGAAAJQAAAHADAHQACAHAFADQAFAEAHABQAHAAAFgFQAGgFACgHIABgEIAAgDIAAgNIAAgDIgBgDQgBgFgGgFQgFgFgIAAQgGAAgFAEg");
	this.shape_245.setTransform(32.7,8.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_246.setTransform(24,10.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_247.setTransform(15.5,10.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_248.setTransform(6.7,14.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgFgJABgMQAAgNAEgIQAFgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIAAgIgGgAgLgHQgEADgEAHQgCAGAAAJQAAAHACAHQADAHAFADQAFAEAHABQAHAAAFgFQAGgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgCgFgGgFQgFgFgIAAQgGAAgGAEg");
	this.shape_249.setTransform(0.6,8.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_250.setTransform(-5.6,9.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_251.setTransform(-11.9,10.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIAAAPIABAAQADgHAEgFQAGgFAIAAIABAAIACABIAAANIgCAAIgCAAQgIAAgFAEQgEAGgBAIIAAADIgBAEIAAAng");
	this.shape_252.setTransform(-18.3,10.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_253.setTransform(-26.4,9.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00FFFF").s().p("AgGAHQgDgCAAgFQAAgEADgCQACgDAEAAQAEAAACADQADACABAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_254.setTransform(-36.9,13.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgMIgBgMIANAAIABAPIAAAAQADgHAFgFQAGgFAGAAIACAAIADABIAAANIgDAAIgDAAQgHAAgFAEQgEAGgBAIIgBADIAAAEIAAAng");
	this.shape_255.setTransform(-40,10.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00FFFF").s().p("AgfA2IgMgBIAAhpIAOgBIAQgBQANAAALAEQALADAHAHQAHAGAEAKQAEAJAAANQAAANgEAKQgEALgHAHQgIAIgMAEQgLAEgQAAIgNgBgAgWgqIgHABIAABUIAGAAIAIABQAVgBAMgLQAMgMAAgVQAAgNgFgJQgFgKgJgFQgKgFgOAAIgJABg");
	this.shape_256.setTransform(-48.1,9.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00FFFF").s().p("AgIAIIADgMIADgNIAPgCIgFAOIgFAOIgFAKIgKABIAEgMg");
	this.shape_257.setTransform(-58.9,14.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00FFFF").s().p("AgMAjQgIgFgEgIQgGgJAAgMQABgLAFgJQAFgKAJgFQAKgFALAAQAHAAAEABIAIADIgCALIgHgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJADAHQAEAGAGAEQAFADAIAAQAFAAAFgBIAHgDIACALIgIADQgGABgIAAQgKAAgKgFg");
	this.shape_258.setTransform(-63.8,10.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_259.setTransform(-71.5,10.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00FFFF").s().p("AgGA2IAAhMIANAAIAABMgAgFgmQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_260.setTransform(-77,9.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgEQgCgFgEgEQgEgDgHAAQgGAAgFAEQgFAEgCAGIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgEAFgBQAEgDAGAAIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_261.setTransform(-83.4,10.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_262.setTransform(-91.8,10.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_263.setTransform(-102.2,10.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_264.setTransform(-113.3,10.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_265.setTransform(-119.6,8.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgCgEgEgDQgDgDgHAAQgFAAgFACQgGABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgGAEAAAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_266.setTransform(-125.5,10.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00FFFF").s().p("AgRA3QgHgCgEgDIADgLQAEADAGABQAGACAHAAQAGAAAGgCQAFgDADgGQAEgGAAgKIAAgJIgBAAQgDAGgGAEQgGADgIAAQgKAAgHgFQgIgEgEgJQgEgIAAgKQAAgNAFgKQAFgJAIgFQAIgEAJAAQAFAAAFACQAFACADADQADADACADIAAAAIABgMIAMAAIAAAKIgBAMIAAAsQAAANgCAIQgDAJgGAFQgFAFgIACQgHACgHAAIgOgBgAgOgkQgHAHAAAOQAAAIADAGQACAFAFAEQAFAEAHAAQAHAAAFgEQAFgEACgGIABgDIABgEIAAgOIgBgDIAAgEQgCgGgFgEQgFgEgIAAQgJAAgGAIg");
	this.shape_267.setTransform(-133.9,12.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_268.setTransform(-142.1,10.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_269.setTransform(-152.8,10.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_270.setTransform(172.1,-8.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_271.setTransform(161.1,-8.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_272.setTransform(155.1,-10.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00FFFF").s().p("AAQA5IgaglIgHAIIAAAdIgPAAIAAhxIAPAAIAABHIAAAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_273.setTransform(149.9,-10.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQAAgLAFgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgKAAgJgFg");
	this.shape_274.setTransform(142,-8.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_275.setTransform(134.3,-8.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_276.setTransform(128,-9.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_277.setTransform(117.5,-8.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_278.setTransform(110.6,-9.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgCgEgEgDQgEgEgHAAQgGAAgEAEQgGAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAHgDIAGgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_279.setTransform(100.1,-10.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQAAAHACAEQADAEAFAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_280.setTransform(93,-9.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_281.setTransform(88.4,-10.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_282.setTransform(82.5,-8.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_283.setTransform(74.9,-8.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_284.setTransform(68.3,-9.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_285.setTransform(62.5,-8.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00FFFF").s().p("AAuAHQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgEAAgCgDgAg7AHQgDgDAAgEQAAgEADgCQACgDAEAAQAFAAACADQADACAAAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_286.setTransform(51.3,-5.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_287.setTransform(39.5,-8.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAJgFAMAAQAGAAAGABIAIADIgEALIgGgDIgKgBQgIAAgGAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAHAAAEgBIAHgDIADALIgJADQgGABgIAAQgLAAgIgFg");
	this.shape_288.setTransform(32.1,-8.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_289.setTransform(24,-8.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00FFFF").s().p("AgUAlQgFgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgFAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_290.setTransform(15.5,-8.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgFgJAAgLQABgOAFgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIgBgOIAAAAQgDAHgHAEQgGAFgJAAQgKAAgHgGgAgLgHQgFADgDAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIAAAGgFQAFgFADgHIAAgEIAAgDIAAgNIAAgDIAAgDQgDgFgEgFQgGgFgIAAQgHAAgFAEg");
	this.shape_291.setTransform(7.1,-10.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_292.setTransform(-1.6,-8.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00FFFF").s().p("AgSAlQgFgDgFgIQgEgHAAgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAOAAIAAA4IAAALIABAKIgMAAIgBgNIAAAAIgGAHIgIAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_293.setTransform(-10.4,-8.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00FFFF").s().p("AgMA2QgHgDgEgIIAAAAIgBANIgMAAIABgKIAAgKIAAhdIANAAIAAAxIABAAQAEgHAGgDQAHgEAIAAQAKAAAHAFQAIAFAEAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgNgHQgFAFgDAHIAAADIgBADIAAAOIABACIAAADQACAHAGAFQAFAEAIAAQAKAAAHgIQAGgIAAgNQAAgIgDgHQgDgFgFgEQgEgEgIAAQgGAAgHAEg");
	this.shape_294.setTransform(-19.1,-10.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQAAgEgFgDQgDgDgHAAQgGAAgFACIgJAEIgDgKQAEgDAHgCQAGgBAHAAQAMAAAGAEQAHAFACAHQADAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_295.setTransform(-28,-8.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_296.setTransform(-39.5,-8.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_297.setTransform(-45.8,-10.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_298.setTransform(-55.5,-10.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00FFFF").s().p("AABAxQgDgCgDgDQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAHACAEQACAEAGAAIAFAAIADgBIABALIgFABIgHABQgFgBgEgBg");
	this.shape_299.setTransform(-62.7,-9.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_300.setTransform(-69.7,-8.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00FFFF").s().p("AgMA2QgGgDgEgIIgBAAIgBANIgMAAIAAgKIAAgKIAAhdIAPAAIAAAxIAAAAQAEgHAGgDQAHgEAJAAQAJAAAIAFQAGAFAFAIQAEAIAAAMQAAAOgFAJQgFAJgIAFQgIAEgJAAIgCABQgGAAgGgEgAgMgHQgGAFgDAHIAAADIAAADIAAAOIAAACIAAADQADAHAFAFQAGAEAHAAQALAAAFgIQAHgIAAgNQAAgIgDgHQgDgFgEgEQgGgEgHAAQgHAAgFAEg");
	this.shape_301.setTransform(-78.4,-10.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_302.setTransform(-93.3,-8.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_303.setTransform(-103.9,-8.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgBgFQgDgEgDgDQgEgEgHAAQgGAAgFAEQgFAEgCAFIAAADIAAAEIAAAvIgPAAIAAhxIAPAAIAAAxIAEgGIAGgEIAGgDIAHgBIAIABQAGACADADQAFAEACAGQADAGAAAKIAAAug");
	this.shape_304.setTransform(-112.4,-10.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00FFFF").s().p("AAAAxQgCgCgCgDQgEgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQAAAHADAEQACAEAGAAIAFAAIAEgBIAAALIgFABIgIABQgEgBgFgBg");
	this.shape_305.setTransform(-119.5,-9.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00FFFF").s().p("AgTA0QgIgEgEgJQgFgJABgLQAAgOAEgIQAFgJAIgFQAIgFAKAAQAHAAAGADQAGAEACAEIABAAIAAguIAOAAIAABdIAAALIABAJIgNAAIgBgOIAAAAQgDAHgHAEQgHAFgJAAQgIAAgIgGgAgLgHQgEADgDAHQgDAGAAAJQAAAIADAGQACAGAFAEQAFAFAHAAQAHAAAFgFQAGgFACgHIABgEIAAgDIAAgNIAAgDIgBgDQgBgFgGgFQgFgFgIAAQgGAAgGAEg");
	this.shape_306.setTransform(-130.3,-10.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_307.setTransform(-138.5,-8.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_308.setTransform(-146.5,-8.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGgBIAJACQAFABAEAEQAEADADAHQACAGAAAKIAAAtg");
	this.shape_309.setTransform(-155,-8.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_310.setTransform(170.6,-29.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_311.setTransform(166.8,-29.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00FFFF").s().p("AgIAIIAEgNIADgMIANgBIgEANIgGAOIgEAKIgJAAIADgLg");
	this.shape_312.setTransform(163.4,-33);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_313.setTransform(158.1,-27.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00FFFF").s().p("AAVA2IgOg3IgEgTIgDgQIAAAAIgDAQIgFATIgPA3IgPAAIgbhrIAPAAIANA2IAEATIAEASIAEgSIAFgTIAOg2IAOAAIANA2IAEATIADASIABAAIAEgSIAEgTIAPg2IAOAAIgfBrg");
	this.shape_314.setTransform(147.9,-29.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00FFFF").s().p("AgGAHQgDgDABgEQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_315.setTransform(136.8,-24.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_316.setTransform(132,-27.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_317.setTransform(126.9,-29.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_318.setTransform(123.1,-29.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_319.setTransform(119.3,-29.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgNAAIAAhxIANAAIAABHIABAAIAEgFIADgEIAWgaIAQAAIgdAfIAiAug");
	this.shape_320.setTransform(114.1,-29.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_321.setTransform(106.5,-27.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00FFFF").s().p("AgTA0QgHgEgFgJQgEgJgBgLQAAgOAGgIQAEgJAIgFQAIgFAJAAQAIAAAGADQAGAEADAEIAAAAIAAguIAOAAIAABdIAAALIAAAJIgMAAIAAgOIgBAAQgDAHgHAFQgGADgJAAQgKABgHgGgAgLgHQgEADgEAHQgCAGAAAJQAAAIACAGQADAGAFAEQAFAFAGAAQAIgBAGgEQAFgFADgHIAAgDIAAgEIAAgNIAAgDIAAgDQgCgGgFgEQgGgFgIAAQgHAAgFAEg");
	this.shape_322.setTransform(95.2,-29.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_323.setTransform(86.5,-27.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00FFFF").s().p("AgTAlQgFgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAFgDAGgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAAAAAQgGACgEADQgFAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_324.setTransform(78,-27.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAIABQAFACAEADQAFAEADAGQACAGAAAKIAAAug");
	this.shape_325.setTransform(66.5,-29.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00FFFF").s().p("AAAAxQgCgBgDgEQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABALIgFABIgIAAQgEAAgFgBg");
	this.shape_326.setTransform(59.4,-28.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_327.setTransform(54.8,-29.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQABAGADAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_328.setTransform(48.9,-27.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_329.setTransform(41.3,-27.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00FFFF").s().p("AABAxQgDgBgCgEQgDgCgCgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIANgDIAAAVIAUAAIAAALIgUAAIAAApQgBAIADADQADAEAFAAIAFAAIAEgBIAAALIgFABIgHAAQgGAAgDgBg");
	this.shape_330.setTransform(34.7,-28.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_331.setTransform(28.9,-27.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIAAgLIAMAAIAAAPIABAAQADgHAEgFQAHgFAHABIACAAIABAAIAAANIgCgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_332.setTransform(20.1,-27.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00FFFF").s().p("AgRAlQgGgDgEgIQgEgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAKAAQADAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgNAAIAAgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgFgDg");
	this.shape_333.setTransform(12.7,-27.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_334.setTransform(3.8,-27.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00FFFF").s().p("AgfAsIAGgCQADgBADgDIAGgHQAEgDACgGIABgCIAAgBIAAgCIgBgCIgchHIAPAAIARAuIADAIIABAHIAAAAIADgHIACgIIAQguIAOAAIgVA4IgJAWIgHAPQgEAGgFAFQgFAEgFACIgIADg");
	this.shape_335.setTransform(-4.2,-26.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_336.setTransform(-15.8,-27.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgEQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgGAAgDgBg");
	this.shape_337.setTransform(-22.7,-28.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00FFFF").s().p("AgPAnQgFgBgEgDIADgLIAIAEQAFACAGAAQAGAAAEgDQAEgEAAgFQAAgEgEgEQgDgDgHgDQgKgEgFgEQgFgGAAgHQAAgGADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFABADACIgDALIgGgDQgEgCgGAAQgFAAgDADQgEADAAAFQAAAEAEADQADADAHADQAKAEAFAEQAFAGAAAIQAAALgHAGQgIAGgNAAQgGAAgGgBg");
	this.shape_338.setTransform(-31.9,-27.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00FFFF").s().p("AAQA5IgaglIgIAIIAAAdIgOAAIAAhxIAOAAIAABHIABAAIADgFIAEgEIAVgaIARAAIgcAfIAhAug");
	this.shape_339.setTransform(-38.2,-29.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00FFFF").s().p("AATAnIAAgrQAAgHgBgFQgCgEgEgEQgEgDgHAAQgGAAgFAEQgFAFgCAFIAAAEIAAADIAAAtIgPAAIAAg3IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgCQAEgCAGAAIAJABQAFACAEADQAEADADAHQACAGAAAKIAAAtg");
	this.shape_340.setTransform(-47.1,-27.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgBgFQgBgEgFgDQgDgDgHAAQgGAAgEACQgGABgEADIgDgKQAEgDAHgCQAHgBAGAAQAMAAAGAEQAHAFACAHQACAHABAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAAAAAQgGACgFADQgEAEgBAIQABAGADAEQAEADAGAAQAGAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgMAAg");
	this.shape_341.setTransform(-55.5,-27.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_342.setTransform(-63.6,-29.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00FFFF").s().p("AABAxQgDgBgDgEQgDgCgBgGIgBgMIAAgpIgMAAIAAgLIAMAAIAAgSIAMgDIAAAVIAVAAIAAALIgVAAIAAApQABAIACADQACAEAGAAIAFAAIADgBIABALIgFABIgHAAQgFAAgEgBg");
	this.shape_343.setTransform(-70.8,-28.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_344.setTransform(-80.8,-27.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIgBAEIAAAEIAAAng");
	this.shape_345.setTransform(-86.8,-27.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_346.setTransform(-93.9,-27.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00FFFF").s().p("AATA5IAAgtQAAgGgCgFQgCgEgDgDQgFgEgGAAQgGAAgFAEQgEAEgDAFIgBADIAAAEIAAAvIgOAAIAAhxIAOAAIAAAxIAFgGIAFgEIAHgDIAHgBIAJABQAFACAEADQADAEAEAGQACAGAAAKIAAAug");
	this.shape_347.setTransform(-102.3,-29.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_348.setTransform(-114.2,-27.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00FFFF").s().p("AgSAnIAAg0IAAgNIgBgLIANAAIABAPIAAAAQADgHAFgFQAGgFAGABIACAAIADAAIAAANIgDgBIgDAAQgHABgFAFQgEAEgBAIIAAAEIgBAEIAAAng");
	this.shape_349.setTransform(-120.2,-27.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00FFFF").s().p("AgUAlQgEgDgDgFQgDgFAAgGQAAgOAMgGQAMgIAVAAIAAgBQABgDgCgFQgBgEgDgDQgEgDgHAAQgGAAgFACQgFABgEADIgDgKQAFgDAGgCQAGgBAHAAQAMAAAHAEQAGAFADAHQACAHAAAIIAAAcIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgGADQgGADgHAAQgIAAgGgDgAABAAQgHACgFADQgEAEgBAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAEgEACgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_350.setTransform(-127.3,-27.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00FFFF").s().p("AgSAlQgGgDgEgIQgDgHgBgNIAAgtIAOAAIAAAqQAAALAEAHQAEAHAJAAQAEAAAEgCQAEgCADgDIADgGIABgDIAAgEIAAgvIAPAAIAAA4IAAALIAAAKIgMAAIgBgNIgBAAIgEAHIgJAFQgFACgGAAIgCABQgFAAgGgDg");
	this.shape_351.setTransform(-138.8,-27.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_352.setTransform(-147.6,-27.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00FFFF").s().p("AgHA2IAAguIgig9IAQAAIAPAeIAGALIAEALIAFgLIAGgLIAPgeIAQAAIgkA9IAAAug");
	this.shape_353.setTransform(-155,-29.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00FFFF").s().p("AgGA0QgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDgAgEAWIgChMIANAAIgCBMg");
	this.shape_354.setTransform(-57.2,-67.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00FFFF").s().p("AgTAlQgGgDgCgFQgDgFAAgGQAAgOAMgGQAMgIAWAAIAAgBQAAgDgCgFQgBgEgDgDQgEgDgHAAQgFAAgGACQgFABgEADIgDgKQAEgDAHgCQAGgBAHAAQAMAAAHAEQAGAFADAHQABAHAAAIIAAAcIABAKIABAJIgNAAIgBgKIAAAAQgEAFgGADQgGADgHAAQgIAAgFgDgAABAAQgHACgEADQgGAEAAAIQAAAGAEAEQAEADAFAAQAHAAAFgEQAFgEABgFIABgCIAAgCIAAgNIgEAAIgLAAg");
	this.shape_355.setTransform(-63.1,-66.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00FFFF").s().p("AgRA8IAIgCQAEgCADgCIACgGIACgJIAAgOIAAhAIAOAAIAABFQAAALgBAIQgCAIgGAFIgHAFIgIADIgIABgAADg3QgCgCgBgEQABgEACgCQACgDAEAAQAFAAACADQACACAAAEQAAAEgCACQgCADgFAAQgEAAgCgDg");
	this.shape_356.setTransform(-69.6,-66.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00FFFF").s().p("AATAoIAAgsQAAgGgBgGQgCgFgEgDQgEgDgHAAQgGAAgFAFQgFADgCAHIAAACIAAAEIAAAuIgPAAIAAg4IAAgLIAAgKIAMAAIABANQACgEAEgDQAEgDAFgDQAEgBAGAAIAJABQAFACAEADQAEAEADAGQACAHAAAJIAAAug");
	this.shape_357.setTransform(-75.2,-66.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00FFFF").s().p("AgGA2IAAhNIANAAIAABNgAgFgmQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_358.setTransform(-81.5,-67.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00FFFF").s().p("AAbA2Igig2IgKgSIgKgSIAAAAIABAVIAAAXIAAAuIgOAAIAAhrIAQAAIAiA2IAKASIAJARIAAgBIgBgUIAAgXIAAgtIAMAAIAABrg");
	this.shape_359.setTransform(-88.8,-67.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGQAAgFgCgFQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_360.setTransform(-101.4,-66.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#00FFFF").s().p("AAqAoIAAgrQAAgLgEgHQgFgGgIAAQgGAAgEAEQgFAEgCAFIgBADIAAAEIAAAvIgNAAIAAguQAAgJgEgGQgEgGgIAAQgEAAgEACIgGAFIgDAHIgBAEIAAADIAAAuIgOAAIAAg4IAAgLIgBgKIANAAIAAANIABAAIAFgHQADgDAFgCQAFgCAGAAQAIAAAGAEQAEAEADAHIAAAAIAEgGIAFgEQADgDAEgBQAFgBAFAAQAFgBAGADQAGADAEAIQAEAHABANIAAAtg");
	this.shape_361.setTransform(-112.1,-66.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#00FFFF").s().p("AgTAkQgIgFgFgJQgFgJAAgMQABgMAFgJQAFgKAIgEQAJgFAKAAQALAAAIAFQAJAFAEAJQAFAJAAALQAAAOgGAJQgGAJgIAEQgJAEgJAAQgKAAgJgEgAgMgYQgFAEgDAHQgCAHAAAGQAAAJADAGQADAHAFAEQAFAEAGAAQAHAAAFgEQAFgEADgHQAEgGAAgJQAAgGgDgHQgCgGgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_362.setTransform(-123.2,-66.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#00FFFF").s().p("AgLAjQgJgFgFgIQgEgJAAgMQgBgLAGgJQAFgKAJgFQAKgFALAAQAGAAAFABIAIADIgDALIgGgDIgKgBQgJAAgFAEQgGAEgDAGQgDAHAAAHQAAAJAEAHQADAGAGAEQAFADAHAAQAGAAAFgBIAHgDIACALIgIADQgGABgIAAQgLAAgIgFg");
	this.shape_363.setTransform(-131,-66.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#00FFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_364.setTransform(-136.6,-68.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#00FFFF").s().p("AgQAjQgIgEgFgJQgEgJAAgMQAAgKAEgKQAFgJAIgGQAIgFAKAAQAKAAAGADQAGAEAEAGQADAFACAGIABAMIAAADIAAADIg2AAQABAJADAGQAEAGAGADQAGACAGAAIAMgBIAJgDIADALIgKADQgHABgJAAQgLAAgJgFgAAVgGIgCgKQgCgGgEgDQgEgEgIAAQgGAAgFADQgEAEgDAFQgCAGgBAFIApAAIAAAAg");
	this.shape_365.setTransform(-142.4,-66.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#00FFFF").s().p("AAVA2IgOg3IgEgTIgDgQIAAAAIgDAQIgFATIgPA3IgPAAIgbhrIAPAAIANA1IAEAUIAEASIAEgSIAFgUIAOg1IAOAAIANA2IAEATIADASIABAAIAEgSIAEgUIAPg1IAOAAIgfBrg");
	this.shape_366.setTransform(-152.6,-67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(0,22,40,0.6)").s().p("EgiDAYnMAAAgxNMBEHAAAMAAAAxNg");
	this.shape_367.setTransform(22.5,54.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_367).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.5,-103.1,436,315);


(lib.map_marker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.map_marker_locked();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-51.5);

	this.instance_1 = new lib.map_marker_active();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.5,-51.5);

	this.instance_2 = new lib.map_marker_visited();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.5,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.bg_map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_map();
	this.instance.parent = this;
	this.instance.setTransform(-507,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507,-325,1014,650);


(lib.anim_txt_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.text_4_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24,134.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-95.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.4,114.1,439,232);


(lib.anim_txt_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.text_3_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24,134.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-95.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.4,114.1,439,232);


(lib.anim_txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.text_2_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-135.4},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.4,73.6,439,153);


(lib.anim_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.text_1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-22.4,261.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-54.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,158.6,436,315);


// stage content:
(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{level1:109,level2:139,level3:159,level4:179});

	// timeline functions:
	this.frame_0 = function() {
		this.level="level1";
		this.txt1_mc.visible= false;
		this.txt2_mc.visible= false;
		this.txt3_mc.visible= false;
		this.txt4_mc.visible= false;
	}
	this.frame_94 = function() {
		this.stop();
		this.methods.animationComplete();
	}
	this.frame_109 = function() {
		if(this.level == "level1"){
			this.stop();
			this.txt1_mc.visible=true;
			this.txt1_mc.play();
		}
	}
	this.frame_139 = function() {
		if(this.level == "level2"){
			this.stop();
			this.txt2_mc.visible=true;
			this.txt2_mc.play();
		}
	}
	this.frame_159 = function() {
		if(this.level == "level3"){
			this.stop();
			this.txt3_mc.visible=true;
			this.txt3_mc.play();
		}
	}
	this.frame_179 = function() {
		if(this.level == "level4"){
			this.stop();
			this.txt4_mc.visible=true;
			this.txt4_mc.play();
		}
	}
	this.frame_199 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(15).call(this.frame_109).wait(30).call(this.frame_139).wait(20).call(this.frame_159).wait(20).call(this.frame_179).wait(20).call(this.frame_199).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlRE1QgEAAgDgDQgDgDABgEQAAgEADgDIAtgnQADgDAEABQAEAAADADQADADAAAEQgBAEgDADIgtAnQgDADgEAAIAAgBgAj3DnQgEgBgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEAAQAEABADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBAAgAidCXQgEgBgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEAAQAEABADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBAAgAhDBHQgEgBgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEAAQAEABADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBAAgAAWgJQgEAAgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEAAQAEABADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBgBgABwhZQgEAAgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEAAQAEABADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBgBgADKipQgEAAgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEABQAEAAADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBgBgAEkj5QgEAAgDgDQgDgDABgEQAAgEADgDIAtgoQADgDAEABQAEAAADADQADADAAAEQgBAEgDADIgtAoQgDADgDAAIgBgBg");
	this.shape.setTransform(559.2,176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ADTKEQgEgCgBgDIgGgQQgCgEACgEQACgEAEgBQADgCAEACQAEACABAEIAGAQQACADgCAEQgCAEgDABIgEABIgEgBgAC6I7QgEgCgBgEIgUg5QgCgEACgDQACgEAEgBQAEgCADACQAEACACAEIAUA5QABAEgCADQgCAEgEACIgDAAIgEgBgACTHJQgEgCgBgEIgUg5QgCgDACgEQACgEAEgBQAEgCADACQAEACACAEIAUA5QABAEgCADQgCAEgEACIgDAAIgEgBgABrFXQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgABEDlQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAAdBzQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAgJABQgEgBgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIASA5QABAEgCAEQgCACgDACIgDAAIgEgBgAgvhwQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAhVjiQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAh7lUQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAihnGQgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBgAjHo4QgEgCgBgEIgTg5QgCgEACgDQACgEAEgBQAEgCAEACQADACACAEIATA5QABAEgCAEQgCADgEACIgDAAIgEgBg");
	this.shape_1.setTransform(543.5,271.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ATIPSIgQgOQgEgCAAgEQAAgEACgDQADgEAEAAQAEgBADADIAQANQAEADAAAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgASJOeIgvgkQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAvAlQADACABAEQAAAFgCADQgDADgEABIgBAAQgDAAgDgDgAQrNUIgvglQgEgDAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAFQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgAPNMJIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgANvK/IgvglQgEgCAAgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAMRJ1IgvglQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAKzIrIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAkQAEADAAAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAJVHhIgvglQgEgCAAgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAH3GXIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQAEACAAAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAGZFNIgvglQgEgCAAgFQAAgEACgDQADgDAEgBQAEAAADACIAvAmQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAE7EDIgvglQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgADdC5IgvglQgEgCAAgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAB/BvIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAAhAlIguglQgEgBAAgEQAAgFACgDQADgDAEgBQAEAAADADIAuAkQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAg8gkIgvglQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAiahuIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAkQAEADAAAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAj4i4IgvglQgEgCAAgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAlWkCIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQAEACAAAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAm0lMIgvglQgEgCAAgFQAAgEACgDQADgDAEgBQAEAAADACIAvAmQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAoSmWIgvglQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAvAlQAEADAAAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgApwngIgvglQgEgCAAgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgArOoqIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAssp0IgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAuKq+IgvglQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAvosIIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAkQAEADAAAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAxGtSIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBAAQgDAAgDgCgAykucIgvglQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADADIAvAlQAEACAAAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCg");
	this.shape_2.setTransform(687,432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},144).to({state:[{t:this.shape},{t:this.shape_1}]},20).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},20).wait(16));

	// text_1
	this.txt4_mc = new lib.anim_txt_4();
	this.txt4_mc.parent = this;
	this.txt4_mc.setTransform(216.5,539);
	this.txt4_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt4_mc).wait(10).to({_off:false},0).wait(190));

	// text_1
	this.txt3_mc = new lib.anim_txt_3();
	this.txt3_mc.parent = this;
	this.txt3_mc.setTransform(216.5,539);
	this.txt3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt3_mc).wait(10).to({_off:false},0).wait(190));

	// text_1
	this.txt2_mc = new lib.anim_txt_2();
	this.txt2_mc.parent = this;
	this.txt2_mc.setTransform(216.5,549.1,1,1,0,0,0,0,-29.4);
	this.txt2_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt2_mc).wait(10).to({_off:false},0).wait(190));

	// text_1
	this.txt1_mc = new lib.anim_txt_1();
	this.txt1_mc.parent = this;
	this.txt1_mc.setTransform(215,497.4);
	this.txt1_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt1_mc).wait(10).to({_off:false},0).to({_off:true},170).wait(20));

	// txt_Sydney
	this.instance = new lib.txt_Sydney("single",0);
	this.instance.parent = this;
	this.instance.setTransform(711.8,529);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({x:741.8,alpha:1},5,cjs.Ease.get(1)).wait(85).to({startPosition:1},0).to({x:721.8},5).to({x:741.8},5).wait(5).to({startPosition:2},0).wait(16));

	// map_marker
	this.instance_1 = new lib.map_marker("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(809.5,529,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:528.9},5).to({scaleX:1,scaleY:1,y:529},5).wait(85).to({rotation:135,startPosition:1},0).to({rotation:0},10,cjs.Ease.get(1)).wait(5).to({startPosition:3},0).wait(16));

	// txt_Jakarta
	this.instance_2 = new lib.txt_Jakarta("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(462.8,335);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({x:492.8,alpha:1},5,cjs.Ease.get(1)).wait(80).to({startPosition:1},0).to({x:472.8},5).to({x:492.8},5).wait(5).to({startPosition:2},0).wait(36));

	// map_marker
	this.instance_3 = new lib.map_marker("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(565.5,335,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2},5).to({scaleX:1,scaleY:1},5).wait(80).to({rotation:135,startPosition:1},0).to({rotation:0},10,cjs.Ease.get(1)).wait(5).to({startPosition:3},0).wait(36));

	// txt_Bangkok
	this.instance_4 = new lib.txt_Bangkok("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(414.8,208);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:444.8,alpha:1},5,cjs.Ease.get(1)).wait(75).to({startPosition:1},0).to({x:434.8},5).to({x:444.8},5).wait(5).to({startPosition:2},0).wait(56));

	// map_marker
	this.instance_5 = new lib.map_marker("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(522.5,208,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2},5).to({scaleX:1,scaleY:1},5).wait(75).to({rotation:135,startPosition:1},0).to({rotation:0},10,cjs.Ease.get(1)).wait(5).to({startPosition:3},0).wait(56));

	// txt_HongKong
	this.instance_6 = new lib.txt_HongKong("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(715.8,148);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({x:685.8,alpha:1},5,cjs.Ease.get(1)).wait(60).to({startPosition:1},0).to({x:695.8},5).to({x:685.8},5).wait(5).to({startPosition:2},0).wait(86));

	// map_marker
	this.instance_7 = new lib.map_marker("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(594.5,148,0.2,0.2,180,0,0,0.3,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:1.2,scaleY:1.2},5).to({regX:0.3,regY:0.3,scaleX:1,scaleY:1},5).wait(60).to({regX:0,regY:0,rotation:135,startPosition:1},0).to({rotation:270},10,cjs.Ease.get(1)).wait(5).to({startPosition:3},0).wait(86));

	// txt_completed
	this.instance_8 = new lib.txt_completed("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16.7,167.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({x:83.3},5).wait(20).to({startPosition:1},0).wait(20).to({startPosition:2},0).wait(20).to({startPosition:3},0).wait(16));

	// txt_MissionMap
	this.instance_9 = new lib.txt_MissionMap("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-145.8,122.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({x:164.2},5).wait(191));

	// bg
	this.instance_10 = new lib.bg_map("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(507,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(507,325,1014,650);
// library properties:
lib.properties = {
	width: 1014,
	height: 650,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_map.png?1528733158506", id:"BG_map"},
		{src:"images/map_marker_active.png?1528733158506", id:"map_marker_active"},
		{src:"images/map_marker_locked.png?1528733158506", id:"map_marker_locked"},
		{src:"images/map_marker_visited.png?1528733158506", id:"map_marker_visited"}
	],
	preloads: []
};





return lib;
}