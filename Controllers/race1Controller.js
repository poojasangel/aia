
mainModel.controller('race1Controller', function ($scope, $interval,
        $rootScope) {

    $scope.timer = 0;
    var gameTime;
    var oComponent = null;
    var tween = null;
    $scope.ACTIVITY_RESET;

    var listener2 = $scope.$on('ComponentLoaded', function (p_oEvent,
            p_oArguments) {
        var sComponentID = p_oArguments['componentID'];
        oComponent = p_oArguments['component'];
        oComponent.background.stop();
        oComponent.stopAnimation();
        setTimeout(function () {
            $(".helpModal").fadeIn(function () {
                tween = TweenLite.to($(this).find(".help_cont"),
                        0.5, {
                            height: "491",
                            ease: Linear.easeNone,
                            onComplete: function () {

                            }});
            }
            );
        }, 100);
		$scope.playAudio('race_bg');
    });

    var listener3 = $scope.$on('COLLISION', function (p_oEvent, p_oArguments) {
        $scope.levels[$scope.currentLevel - 1]['life_rem']--;
        $scope.stopTimer();
		$scope.pauseAudio('bike');
        oComponent.background.stop();
        oComponent.stopAnimation();
		$scope.playAudio('car_crash');
        TweenMax.pauseAll();
        var imgHeight = 152;
        var numImgs = 13;
        var cont = 0;
        $('#collision').show()
        var animation = $interval(function () {
            var position = -1 * (cont * imgHeight);
            $('#collision').find('img').css('margin-left', position);
            cont++;
            if (cont == numImgs) {
                $interval.cancel(animation);
                $('#collision').removeAttr("style").find("img").removeAttr(
                        "style");
                if ($scope.levels[$scope.currentLevel - 1]['life_rem'] != 0) {
                    $scope.startTimer(30);
                    TweenMax.resumeAll();
                    oComponent.background.play();
                    oComponent.playAnimation();
					$scope.playAudio('bike');
                }
                else
                {
                    $scope.operation="resume"
                    $('#failModal').modal('show');
					$scope.playAudio('mission_fail');
					$scope.pauseAudio('bike');
                }
            }
        }, 50);


    });
    $scope.startTimer = function (time) {
		$scope.playAudio('bike');
        gameTime = $interval(function (e) {
            $scope.timer++;
            $scope.$emit('timeChange', {time: $scope.timer});
            if ($scope.timer == time)
            {
				$scope.playAudio('mission_win');
				$scope.pauseAudio('bike');
                $scope.operation="resume"
                $(".raceEndModal").fadeIn(function () {
                    tween = TweenLite.to($(this).find(".raceend_cont"),
                            0.5, {
                                bottom: "-3px",
                                ease: Linear.easeNone,
                                onComplete: function () {

                                }});
                }
                );
            }
        }, 1000);
    };
    $scope.stopTimer = function () {

        $interval.cancel(gameTime);
        gameTime = null;
    };
    $scope.startRace = function () {
        tween.reversed(true);
        tween.reversed($(".helpModal").fadeOut(function () {
            $scope.operation = "pause";
            $scope.$apply();
        }));

    };
    var listener1 = $scope.$watch('operation', function (val) {

        if (val == "resume") {
            $scope.stopTimer();
            $(".car").removeClass("rotate")
            if (oComponent != null) {
                oComponent.background.stop();
                oComponent.stopAnimation();
				$scope.pauseAudio('race_bg');
            }
            TweenMax.pauseAll();
        }
        else if (val == "pause") {
            $scope.startTimer(30);
            $(".car").addClass("rotate")
            TweenMax.resumeAll();
            if (oComponent != null) {
                oComponent.background.play();
                oComponent.playAnimation();
				$scope.playAudio('race_bg');
            }
        }
    });
    $scope.startMission = function ()
    {
		$scope.pauseAudio('race_bg');
        $scope.path('mission1');
    }




    $scope.destroy = function () {
        $interval.cancel(gameTime);
        gameTime = null;
        oComponent = null;
        TweenMax.killAll();
        listener1();
        listener2();
        listener3();
    };


    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });



});



