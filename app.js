
var routeModel = angular.module('pageLoad', []).provider('pageLoad',
        function () {

            var routes = {},
                    stack = [],
                    currentRoute;

            this.when = function (path, config) {
                config.path = path;
                routes[path] = config;
                return this;
            };

            this.setCurrent = function (path) {
                currentRoute = routes[path];
            };

            function triggerChange(newRoute) {
                stack.forEach(function (callback) {
                    callback(newRoute, currentRoute);
                });
                currentRoute = newRoute;
            }

            this.$get = function () {
                return {
                    onRouteChange: function (callback) {
                        stack.push(callback);
                        
                    },
                    path: function (path) {
                        if (!path) {
                            return currentPath;
                        }
                        triggerChange(routes[path]);
                    },
                    getCurrent: function () {
                        return currentRoute;
                    }
                };
            }
        });




var mainModel = angular.module('myapp', ['pageLoad','ngSanitize'])

        .config(function (pageLoadProvider) {
            pageLoadProvider
                .when('splash', {
                    controller: 'splashController',
                    templateUrl: 'Views/splash.html',
                    id: 'splash'
                })
                     .when('map', {
                        controller: 'mapController',
                        templateUrl: 'Views/map.html',
                        id: 'map'
                    })
                    .when('race1', {
                        controller: 'race1Controller',
                        templateUrl: 'Views/race1.html',
                        id: 'race1'
                    })
                    .when('race2', {
                        controller: 'race2Controller',
                        templateUrl: 'Views/race2.html',
                        id: 'race2'
                    })
                    .when('race3', {
                        controller: 'race3Controller',
                        templateUrl: 'Views/race3.html',
                        id: 'race3'
                    })
					.when('race4', {
                        controller: 'race4Controller',
                        templateUrl: 'Views/race4.html',
                        id: 'race4'
                    })
                    .when('mission1', {
                        controller: 'mission1Controller',
                        templateUrl: 'Views/mission1.html',
                        id: 'mission1'
                    })
                    .when('mission2', {
                        controller: 'mission1Controller',
                        templateUrl: 'Views/mission2.html',
                        id: 'mission2'
                    })
                    .when('mission3', {
                        controller: 'mission1Controller',
                        templateUrl: 'Views/mission3.html',
                        id: 'mission3'
                    })
                    .when('mission4', {
                        controller: 'mission1Controller',
                        templateUrl: 'Views/mission4.html',
                        id: 'mission4'
                    })
                    .when('progress', {
                        controller: 'progressController',
                        templateUrl: 'Views/progress.html',
                        id: 'progress'
                    })
                .when('score', {
                    controller: 'scoreController',
                    templateUrl: 'Views/score.html',
                    id: 'score'
                })
                   
                    .setCurrent('splash');
        });

        