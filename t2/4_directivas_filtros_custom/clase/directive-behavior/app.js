var app = angular.module("miApp", []);

app.directive("dentro", function() {
  return function(scope, element) {
    element.bind("mouseenter", function() {
      element.addClass("panel");
    });
  };
});

app.directive("fuera", function() {
  return function(scope, element) {
    element.bind("mouseleave", function() {
      element.removeClass("panel");
    });
  };
});