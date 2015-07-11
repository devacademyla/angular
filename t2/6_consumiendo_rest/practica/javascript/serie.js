angular.module("serie", []);

angular.module("serie").controller("SerieController", function () {
  this.serie = {
    titulo: "Suits",
    estreno: 2011,
    tag: "TV-14",
    numTemporadas: 3,
    descripcion: "Mike Ross, un joven brillante pero que nunca terminó la universidad, impresiona a un importante abogado y consigue trabajo en un prestigioso bufete."
  };
});