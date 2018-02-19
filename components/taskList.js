(function () {
    var taskList = {
        
        templateUrl: "partials/template2.html",
        controller: function (TaskService) {
            var vm = this;
            vm.tasksToDisplay = TaskService.getTask();
            vm.ClickX = function(bar) {
                vm.tasksToDisplay.splice(bar, 1);
            }
        }
    };


    angular.module("app")
        .component("taskList", taskList);

})();