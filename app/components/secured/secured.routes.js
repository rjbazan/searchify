(function (angular) {

  'use strict';

  angular
    .module('sf.secured')
    .config(authRoutes);

  authRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
  function authRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('secured', {
        url: ''
      })

      .state('secured.home', {
        url: '/home',
        views: {
          'header@secured': {
            template: '<panel-header></panel-header>'
          },
          'main@secured': {
            template: '<search-output></search-output>'
          }
        }
      })
      
      .state('secured.home.artist', {
        url: '/artist/:id',
        views: {
          'header@secured': {
            template: '<panel-header></panel-header>'
          },
          'main@secured': {
            template: '<artist-page></artist-page>'
          }
        }
      })
      
      .state('secured.home.albums', {
        url: '/album/:id',
        views: {
          'header@secured': {
            template: '<panel-header></panel-header>'
          },
          'main@secured': {
            template: '<album-page></album-page>'
          }
        }
      });



    $urlRouterProvider.otherwise('/');
  }

})(angular);