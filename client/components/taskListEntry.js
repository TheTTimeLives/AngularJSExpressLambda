//taskListEntry.js

//Notice how each component matches with a template and a controller. You can think of the controller as a substitute for the logic held in Typescript classes in Angular 2 conventions
angular.module('angular-app')
  .component('taskListEntry', {
    templateUrl: '../templates/taskListEntry.html',
    //$variables substitute for Angular 2 dependencies like http, injectable, rxjs etc.
    controller: function ($http) {
      $ctrl = this;
      $ctrl.toggleEdit = function (task) {
        //sets the edit value to the opposite of what it currently is
        task.editing = !task.editing;
      }
      $ctrl.updateTask = function (task) {
        // checks for empty edit values
        if (!task.task) {
          return alert('please enter a task');
        }
        task.editing = false;
        task = {
          task: task
        }
        // send our update request
        $http.put('/api/tasks/' + task.task._id, task).then((res) => {
          $ctrl.toggleEdit(task);
        })
      }
      // deletes specific tasks
      $ctrl.deleteTask = function (task) {
        $http.delete('/api/tasks/' + task._id)
          .then((res) => {
            let i = $ctrl.tasks.indexOf(task);
            // removes the task from the task list
            $ctrl.tasks.splice(i, 1);
          })
      }
    },
    bindings: {
      task: '<', //binding the individual task
      tasks: '<' //binding the entire task list
    }
  });