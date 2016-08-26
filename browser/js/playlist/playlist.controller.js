'use strict'


juke.controller('NewPlaylistCtrl', function ($scope, $state, PlaylistFactory) {
    $scope.createPlaylist = function() {
        var newpl = { name: $scope.playlistName };
        PlaylistFactory.create(newpl)
        .then(function(data) {
            $scope.playlist = data;
            $scope.playlistName = '';
            $state.go('playlist', { "playlistId": data.id });
            // $state.go('playlist({ playlist:' + data.id + ' })');
        });
    };
});

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, PlayerFactory, SongFactory, thePlaylist, theSongs) {
    thePlaylist.songs = thePlaylist.songs.map(function(song) {
        return SongFactory.convert(song);
    });
    $scope.playlist = thePlaylist;

    $scope.addSong = function() {
      for(var i = 0; i < theSongs.length; i++) {
        if(theSongs[i].name === $scope.songName) {
          PlaylistFactory.add($scope.playlist.id, theSongs[i])
          .then(function (data) {
            $scope.playlist.songs.push(SongFactory.convert(data));
            $scope.songName = '';
          });
        } 
      }
    };

    $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }

    $scope.getCurrentSong = function () {
      return PlayerFactory.getCurrentSong();
    };
  
    $scope.isPlaying = function (song) {
      return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
    };
  };
});
