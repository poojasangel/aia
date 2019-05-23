
mainModel.controller('MainCtrl', function ($scope, $timeout, pageLoad,
        $rootScope, $http, $filter) {
    $scope.showLoader;
    $scope.directives = [];
    $scope.animateFileLoaded=0;
    $scope.currentLevel = 1;
    $scope.operation="noTimer";
    $scope.loaderImg = new Image();
    $scope.loaderImg.src='images/preLoader4.gif';
	$scope.randomSequence = [];
	$scope.currentQuestionNumber = 0;
    $http({
        method: 'GET',
        url: 'data/levels.json'
    }).then(function (response) {
        $scope.levels = response.data;
    }, function (error) {

    });
    $http({
        method: 'GET',
        url: 'data/questions.json'
    }).then(function (response) {
        $scope.questions = response.data;
		//console.log("Before random\n"+JSON.stringify($scope.questions));
		 $scope.randomiseQuestions();
		
		//console.log("After random\n"+$scope.randomSequence);
    }, function (error) {

    });
    $http({
        method: 'GET',
        url: 'data/score.json'
    }).then(function (response) {
        $scope.score = response.data;
    }, function (error) {

    });
	
	$http({
        method: 'GET',
        url: 'data/audio.json'
    }).then(function (response) {
        $scope.audioData = response.data;
		$scope.initAudios();

    }, function (error) {

    });
	$scope.replaceQuestion = function(){
		var res = $scope.randomSequence.splice($scope.currentQuestionNumber-1,1);
		$scope.randomSequence.push(res);
		console.log('replaceQuestion:'+res+"::New Sequence::"+$scope.randomSequence);
		$scope.currentQuestionNumber--;
	}
	$scope.randomiseQuestions = function(){
		var startCnt = 1;
		var randomArr = []
		for(var i in $scope.questions){
			randomArr.push(i);
			startCnt++;
		}
		$scope.randomSequence = shuffle(randomArr);
		console.log('randomiseQuestions::First Sequence::'+$scope.randomSequence);
	 }
	 $scope.initAudios = function(){
        for(var i=0;i<$scope.audioData.length;i++)
		{
			var audioElement = document.createElement('audio');
			audioElement.setAttribute('src', $scope.audioData[i].name);
			audioElement.setAttribute('id', $scope.audioData[i].id);
			audioElement.muted = $scope.audioData[i].muted
			$scope.audioData[i]['oAudio'] = audioElement;
			audioElement.volume=$scope.audioData[i].volume;
		}
		 console.log("initAudio");
		console.log($scope.audioData); 
		
		//$scope.playAudio('bg');
    }
	$scope.playAudio = function(audioId){
		console.log("playAudio" +audioId);
		
		var obj = $filter('filter')($scope.audioData, {id:audioId})
		console.log(obj); 
		
		
		obj[0]['oAudio'].currentTime = 0
		obj[0]['oAudio'].play();
		if( obj[0]['loop']){
			obj[0]['oAudio'].addEventListener("ended",function(){
			this.currentTime = 0;
			this.play();
		}); 
		};
		return obj[0]['oAudio'];
	}
	$scope.pauseAudio = function(audioId){
		var obj = $filter('filter')($scope.audioData, {id:audioId})
		//console.log(obj[0].name);
		 obj[0]['oAudio'].pause();
	}
	$scope.isPlaying= function(audioId){
		myAudio = $filter('filter')($scope.audioData, {id:audioId})

		if (myAudio[0]['oAudio'].duration > 0 && !myAudio[0]['oAudio'].paused) {
			return true
		} else {
			return false
		}
	}
	$scope.muteAll = function(mute){
		for(var i=0;i<$scope.audioData.length;i++)
		{
			$scope.audioData[i]['oAudio'].muted = mute;
		}
		muteSound(mute)
	}
	$scope.setVolume = function(val){
		for(var i=0;i<$scope.audioData.length;i++)
		{
			$scope.audioData[i]['oAudio'].volume = val;
			setVolume(val)
		};
		/*
		if(val==0) {
			$scope.$apply(function () {
				$scope.aOperation="on";$scope.muteAll(true)
			}); 				   
		}
		else 
		{
			if($scope.aOperation=="on") {
				$scope.$apply(function () {
					$scope.aOperation="off";$scope.muteAll(false)
				}); 
			}							
		}*/
	}
							
    $scope.onLevelComplete = function(){
        $scope.levels[$scope.currentLevel-1].status=2;
        if($scope.currentLevel<4){
        $scope.currentLevel++;
        $scope.levels[$scope.currentLevel-1].status=1;
    }
    };
     $scope.replayLevel = function(){
		$scope.pauseAudio('spy_bg');
		$scope.pauseAudio('race_bg');
        $scope.levels[$scope.currentLevel - 1]['life_rem']= $scope.levels[$scope.currentLevel - 1]['life'];
        $scope.path("map");
        
    };











    $scope.path = function (path) {
        $rootScope.$emit("ACTIVITY_RESET", {});

        $.each($scope.directives, function (k, v)
        {

            delete window[v.toUpperCase()];
        });
        createjs.Ticker.reset();
        $scope.directives = [];
        $scope.animateFileLoaded=0;
        $scope.operation= "noTimer";
        pageLoad.path(path);
    };
    $scope.getCurrentPage = function () {
        return pageLoad.getCurrent()
    };

    $scope.finishLoading = function () {
        var total_d=$(".animation").length;
        
        if (total_d == 0)
        {
            $scope.showLoader = false;
        }
        else
        {
            var listener = $scope.$on('ComponentLoaded', function (p_oEvent,
                    p_oArguments) {

                    $scope.animateFileLoaded++;
                    if($scope.animateFileLoaded != total_d)
                    {
                        $scope.finishLoading();
                    }
                    else
                    {
                        
                        $scope.showLoader = false;
                        $scope.$apply();
                        listener();
                    }

            });
        }

    }
//    $scope.$watch('showLoader', function (val) {
//        if(val)
//        {
//            $("#page-loading > img").attr('src',$scope.loaderImg.src);
//        }
//        
//    });
    $scope.getTimes = function (n) {
        var temp = [];
        for (var j = 0; j < n; j++) {
            temp.push(j)
        }
        return temp;
    };
    $scope.pauseOrPlay = function ($event) {

        $scope.operation = ($scope.operation === 'resume') ? 'pause'
                : 'resume';

    }
});






function shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	  }

	  return array;
};