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

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist) {
    $scope.playlist = thePlaylist;

    $scope.addSong = function() {
        var songName = $scope.songName;
    };
});
