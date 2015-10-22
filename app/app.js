'use strict';

/**
 * @ngdoc overview
 * @name searchifyApp
 * @description
 * # searchifyApp
 *
 * Main module of the application.
 */
angular
  .module('searchifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.useApplyAsync(true);
    $routeProvider
      .when('/', {
        template: '<panel-header></panel-header><search-output></search-output>'
      })
      .when('/home/artist/:id', {
        template: '<panel-header></panel-header><artist-page></artist-page>'
      })
      .when('/home/album/:id', {
        template: '<panel-header></panel-header><my-clock></my-clock><album-page></album-page>'
      })
      .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'register/register.html',
        controllerAs: 'vm'
      })
      .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.html',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .run(run);
  
  run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
  function run($rootScope, $location, $cookieStore, $http) {
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }
    
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }
