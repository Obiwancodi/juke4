'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('newplaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/newplaylist.html',
    controller: 'NewPlaylistCtrl'
  });

  $stateProvider.state('playlist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
     resolve: {
       thePlaylist: function (PlaylistFactory, $stateParams) {
         return PlaylistFactory.fetchById($stateParams.playlistId);
       },
       theSongs: function(SongFactory, $stateParams) {
          return SongFactory.fetchAll()
       }

     }
  });
});


