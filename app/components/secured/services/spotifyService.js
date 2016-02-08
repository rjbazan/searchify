angular.module('sf.secured').factory('spotify', spotifyFactory);

spotifyFactory.$inject = ['$http'];

function spotifyFactory($http) {
  var factory = {};

  factory.GetAll = GetAll;
  factory.GetArtist = GetArtist;
  factory.GetArtistAlbums = GetArtistAlbums;
  factory.GetRelatedArtists = GetRelatedArtists;
  factory.GetAlbum = GetAlbum;
  factory.GetAlbumTracks = GetAlbumTracks;

  return factory;

  function GetAll(input) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http({ url: 'https://api.spotify.com/v1/search?q=' + input + '&type=album,artist', method: 'GET' }).
        then(function (response) {

          /* The then function here is an opportunity to modify the response
          The return value gets picked up by the then in the controller.*/
          return response.data;
        });
    }
    // Return the promise to the controller
    return promise;
  };

  function GetArtist(id) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http.get('https://api.spotify.com/v1/artists/' + id).then(function (response) {

        return response.data;
      });
    }
    // Return the promise to the controller
    return promise;
  };

  function GetArtistAlbums(id) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http.get('https://api.spotify.com/v1/artists/' + id + '/albums').then(function (response) {

        return response.data;
      });
    }
    // Return the promise to the controller
    return promise;
  };

  function GetRelatedArtists(id) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http.get('https://api.spotify.com/v1/artists/' + id + '/related-artists').then(function (response) {

        return response.data;
      });
    }
    // Return the promise to the controller
    return promise;
  };

  function GetAlbum(id) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http.get('https://api.spotify.com/v1/albums/' + id).then(function (response) {
        return response.data;
      });
    }
    // Return the promise to the controller
    return promise;
  };

  function GetAlbumTracks(id) {
    var promise;
    if (!promise) {
      // $http 
      promise = $http.get('https://api.spotify.com/v1/albums/' + id + '/tracks').then(function (response) {
        return response.data;
      });
    }
    // Return the promise to the controller
    return promise;
  };


};