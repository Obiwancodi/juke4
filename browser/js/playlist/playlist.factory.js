'use strict';

juke.factory('PlaylistFactory', function ($http, $log) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) { return response.data; });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.add = function (playlistId, song) {
    return $http.post('/api/playlists/' + playlistId +'/songs', song)
    .then(function (response) {
        return response.data;
    })
    .catch($log);
  };

  return PlaylistFactory;

});
