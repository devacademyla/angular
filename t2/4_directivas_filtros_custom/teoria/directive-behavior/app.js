angular.module("miApp", []);

angular.module("miApp").directive("dentro", function () {
  return {
    restrict: "A",
    link: function (miScope, element, attrs) {
      element.bind("mouseenter", function () {
        element.addClass("panel");
      });
      console.log(miScope);
    }
  }
});

angular.module("miApp").directive("fuera", function () {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function () {
      element.removeClass("panel");
    });
  }
});