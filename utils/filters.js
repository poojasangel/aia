mainModel.filter("timeformat",['$filter',function ($filter){
    return function(data){
            
    var m = Math.floor(data/60); //Get remaining minutes
    data -= m*60;
    return (m < 10 ? '0'+m : m)+":"+(data < 10 ? '0'+data : data);
            
    };
}]);