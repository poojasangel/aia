
mainModel.controller('splashController', function ($scope, $interval,
        $rootScope) {
    var oComponent = null;
    $scope.ACTIVITY_RESET;

    var listener1 = $scope.$on('ComponentLoaded', function (p_oEvent,
            p_oArguments) {
        var sComponentID = p_oArguments['componentID'];
        oComponent = p_oArguments['component'];
        oComponent.registerExternalMethod('btnClicked', $scope,
                $scope.btnClicked);
        oComponent.registerExternalMethod('gotoMap', $scope,
                $scope.gotoMap);
       


    });
     $scope.btnClicked = function () {
         oComponent.gotoAndPlay("next_mc")
             //$scope.path('map');
             //$scope.$apply()
    };
    $scope.gotoMap = function () {
			 $scope.playAudioForDevice();
             $scope.path('map');
             $scope.$apply()
    };
    $scope.destroy = function () {
        listener1()
    };


    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });
});



