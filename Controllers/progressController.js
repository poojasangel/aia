
mainModel.controller('progressController', function ($scope, $rootScope) {
    var oComponent = null;
    $scope.ACTIVITY_RESET;

    var listener1 = $scope.$on('ComponentLoaded', function (p_oEvent,
            p_oArguments) {
        var sComponentID = p_oArguments['componentID'];
        oComponent = p_oArguments['component'];
         oComponent.registerExternalMethod('showContinue', $scope,
                $scope.showContinue);
        oComponent.level = "level" + $scope.currentLevel;
		$scope.onLevelComplete();

    });    
    if($scope.currentLevel==4)
    {
        var complete=true;
    }
    else
    {
        var complete=false;
    }
    $scope.destroy = function () {
        listener1();
        TweenMax.killAll();
    };
    $scope.onBtnClick = function ()
    {
         //$scope.onLevelComplete();
         if(complete)
            $scope.path('score');
        else
             $scope.path('map');
    }

    $scope.showContinue = function ()
    {
         TweenMax.to($("#btn_continue"), 0.6, {opacity: 1, right: "30px",
            ease: Linear.easeNone});
    }

    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });
	
	 
});



