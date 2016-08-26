'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlists.html',
    controller: 'PlaylistCtrl'
  });
});


$stateProvider.state('playlist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/album/templates/playlist.html',
    controller: 'PlaylistOneCtrl',
    resolve: {
      theAlbum: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });