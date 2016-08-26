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
    $scope.playlist = thePlaylist;

    $scope.addSong = function() {
            for(var i = 0; i < theSongs.length; i++) {
                if(theSongs[i].name === $scope.songName) {
                    $scope.playlist.songs.push(SongFactory.convert(theSongs[i]))
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
  };
});
