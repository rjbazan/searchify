'use strict';

describe('AboutCtrl', function() {
  beforeEach(module('searchifyApp'));

  var $controller, spotify, $httpBackend;

  beforeEach(inject(function(_$controller_, _spotify_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    spotify = _spotify_;
    $httpBackend = _$httpBackend_;
  }));

  describe('angular test suite', function() {
    it('should inject dependecies', inject(function(spotify) {
      expect(spotify).toBeDefined();
    }));
    
    it('should compile angular expressions', inject(function($rootScope, $compile){
      $rootScope.sum = 4;
      var expression = '<p>2+2 = {{sum}}</p>'
      var element = $compile(expression)($rootScope);
      
      expect(element.html()).not.toContain('2+2 = 4');
      
      $rootScope.$digest();
      
      expect(element.html()).toContain('2+2 = 4');
    }));
    
    it('should return info from the server', inject(function(spotify){
      var query;
      $httpBackend.expectGET('https://api.spotify.com/v1/').respond(200,
       [{name: 'pepe', asd: 'asd'},
       {name: 'pepe2', asd: 'asd2'}]);
       

    }));
    
    it('should test the controller', inject(function($rootScope, spotify){
      var $scope = $rootScope.$new();
      $controller('ArtistCtrl', {$scope : $scope});
      
      expect($scope).toBeDefined();
      $scope.artists = [{name: 'pepe', asd: 'asd'}, {name: 'pepe2', asd: 'asd2'}]
      expect($scope.artists.length).toBe(2);
      
    }))
  });
});