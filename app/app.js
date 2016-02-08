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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial',
    'ngMdIcons',
    'ngMessages',
    'lodash',
    'sf.auth',
    'sf.secured'
  ])

  
  .run(run);
  
  run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', '$log'];
  function run($rootScope, $location, $cookieStore, $http, $log) {
    $log.info('Searchify');
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
