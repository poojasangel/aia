
mainModel.controller('mapController', function ($scope, $rootScope,$timeout) {
	var oComponent = null;
        var tween1;
    $scope.ACTIVITY_RESET;

	var listener1=$scope.$on('ComponentLoaded', function (p_oEvent, p_oArguments) {
        var sComponentID = p_oArguments['componentID'];
        oComponent = p_oArguments['component'];
		oComponent.registerExternalMethod('animationComplete', this,
                $scope.animationComplete);
		oComponent.registerExternalMethod('allLevelComplete', this,
                $scope.allLevelComplete);		
				
		$scope.pauseAudio('spy_bg');
		$scope.pauseAudio('race_bg');		
        $scope.playAudio('map_bg');
    });
	$scope.animationComplete = function () {
		if(($scope.currentLevel==4) && ($scope.levels[3]['status'] == 2)){
			 
			 $scope.currentLevel++
		}
		oComponent.level="level"+$scope.currentLevel;
		oComponent.play();
		var e=$(".level"+$scope.currentLevel);
		e.off().on("click",function(){
			$scope.playAudio('map_popup');
                    $('#briefModal').modal('show');
        tween1=TweenMax.fromTo($("#briefModal"), 0.7, {scaleX: 0}, {scaleX: 1,
           transformOrigin:"50% 50%", onComplete: function () {
                
            }});
			//$scope.path("race"+$scope.currentLevel);
                        //$scope.$apply();
		})
    };
	$scope.allLevelComplete = function(){
		 $timeout( function(){
            $scope.path("score")
        }, 1000 );
	}
$scope.onBtnClick = function () {
    tween1.reverse();
     $timeout( function(){
            $scope.path("race"+$scope.currentLevel)
        }, 1000 );
     
    //.$scope.path("race"+$scope.currentLevel)
}
    $scope.destroy = function () {
		$scope.pauseAudio('map_bg');
        listener1();
        oComponent = null;
        TweenMax.killAll();
    };


    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });
});



