(function(){
    angular.module("app")
    .config(function($routeProvider) {
        $routeProvider
        .when("/start", {
            template: "<start></start>"
        })
        .when("/taskForm", {
            template: "<task-form></task-form>"
        })

        .otherwise({ redirectTo: "/start" });
    });
})();