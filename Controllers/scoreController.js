
mainModel.controller('scoreController', function ($scope, $interval,
        $rootScope) {
    $scope.ACTIVITY_RESET;
    $scope.total=0;
    $.each($scope.score,function(k,v){
        $scope.total += v.race;
        $scope.total += v.scenario;
        $scope.total += v.time_bonus;
        $scope.total += v.life_bonus;
    })
	
	var d = new Date();
        var m = d.getMonth() + 1;
        $scope.today = d.getDate() +" / "+ m + " / "+ d.getFullYear();
        
       
    
    $scope.destroy = function () {

    };
	
	 $scope.retryGame = function () {
		$scope.replayGame();
    };
	
	 $scope.showCertificate = function () {
		$('.certi-container').show();
		$('.certificte-close').show();
		$('.certificte-print').show();
    };
	
	 $scope.closeCertificate = function () {
		$('.certi-container').hide();
		$('.certificte-close').hide();
		$('.certificte-print').hide();
    };
	
	 $scope.printCertificate = function () {
		printCerti() 
    };


    $scope.ACTIVITY_RESET = $rootScope.$on("ACTIVITY_RESET", function () {
        $scope.destroy();
    });
});

function printCerti () {
		var contents = $('.certi-container').html();
					var frame1 = $('<iframe />');
					//var frame1 = window.open('','print','width=1000,height=600');
					frame1[0].name = "frame1";
					frame1.css({ "position": "absolute", "top": "-1000000px" });
					$("body").append(frame1);
					var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
					frameDoc.document.open();
					
						frameDoc.document.write('<html><head><title></title>');
					//}
					frameDoc.document.write('</head><body>');
					//Append the external CSS file.
					frameDoc.document.write('<link href="style.css" rel="stylesheet" type="text/css" />');
					//Append the DIV contents.
					frameDoc.document.write('<div id="printdiv">');
					
					frameDoc.document.write(contents);
					frameDoc.document.write('</div>');
					frameDoc.document.write('</body></html>');
					frameDoc.document.close();
					  setTimeout(function () {
						window.frames["frame1"].focus();
						window.frames["frame1"].print();
						frame1.remove();
					}, 500);  
	}


