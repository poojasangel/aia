function tiggerInputChange()
{
    $('input[name=answer]').trigger("input");
	 //$scope.playAudio('keypad');
}
mainModel.controller('mission1Controller', function ($scope, $interval,
        $rootScope) {
    $scope.timer = 0;
    var gameTime;
    var oComponent = null;
    $scope.ACTIVITY_RESET;
    $scope.isHint1Av = true;
    $scope.isHint2Av = true;
    $(document).on("input", 'input[name=answer]', function () {
		 $scope.playAudio('keypad');
        if (this.value.length == $scope.passcode.length)
        {
            $("form .blink").hide();
            if (this.value == $scope.levels[$scope.currentLevel
                    - 1]['passcode'].toString())
            {
                $("#calc-contain").addClass("correct")
            }
            else
            {
                $("#calc-contain").removeClass("correct")
            }
        }
        else
        {
            $("form .blink").show();
            $("#calc-contain").removeClass("correct")
        }
    });

    var listener1 = $scope.$on('ComponentLoaded', function (p_oEvent,
            p_oArguments) {
        var sComponentID = p_oArguments['componentID'];
        oComponent = p_oArguments['component'];
        oComponent.registerExternalMethod('showQuestions', $scope,
                $scope.showQuestions);
        oComponent.registerExternalMethod('ninjaKilled', $scope.n,
                $scope.ninjaKilled);
        oComponent.registerExternalMethod('onServerClicked', $scope.n,
                $scope.onServerClicked);
		oComponent.registerExternalMethod('ninjaExit', $scope.n,
                $scope.ninjaExit);
        $scope.passcode = $scope.levels[$scope.currentLevel
                - 1]['passcode'].toString().split('');
				
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

		$scope.playAudio('spy_bg')
    });
    
    
    $scope.showScore = function () {
		// Ninja Exit
		 $('#levelOverModal').modal('hide');
		 oComponent.ninjaExit();
        /*  $('#levelOverModal').modal('hide');
        $('#scoreModal').modal('show');
        tween1=TweenMax.fromTo($("#scoreModal .modal-dialog"), 0.7, {scaleX: 0}, {scaleX: 1,
           transformOrigin:"50% 50%", onComplete: function () {
                
            }}); */
    }
    
    $scope.startTimer = function (time) {

        gameTime = $interval(function (e) {
            $scope.timer++;
            $scope.$emit('timeChange', {time: e});
            if ($scope.timer == time)
            {
                $interval.cancel(gameTime);
                gameTime = null;
                $scope.failmsg="Time's Up!";
                $('#failModal').modal('show');
                //oComponent.background.stop();
                //alert("Next level")
            }
        }, 1000);
    };
    $scope.stopTimer = function () {

        $interval.cancel(gameTime);
        gameTime = null;
    };

    $scope.ninjaExit = function () {

         
        $('#scoreModal').modal('show');
        tween1=TweenMax.fromTo($("#scoreModal .modal-dialog"), 0.7, {scaleX: 0}, {scaleX: 1,
           transformOrigin:"50% 50%", onComplete: function () {
                
            }}); 
    };
	 $scope.onServerClicked = function () {

        $('#questionModal').modal('hide');
        $('#passcodeModal').modal('show');
    };
    $scope.showQuestions = function (key) {
        if (typeof key === 'string')
            key = [key];
        var quizquestions = [];
		if($scope.currentQuestionNumber == $scope.randomSequence.length){
			$scope.randomiseQuestions();
		}
        $.each(key, function (k, v) {
			 quizquestions.push($scope.questions[$scope.randomSequence[$scope.currentQuestionNumber]])
			$scope.currentQuestionNumber++
            //quizquestions.push($scope.questions[v])
        });
        $('#questionModal').modal('show');
        TweenMax.fromTo($("#questionModal"), 0.7, {scaleY: 0}, {scaleY: 1,
            transformOrigin: "0% 50%", onComplete: function () {
                $rootScope.$broadcast("START_QUIZ", {
                    "quizquestions": quizquestions});
            }});


    }
    $scope.passcodeEnter = function ($event) {

        if ($('input[name=answer]').val() == $scope.levels[$scope.currentLevel
                - 1]['passcode'].toString())
        {
            updateScore();
            $('#passcodeModal').modal('hide');
            $('#levelOverModal').modal('show');
			$scope.playAudio('mission_win');
            $scope.operation="resume"
        }

    }
    var updateScore= function()
    {
        $scope.score[$scope.currentLevel-1]['race']=100;
        if($scope.isHint1Av && $scope.isHint2Av)
            $scope.score[$scope.currentLevel-1]['scenario']=200;
        else
            $scope.score[$scope.currentLevel-1]['scenario']=150;
        if( $scope.timer <= (60*5))
            $scope.score[$scope.currentLevel-1]['time_bonus']=10;
        $scope.score[$scope.currentLevel-1]['life_bonus']=($scope.levels[$scope.currentLevel - 1]['life_rem']*5);
        $scope.total=0;
        $scope.cTotal=0;
        $.each($scope.score,function(k,v){
            if(k!= ( $scope.currentLevel-1))
            {
                 $scope.total+=v.race;
                 $scope.total+=v.scenario;
                 $scope.total+=v.time_bonus;
                 $scope.total+=v.life_bonus;
            }
            else
            {
                $scope.cTotal+=v.race;
                 $scope.cTotal+=v.scenario;
                 $scope.cTotal+=v.time_bonus;
                 $scope.cTotal+=v.life_bonus;
            }
        })
        
    }
	
	 $scope.startRace = function () {
        tween.reversed(true);
        tween.reversed($(".helpModal").fadeOut(function () {
            $scope.operation = "pause";
            $scope.$apply();
        }));

    };
    
    var listener4 = $scope.$watch('operation', function (val) {

        if (val == "resume") {
            $scope.stopTimer();
           
        }
        else if (val == "pause") {
            $scope.startTimer(420);
            
        }
    });
    $scope.ninjaKilled = function () {
        $scope.levels[$scope.currentLevel - 1]['life_rem']--;
		$scope.replaceQuestion();
        setTimeout(function(){ oComponent.resetFloor(); }, 1000);
        
        if ($scope.levels[$scope.currentLevel - 1]['life_rem'] == 0) {
            $scope.failmsg="No lives left!";
             $('#failModal').modal('show');
			 $scope.playAudio('mission_fail');
             $scope.operation="resume"
        }

    }
    $scope.hint1 = function ($event) {
        if ($($event.currentTarget).hasClass("disabled")) return false;
        $rootScope.$broadcast("SHOW_HINT", {hint: 1});
        $scope.isHint1Av = !$scope.isHint1Av
    };
    $scope.hint2 = function ($event) {
        if ($($event.currentTarget).hasClass("disabled")) return false;
        $rootScope.$broadcast("SHOW_HINT", {hint: 2});
        $scope.isHint2Av = !$scope.isHint2Av
    };
    var listener2 = $scope.$on('QUIZ_COMPLETE', function (p_oEvent,
            p_oArguments) {
        var e = $('.passcode ul').find("li:not(.shown)")[0];
        $(e).addClass("shown")
        TweenMax.to($(e).find(".p_show"), 1, {height: "100%",
            ease: Linear.easeNone});

        oComponent.onQuizComplete();
		$scope.playAudio('correct_answer');
    });
    var listener3 = $scope.$on('QUIZ_FAIL', function (p_oEvent, p_oArguments) {
		$scope.playAudio('incorrect_answer');
        $('#questionModal').modal('hide');
        oComponent.shootNinja();
        //$scope.replayLevel();
        //$scope.$apply()
    });



    $scope.destroy = function () {
        $interval.cancel(gameTime);
        gameTime = null;
        oComponent = null;
        $scope.isHint1Av = null;
        $scope.isHint2Av = null;
        TweenMax.killAll();
        listener1();
        listener2();
        listener3();
        listener4()
    };


    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });
	$scope.helpNext = function(){
		$('#help1').hide();
		$('#help2').show();
	}
	$scope.helpBack = function(){
		$('#help2').hide();
		$('#help1').show();
	}

   // $scope.startTimer(420);
});



