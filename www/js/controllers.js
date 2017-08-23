//angular.module('starter.controllers', [])
app
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http ) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.chk = function(){
    var cp = localStorage.getItem("cordovaPush");
    alert(cp);
    cp = cp.toString();
    alert(cp);
  }

  $scope.getfun = function(){
    var cp = localStorage.getItem("cordovaPush");
    var data = "type=pusher&utoken="+cp;
    $http.get("https://myoptionalwebsite.000webhostapp.com/php/savetoken.php?"+data)
    .success(function(res){
      alert("resp:"+JSON.stringify(res));
    })
    .error(function(err){
      alert("failed due to:"+JSON.stringify(err));
    });
  }

  $scope.postfun = function(){
    var cp = localStorage.getItem("cordovaPush");
    var data = {
      type:'pusher',
      utoken:cp
    }
    $http.post("https://myoptionalwebsite.000webhostapp.com/php/savetoken.php",data)
    .success(function(res){
      alert("resp:"+JSON.stringify(res));
    })
    .error(function(err){
      alert("failed due to:"+JSON.stringify(err));
    });
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('browseCtrl', function($scope, $stateParams) {
  $scope.cordovaPush = localStorage.getItem("cordovaPush");
});
