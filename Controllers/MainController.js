
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
	$scope.Learnername = "User Name";
	$scope.SuspendData = '';
	$scope.completion_status = 'incomplete'
	$scope.scorm;
	$scope.isLMS = false;
    $http({
        method: 'GET',
        url: 'data/levels.json'
    }).then(function (response) {
        $scope.levels = response.data;
		console.log('level loaded');
		//$scope.initLMS();
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
		console.log('level score')
		$scope.initLMS();
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
		$scope.currentQuestionNumber = 0;
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
	$scope.playAudioForDevice = function(){
		 for(var i=0;i<$scope.audioData.length;i++)
		{
			$scope.audioData[i]['oAudio'].play();
			$scope.audioData[i]['oAudio'].pause();
		}
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
		if($scope.currentLevel==4){
			$scope.completion_status = 'completed';
		}
        if($scope.currentLevel<4){
			$scope.currentLevel++;
			$scope.levels[$scope.currentLevel-1].status=1;
			
		}
		$scope.postData();
    };
     $scope.replayLevel = function(){
		$scope.pauseAudio('spy_bg');
		$scope.pauseAudio('race_bg');
        $scope.levels[$scope.currentLevel - 1]['life_rem']= $scope.levels[$scope.currentLevel - 1]['life'];
        $scope.path("map");
        
    };
	
	$scope.replayGame = function(){
		 $scope.currentLevel = 1;
		$scope.pauseAudio('spy_bg');
		$scope.pauseAudio('race_bg');
		$scope.randomiseQuestions();
		for(var i=0;i<4;i++){
			$scope.levels[i]['life_rem']= $scope.levels[i]['life'];
			$scope.score[i]['race']= 0;
			$scope.score[i]['scenario']= 0;
			$scope.score[i]['time_bonus']= 0;
			$scope.score[i]['life_bonus']= 0;
			if(i == 0){
				$scope.levels[i]['status']= 1;
			}else{
				$scope.levels[i]['status']= 0;
			}
		}
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
	
	$scope.initLMS  = function(){
		if(!$scope.isLMS){
			return
		}
		console.log("---- initLMS")
		$scope.scorm = pipwerks.SCORM;  //Shortcut

		var sScormVersion = '1.2';
		$scope.scorm.version = sScormVersion;
		$scope.lmsConnected = this.scorm.init();
		console.log($scope.lmsConnected);
		if($scope.lmsConnected){
			$scope.readData();
		}
	}
	
	$scope.readData  = function(){
		console.log("---- $scope.readData")
		$scope.completion_status = this.scorm.get("cmi.core.lesson_status") || 'incomplete';
        $scope.Learnername = this.scorm.get("cmi.core.student_name") || 'User name';
		$scope.SuspendData = this.scorm.get("cmi.suspend_data") || null;
	
		
		if($scope.SuspendData){
			var tempData = $scope.SuspendData.split("|");
			$scope.currentLevel = tempData[2];
			$scope.score = JSON.parse(tempData[1])
			
			var levelStatus = tempData[0].split('~');
			
			for(var i=0;i<4;i++){
				$scope.levels[i]['status'] = levelStatus[i]
			}
		}
		console.log($scope.score)
		console.log($scope.levels)
	}
	
	$scope.postData  = function(){
		if(!$scope.isLMS){
			return
		}
		
		/* $scope.levels[$scope.currentLevel-1].status=2;
		if($scope.currentLevel==4){
			$scope.completion_status = 'completed';
		}
        if($scope.currentLevel<4){
			var _level = $scope.currentLevel+1
			$scope.levels[_level].status=1;
		} */
		
		var levelStatus = "";
		for(var i=0;i<4;i++){
			levelStatus = levelStatus + $scope.levels[i]['status'] + "~";
		}
		
		
		 var total=0;
		$.each($scope.score,function(k,v){
			total += v.race;
			total += v.scenario;
			total += v.time_bonus;
			total += v.life_bonus;
		})
		
		var score = Math.round((total*100)/1320)
		
		console.log("---- $scope.postData")
		var suspendData = levelStatus+"|"+JSON.stringify($scope.score)+"|"+$scope.currentLevel;
		console.log("---- $scope.postData" + suspendData)
		$scope.scorm.set("cmi.suspend_data", suspendData);
		console.log("getTimeSpent()" + getTimeSpent())
		var time_result = $scope.scorm.set("cmi.core.session_time", getTimeSpent());
		console.log("time_result" + time_result)
		$scope.scorm.set("cmi.core.score.raw", score);
		 if ($scope.scorm.get("cmi.core.lesson_status") !== 'completed') {
			bCompletionstatus = $scope.scorm.set("cmi.core.lesson_status", $scope.completion_status);
		} 
		
        bSCORMSave = $scope.scorm.save();
	}
	
	$scope.setCompletion  = function(){
		if(!$scope.isLMS){
			return
		}
		console.log("---- $scope.setCompletion")
		$scope.completion_status = 'completed'
		if ($scope.scorm.get("cmi.core.lesson_status") !== 'completed') {
			bCompletionstatus = $scope.scorm.set("cmi.core.lesson_status", $scope.completion_status);
		} 
		$scope.scorm.set("cmi.core.session_time", getTimeSpent());
	}
	
		//$scope.initLMS();
	
	
	startTimer()
});


var startTime
function startTimer() {    
	startTime = new Date().getTime();
};

function getTimeSpent () {
        
        var date = new Date(),
			logoffTime = date.getTime(),
			timeDiff = logoffTime - this.startTime,
			sec = timeDiff / 1000,
			tmp = sec / 3600,
			hrs = Math.floor(tmp),
			min1 = (tmp - hrs) * 60,
			min = Math.floor(min1),
			sec1 = (min1 - min) * 60,
			sec = Math.floor(sec1);
        
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        var time = hrs + ":" + min + ":" + sec;
        return time;
    };



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