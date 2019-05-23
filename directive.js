routeModel.directive('simpleView', function ($controller, pageLoad) {
    return {
        template: '<div ng-include="templatePath" onload="finishLoading()"></div>',
        link: function ($scope) {

            pageLoad.onRouteChange(function (newRoute, oldRoute) {
                $scope.showLoader = true
                $scope.updateTime = Date.now();
                $scope.templatePath = newRoute.templateUrl + "?updated="
                        + $scope.updateTime;
                $controller(newRoute.controller, {$scope: $scope});
            });

            var currentRoute = pageLoad.getCurrent();
            if (currentRoute) {
                pageLoad.path(currentRoute.path);
            }
        }
    };
});
mainModel.directive("ngObstacle", function ($rootScope) {
    return {
        restrict: 'A',
        template: '<div class="inner_hidden_cont"></div>',
        link: function (scope, elem, attrs) {
            var ele = $(elem).find(".inner_hidden_cont");
            var style = attrs.actualhtwd.split(",");
            ele.css({"width": style[0], "height": style[1]})
            var listener = $rootScope.$on('timeChange', function (event,
                    args) {
//                /console.log(attrs.time + "==" + args.time)
                if (attrs.time == args.time)
                {
                    // Create a tween
                    var tween = TweenLite.to($(elem), attrs.speed, {
                        left: "1022px", ease: Power0.easeNone,
                        onUpdate: function () {
                            if (collision($(elem).find(".inner_hidden_cont"),
                                    $(".myvehicle > .inner_hidden_cont")))
                            {
                                scope.$emit('COLLISION', {});


                                tween.kill();
                                $(elem).hide();

                            }
                        }});

                }

                function collision($div1, $div2) {
                    var x1 = $div1.offset().left/zoomX;
                    var y1 = $div1.offset().top/zoomY;
                    var h1 = $div1.outerHeight();
                    var w1 = $div1.outerWidth();
                    var b1 = y1 + h1;
                    var r1 = x1 + w1;
                    var x2 = $div2.offset().left/zoomX;
                    var y2 = $div2.offset().top/zoomY;
                    var h2 = $div2.outerHeight();
                    var w2 = $div2.outerWidth();
                    var b2 = y2 + h2;
                    var r2 = x2 + w2;

                    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
                    return true;
                }
            });
            scope.$on('$destroy', function () {
                listener()

            });
        }
    };
});
mainModel.directive('ngVehicle',
        ['$window', '$document',
            function ($window, $document) {
                return {
                    restrict: 'A',
                    template: '<div class="inner_hidden_cont"></div><div id="collision"><img src="images/DashAnim_spritesheet.png" alt=""/></div>',
                    link: function (scope, element, attrs) {
                        var ele = $(element).find(".inner_hidden_cont");
                        var style = attrs.actualhtwd.split(",");
                        var isCar =$(element).hasClass("car");
                        var isBike =$(element).hasClass("bike");
                        var isPlane =$(element).hasClass("plane");
                        ele.css({"width": style[0], "height": style[1]})
                        var anim = false, lane = 2;
                        $document.bind('keydown', function (e) {
                            if (anim || scope.operation=="resume" || scope.operation=="noTimer") return;

                            switch (e.keyCode) {

                                case 38:
                                    moveDown();
                                    break;

                                case 40:
                                    moveUp()
                                    break;
                            }
                        })
                        $(element).parent().swipe({
                            //Generic swipe handler for all directions
                            swipe: function (event, direction, distance,
                                    duration, fingerCount, fingerData) {
                                if (anim || scope.operation=="resume" || scope.operation=="noTimer") return;
                                if (direction == "up")
                                {
                                    moveDown();
                                    
                                }
                                else if (direction == "down")
                                {
                                    moveUp();
                                }
                            },
                            //Default is 75px, set to 0 for demo so any distance triggers swipe
                            threshold: 20,
                            excludedElements: "button"
                        });

                        function moveDown() {
                            if (lane - 1 == 0) return;
                            anim = true;
                            if(isCar || isBike)
                                TweenLite.to($(element), 0.5, {rotation:20, transformOrigin:"left 50%"});
                            else if(isPlane)
                                TweenLite.to($(element), 0.5, {rotation:10, transformOrigin:"left 50%"});
                            var tween = TweenLite.to($(element),
                                    0.5, {
                                        top: "-=" + attrs.dist,
                                        ease: Power0.easeNone,
                                        onComplete: function () {
                                                TweenLite.to($(element), 0.4, {rotation:0, transformOrigin:"left 50%"});
                                            anim = false;
                                            lane--;
                                        }});
                        }

                        function moveUp()
                        {
                            if (lane + 1 > 3) return;
                            anim = true;
                            if(isCar || isBike)
                                TweenLite.to($(element), 0.5, {rotation:-20, transformOrigin:"left 50%"});
                            else if(isPlane)
                                TweenLite.to($(element), 0.5, {rotation:-10, transformOrigin:"left 50%"});
                            var tween = TweenLite.to($(element),
                                    0.5, {
                                        top: "+=" + attrs.dist,
                                        ease: Power0.easeNone,
                                        onComplete: function () {
                                                TweenLite.to($(element), 0.4, {rotation:0, transformOrigin:"left 50%"});
                                            anim = false;
                                            lane++;
                                        }});
                        }
                    }
                };
            }
        ]);
