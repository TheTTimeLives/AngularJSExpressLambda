//addTask.js

//Notice how each component matches with a template and a controller. You can think of the controller as a substitute for the logic held in Typescript classes in Angular 2 conventions
angular.module('angular-app')
  .component('addTask', {
    templateUrl: '../templates/addTask.html',
    //$variables substitute for Angular 2 dependencies like http, injectable, rxjs etc.
    controller: function ($http) {
      let $ctrl = this;
      let dup = false;

      // checks our list for duplicates
      let checkList = function (tasks, task) {
        tasks.forEach((item) => {
          if (item.task === task) {
            dup = true;
          }
        });
      }

      $ctrl.addTask = (task) => {
        // checks if the task is blank
        if (!task) {
          return alert('please enter a task');
        }
        checkList($ctrl.tasks, task);
        // will return a true dup if the input already exists
        if (dup) {
          dup = false;
          return alert('that task already exists');
        }
        // sets our task to an object that can be posted
        task = {
          task: task,
          editing: false //we will use this to edit tasks later
        };
        $http.post('/api/tasks', task)
          .then((res) => {
            $ctrl.tasks.push(res.data); //adds a task to the task list
            $ctrl.task = ''; //sets the input field blank again
          })
      }

    },
    bindings: {
      tasks: '<'
    }
  });