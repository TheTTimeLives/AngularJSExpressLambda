//taskList.js

//Notice how each component matches with a template and a controller. You can think of the controller as a substitute for the logic held in Typescript classes in Angular 2 conventions
angular.module('angular-app')
.component('taskList', {
  templateUrl: '../templates/taskList.html',
  controller: function() {},
  bindings: {
    tasks: '<'
  }
});