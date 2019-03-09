//app.js

//Notice how each component matches with a template and a controller. You can think of the controller as a substitute for the logic held in Typescript classes in Angular 2 conventions
angular.module('angular-app', [])
.component('app', {
  templateUrl: '../templates/app.html',
  //$variables substitute for Angular 2 dependencies like http, injectable, rxjs etc.
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