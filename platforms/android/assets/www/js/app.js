/*

  DeepBlue Starter Kit - version 1.1
  Copyright (c) 2015 INMAGIK SRL - www.inmagik.com
  All rights reserved

  written by Mauro Bianchi
  bianchimro@gmail.com  
  
  file: app.js
  
*/

angular.module('deepBlue', ['ionic', 'deepBlue.controllers', 'deepBlue.services'])

.run(function($ionicPlatform, $rootScope, $timeout, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /* 
      #SIMPLIFIED-IMPLEMENTATION:
      Example access control.
      A real app would probably call a service method to check if there
      is a logged user.

      #IMPLEMENTATION-DETAIL: views that require authorizations have an
      "auth" key with value = "true".
    */
    

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  /*

    Here we setup the views of our app.
    In this case:
    - feed, account, shop, checkout, cart will require login
    - app will go to the "start view" when launched.

    #IMPLEMENTATION-DETAIL: views that require authorizations have an
    "auth" key with value = "true".

  */
  
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    
    .state('app.dashboard', {
    url: '/dashboard',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/Dashboard.html',
        controller : 'DashboardCtrl'
      }
    }
  })
   .state('app.page1', {
    url: '/page1',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/Page1.html',
        controller : 'Page1Ctrl'
      }
    }
  })
   .state('app.page2', {
    url: '/page2',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/Page2.html',
        controller : 'Page2Ctrl'
      }
    }
  })
   
  
  // If none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');

});
