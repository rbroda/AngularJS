(function () {
    var taskForm = {
        templateUrl: "partials/template.html",

        controller: function () {
            var vm = this;
            vm.todoList = [];
            vm.addItem = function (todoAdd){
                vm.todoList.push(todoAdd);
                document.getElementById("add").value = "";
                };
            }
    };



    angular.module("app")
        .component("taskForm", taskForm);

})();