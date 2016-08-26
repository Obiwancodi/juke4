'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlists', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlists.html',
    controller: 'PlaylistCtrls',
    resolve: {
      // allArtists: function (ArtistFactory) {
      //   return ArtistFactory.fetchAll();
      // }
    }
  });



});