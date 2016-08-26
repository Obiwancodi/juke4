'use strict'


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
    $scope.createPlaylist = function() {
        var newpl = { name: $scope.playlistName };
        PlaylistFactory.create(newpl)
        .then(function(data) {
            $scope.playlist = data;
            $scope.playlistName = '';
        });
    };
})