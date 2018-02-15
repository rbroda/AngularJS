(function () {
    var taskList = {
        bindings: {
            list: "<"
        },
        templateUrl: "partials/template2.html",
        controller: function () {
            vm = this;
            vm.ClickX = function(bar) {
                vm.list.splice(bar, 1);
            }
        }
    };







    angular.module("app")
        .component("taskList", taskList);

})();