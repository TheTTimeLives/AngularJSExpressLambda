//app.js
angular.module('angular-app', [])
.component('app', {
  templateUrl: '../templates/app.html',
  controller: function($http) {
    //ensures that the this scope isn't lost
    let $ctrl = this;
    $ctrl.tasks = [];
    $http.get('/api/tasks').then(function(res) {
      //Not a function? Probably because we aren't getting anything from this endpoint yet
      res.data.forEach((obj) => {
        $ctrl.tasks.push(obj);
      })
    })
  }
});