var app = angular.module("miApp", []);

app.controller("MiController", function ($scope) {

});

app.filter("reversa", function () {
  return function (input) {
    input = input || "";
    var arr = input.split("").reverse();
    var texto = arr.join("");
    return texto;
  };
});