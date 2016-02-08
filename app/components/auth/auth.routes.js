(function (angular) {

  'use strict';

  angular
    .module('sf.auth')
    .config(authRoutes);

  authRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
  function authRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('register', {
        url: '/register',
        views: {
          '@': {
            controller: 'RegisterCtrl',
            templateUrl: 'components/auth/register/register.html',
            controllerAs: 'vm'
          }
        }
      })
      
      .state('login', {
        url: '/login',
        views: {
          '@': {
            controller: 'LoginCtrl',
            templateUrl: 'components/auth/login/login.html',
            controllerAs: 'vm'
          }
        }
      });
      $urlRouterProvider.otherwise('/login');
  }

})(angular);