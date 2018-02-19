(function() {
    function TaskService() {
      var savedTasks = [];
      return {
        setTask: setTask,
        getTask: getTask
      }
  
      function setTask(taskItem) {
        savedTasks.push(taskItem);
      }
  
      function getTask() {
        return savedTasks;
      }
    }
  
    angular
      .module("app")
      .factory("TaskService", TaskService);
  })();