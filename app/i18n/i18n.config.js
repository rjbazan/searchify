(function (angular) {

  'use strict';

  angular
    .module('searchifyApp')
    .config(config);

  config.$inject = ['$translateProvider','$translatePartialLoaderProvider'];

  function config($translateProvider, $translatePartialLoaderProvider) {	
    // add translation tables
    $translatePartialLoaderProvider.addPart('header');
    $translatePartialLoaderProvider.addPart('login');
    $translatePartialLoaderProvider.addPart('register');
    $translatePartialLoaderProvider.addPart('albumPage');
    $translatePartialLoaderProvider.addPart('artistPage');
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{lang}/{part}.json'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useLocalStorage();

  }


})(angular);