mainModel.directive(
        'animate',
        [
            '$timeout',
            function ($timeout) {
                return {
                    'restrict': 'E',
                    'transclude': false,
                    'controller': function ($scope) {
                    },
                    'compile': function (p_o$Element, p_oAttributes) {
                        return {
                            post: function ($scope, p_o$Element,
                                    p_oAttributes) {
                            },
                            pre: function ($scope, p_o$Element,
                                    p_oAttributes) {
                                var sCurrentPage = $scope.getCurrentPage(),
                                        sJsPath = p_oAttributes.src,
                                        sComponentID = p_oAttributes.id,
                                        sContainerId = p_oAttributes.contid,
                                        bAutoPlay = (p_oAttributes.autoplay
                                                !== undefined),
                                        oExportRoot = null,
                                        $canvas = document.createElement(
                                                "canvas"),
                                        sClassName =
                                        (typeof p_oAttributes.hidden
                                                !== 'undefined'
                                                ? 'hide' : ''),
                                        dWidth = parseFloat(
                                                p_oAttributes.width),
                                        dHeight = parseFloat(
                                                p_oAttributes.height),
                                        sJSContent = '',
                                        sCurrentPageID =
                                        sCurrentPage.id;
                                $canvas.width = dWidth;
                                $canvas.height = dHeight;
                                $scope.images = {};
                                $.getScript(sJsPath)
                                        .done(function (script,
                                                textStatus) {
                                            $scope.directives.push(
                                                    sContainerId)
                                            createjs.MotionGuidePlugin.install();
                                            var oTimeline =
                                                    window[sComponentID.toUpperCase()]();
                                            //delete window[sComponentID.toUpperCase()];
                                            //oExportRoot = new oTimeline[sComponentID]();
                                            //alert("----")
                                            var fOnFileLoad =
                                                    function (
                                                            p_oEvent) {
                                                        if (p_oEvent.item.type
                                                                == "image") {
                                                            $scope.$apply(
                                                                    function () {
                                                                        $scope.images[p_oEvent.item.id] =
                                                                                p_oEvent.result;
                                                                    });
                                                        }
                                                    },
                                                    fOnHandleComplete =
                                                    function (
                                                            p_oEvent) {
                                                        if (p_oEvent) {
                                                            p_oEvent.target.removeEventListener(
                                                                    "fileload",
                                                                    fOnFileLoad);
                                                            p_oEvent.target.removeEventListener(
                                                                    "complete",
                                                                    fOnHandleComplete);
                                                        }

                                                        //alert("----" + oTimeline.properties.manifest.length)
                                                        if (oTimeline.properties.manifest.length) {

                                                            var ss =
                                                                    oTimeline.getSprite();

                                                            var queue =
                                                                    p_oEvent.target;
                                                            var ssMetadata =
                                                                    oTimeline.ssMetadata;
                                                            //alert("----"+ssMetadata.length)
                                                            for (i =
                                                                    0;
                                                                    i
                                                                    < ssMetadata.length;
                                                                    i++) {
                                                                ss[ssMetadata[i].name] =
                                                                        new createjs.SpriteSheet
                                                                        (
                                                                                {
                                                                                    "images": [
                                                                                        queue.getResult(
                                                                                                ssMetadata[i].name)
                                                                                    ],
                                                                                    "frames": ssMetadata[i].frames
                                                                                })
                                                            }
                                                        }

                                                        oTimeline.images(
                                                                $scope.images);
                                                        oExportRoot =
                                                                new oTimeline[sComponentID]();

                                                        oExportRoot.stop();

                                                        oStage =
                                                                new createjs.Stage(
                                                                        $(
                                                                                '#'
                                                                                + sCurrentPageID
                                                                                + '-'
                                                                                + sContainerId
                                                                                + ' > canvas').
                                                                        get(
                                                                                0));
                                                        oStage.addChild(
                                                                oExportRoot);
                                                        oStage.enableMouseOver();
                                                        oStage.update();

                                                        createjs.Ticker.setFPS(
                                                                oTimeline.properties.fps);
                                                        createjs.Ticker.addEventListener(
                                                                "tick",
                                                                oStage);

                                                        if (p_oEvent) {
                                                            p_oEvent.target.removeEventListener(
                                                                    "complete",
                                                                    fOnHandleComplete);
                                                        }
                                                        if (bAutoPlay
                                                                === true) {
                                                            oExportRoot.play();
                                                        }
                                                        oExportRoot.getContainer =
                                                                function () {
                                                                    return $(
                                                                            '#'
                                                                            + sCurrentPageID
                                                                            + '-'
                                                                            + sContainerId);
                                                                };
                                                        oExportRoot.methods =
                                                                {};
                                                        oExportRoot.registerExternalMethod =
                                                                function (
                                                                        p_sKey,
                                                                        p_oContext,
                                                                        p_fCallback) {
                                                                    if (typeof this['methods']
                                                                            === 'undefined') {
                                                                        this['methods'] =
                                                                                {};
                                                                    }
                                                                    if (typeof p_oContext
                                                                            !== 'object') {
                                                                        p_oContext =
                                                                                window;
                                                                    }
                                                                    if (typeof p_fCallback
                                                                            !== 'function') {
                                                                        p_fCallback =
                                                                                angular.noop;
                                                                    }

                                                                    this['methods'][p_sKey] =
                                                                            p_fCallback.bind(
                                                                                    p_oContext);
                                                                    return this;
                                                                };
                                                        oExportRoot.toString =
                                                                (function (
                                                                        p_sComponentID) {
                                                                    return function () {
                                                                        return p_sComponentID;
                                                                    };
                                                                })(
                                                                sCurrentPageID
                                                                + '-'
                                                                + sContainerId);
                                                        $scope.animateFileLoaded=true;
                                                        $scope.$emit(
                                                                'ComponentLoaded',
                                                                {
                                                                    pageID: sCurrentPage,
                                                                    componentID: sCurrentPageID
                                                                            + '-'
                                                                            + sContainerId,
                                                                    type: 'animate',
                                                                    component: oExportRoot
                                                                }
                                                        );
                                                    };

                                            p_o$Element.replaceWith(
                                                    '<div ' +
                                                    'id="'
                                                    + sCurrentPageID
                                                    + '-'
                                                    + sContainerId
                                                    + '" ' +
                                                    'style="width: '
                                                    + $canvas.width
                                                    + 'px; height: '
                                                    + $canvas.height
                                                    + 'px;"'
                                                    +
                                                    (sClassName
                                                            ? ' class="'
                                                            + sClassName
                                                            + '"'
                                                            : '') +
                                                    '>' +
                                                    '</div>'
                                                    );
                                            $('#'
                                                    + sCurrentPageID
                                                    + '-'
                                                    + sContainerId).
                                                    html(
                                                            $canvas);
                                            /*==== Update Asset Path ====*/
                                            for (var i = 0; i
                                                    < oTimeline.properties.manifest.length;
                                                    i++) {
                                                var item =
                                                        oTimeline.properties.manifest[i];
                                                if (
                                                        item.src
                                                        && (
                                                                item.src.indexOf(
                                                                        'images/')
                                                                !== -1
                                                                ||
                                                                item.src.indexOf(
                                                                        'sounds/')
                                                                !== -1
                                                                )
                                                        ) {
                                                    oTimeline.properties.manifest[i].src =
                                                            'animations/'
                                                            + item.src;
                                                }
                                            }
                                            /*== End Update Asset Path ==*/

                                            var loader =
                                                    new createjs.LoadQueue(
                                                            false);
                                            loader.installPlugin(
                                                    createjs.Sound); // line added by Somnath for sound plugin
                                            loader.addEventListener(
                                                    "fileload",
                                                    fOnFileLoad);
                                            loader.addEventListener(
                                                    "complete",
                                                    fOnHandleComplete);

                                            if (oTimeline.properties.manifest.length) {
                                                loader.loadManifest(
                                                        oTimeline.properties.manifest);
                                            }
                                            else {
                                                fOnHandleComplete();
                                            }
                                        });
                            }
                        };
                    }
                };
            }
        ]
        );
