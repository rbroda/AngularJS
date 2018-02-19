(function () {
    var taskForm = {
        templateUrl: "partials/template.html",

        controller: function (TaskService) {
            var vm = this;
            vm.addItem = function (todoItem){
                TaskService.setTask(todoItem);
                document.getElementById("add").value = "";
                };
            }
    };



    angular.module("app")
        .component("taskForm", taskForm);

})();