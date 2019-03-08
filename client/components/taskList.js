//taskList.js
angular.module('angular-app')
.component('taskList', {
  templateUrl: '../templates/taskList.html',
  controller: function() {},
  bindings: {
    tasks: '<'
  }
});