mainModel.directive('quiz', function ($timeout) {
    return {
        restrict: 'AE',
        scope: {
        },
        template: '<div ng-show="quizOver" class="quiz-result"><div ng-show="correctAns" class="quiz_correct"><div class="cd1">Device unlocked!</div><div class="cd2">Passcode Retrieved</div><div style="color: #fffc00;font-family: RusSq;text-align: center;font-size: 48px;padding-top: 10px;">{{pass}}</div><button class="btn_continue" ng-click="onQuizComplete()" /></div><div ng-show="!correctAns" class="quiz_incorrect"><div class="cd1">Incorrect answer!</div><div class="cd2">Alert notification sent to guard.</div><button class="btn_retry" /></div></div><div ng-show="!quizOver" class="quiz-area" ><div id="topic_name">{{topic_name}}</div><div ng-show="!quizOver"> <div id="question" ng-bind-html="question"></div> <ul id="options" ng-class="type"><li ng-repeat="option in options"><span class="showcorrincorr"></span><input type="checkbox" name="question_{{id}}" value="{{$index}}" id="checkbox{{$index}}" />  <label for="checkbox{{$index}}"><span class="poll_result"><span>{{poll[$index]}}</span>%</span><span ng-bind-html="option"></span></label> </li> </ul> <button ng-click="checkAnswer()" ng-show="answerMode" class="btn_submit">Submit</button> <div ng-show="!answerMode"> <button ng-click="nextQuestion()" class="next-question">Next</button>  </div> </div></div>',
        //transclude: true,
        link: function (scope, elem, attrs) {

            $("#questionModal").on('hide.bs.modal', function () {
                scope.reset();
            });
            $(elem).on("change", "input[type='checkbox']", function () {
                if (scope.type == "mcq") {
                    var group = "input:checkbox[name='" + $(this).prop("name")
                            + "']";
                    $(group).prop("checked", false);
                    $(this).prop("checked", true);
                }
            });
            scope.onQuizComplete = function () {
                $('#questionModal').modal('hide');
                scope.$emit('QUIZ_COMPLETE', {});
            };
            $(elem).on("click", ".btn_retry", function () {
                scope.quizOver = false;
                $('#questionModal').modal('hide');
                scope.$emit('QUIZ_FAIL', {});
            });

            scope.start = function () {
                $(".hints").show();
                scope.getQuestion();
                scope.$apply();
            };

            scope.reset = function () {
                scope.id = 0;
                scope.quizOver = false;
                scope.type;
                scope.score = 0;
                scope.options=[]
            }

            scope.getQuestion = function () {
                var q = scope.quizquestions[scope.id];
                if (typeof q != undefined && typeof q != "undefined") {
                    scope.question = q.question;
                    scope.options = q.options;
                    scope.poll = q.poll;
                    scope.answer = q.answer;
                    scope.topic_name = q.topic_name;
                    scope.answerMode = true;
                    if (!$.isArray(scope.answer)) {
                        scope.type = "mcq";
                        scope.answer = [scope.answer];
                    }
                    else
                        scope.type = "mmcq";


                } else {
                    $(".hints").hide();
                    scope.quizOver = true;

                }
            };

            scope.checkAnswer = function () {
                if (!$('input[name=question_' + scope.id + ']:checked').length)
                    return;
                var ans = $('input:checked').map(function () {

                    return $(this).val();

                });
                ans = ans.get();
                $(elem).find(".poll_result").hide();
                var is_same = ans.length == scope.answer.length && ans.every(
                        function (element, index) {
                            return element == scope.answer[index];
                        });
                if (is_same) {
                    scope.score++;
                    scope.correctAns = true;
                    e=$('.passcode ul').find("li:not(.shown)")[0];
                    scope.pass=$(e).find(".p_show").html();
                    scope.nextQuestion()

                } else {
                    $(".hints").hide();
                    scope.correctAns = false;;
                     scope.quizOver = true;
                    //alert("Game restart");
                }
                $.each(scope.answer, function (k, v) {
                    $(elem).find("#options li:nth-of-type(" + (v + 1) + ")").
                            addClass("correct")
                })
                $.each(ans, function (k, v) {
                    if ($.inArray(parseInt(v), scope.answer) == -1)
                    {
                        $($(elem).find("#options li")[v]).addClass("incorrect")
                    }

                });
//                $.each(difference,function(k,v){
//                    $(elem).find("#options li:nth-of-type("+(v+1)+")").addClass("incorrect")
//                })
                //scope.answerMode = false;


            };

            scope.nextQuestion = function () {
                
                scope.id++;
                scope.getQuestion();
            }

            scope.reset();

            scope.$on('START_QUIZ', function (event, params) {
                scope.quizquestions = params.quizquestions;
                scope.start()
            });
            scope.$on('SHOW_HINT', function (event, params) {
                if (params.hint == 1)
                {
                    var i = 1, r, r_old;
                    while (i < (scope.options.length-1)) {
                        r = Math.floor(Math.random() * scope.options.length);
                        if (r != r_old && r != scope.answer)
                        {
                            i++;
                            $("ul#options li:nth-of-type(" + (r + 1) + ")").
                                    fadeOut();
                            r_old = r;
                        }
                    }

                }
                else
                {
                    var e = $(elem).find(".poll_result")
                    e.show();
                    e.each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).find("> span").text()
                        }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).find("> span").text(Math.ceil(now));
                            }
                        });
                    });
                }
            });


        }
    }
});
function playSound(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
function muteSound(mute) {
    createjs.Sound.muted = mute;
}
function setVolume(vol) {
    createjs.Sound.volume = vol;
}