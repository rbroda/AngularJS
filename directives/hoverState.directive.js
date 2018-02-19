(function () {
    function hoverState() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("cursor", "crosshair");
                    $element.css("background-color", "lightgray");
                    $element.children().css("color", "red");
                });
                $element.on("mouseout", function() {
                    $element.css("background-color", "white");
                    $element.children().css("color", "black");

                });

            }
        };

    }



    angular.module("app")
        .directive("hoverState", hoverState);
})();