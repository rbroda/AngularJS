(function () {
    function hoverState() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("cursor", "crosshair");
                    $element.css("background-color", "lightgray");
                });
                $element.on("mouseout", function() {
                    $element.css("background-color", "white");
                });

            }
        };

    }



    angular.module("app")
        .directive("hoverState", hoverState);
})();