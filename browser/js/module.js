'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {

    $stateProvider.state('allAlbums', {
        url: '/albums',
        templateUrl: '/allalbums.html',
        controller: 'AlbumsCtrl'
    })

    $stateProvider.state('allArtist', {
        url: '/artists',
        templateUrl: '/allartists.html',
        controller: 'ArtistsCtrl'
    })

    $stateProvider.state('album', {
        url: '/albums/:album',
        templateUrl: '/analbum.html',
        resolve: { album: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchById($stateParams.album);
            }
        },
        controller: 'AlbumCtrl' 
    })

    $stateProvider.state('artist',{
    	url:'/artists/:artist',
    	templateUrl:'anartist.html',
    	controller: 'ArtistCtrl'

    })

    $stateProvider.state('artist.album',{
    	url:'/albums',
    	templateUrl:'albumtab.html'
    })

     $stateProvider.state('artist.song',{
    	url:'/songs',
    	templateUrl:'songtab.html'
    })
})
