angular.module("devflix", []);

angular.module("devflix").controller("SeriesController", function ($scope) {
  $scope.nuevosLanzamientos = [
    {
      titulo: "Dexter",
      slug: "dexter",
      descripcion: "Breaking bad"
    },
    {
      titulo: "Breaking Bad",
      slug: "breaking-bad"
    },
    {
      titulo: "Padre de familia",
      slug: "family-guy"
    },
    {
      titulo: "Friends",
      slug: "friends"
    },
    {
      titulo: "Gossip Girl",
      slug: "gossip-girl"
    },
    {
      titulo: "Skins",
      slug: "skins"
    },
    {
      titulo: "Homeland",
      slug: "homeland"
    }
  ];
  $scope.recientementeAnadidos = [
    {
      titulo: "Marco Polo",
      slug: "marco-polo"
    },
    {
      titulo: "Breaking Bad",
      slug: "breaking-bad"
    },
    {
      titulo: "Modern Family",
      slug: "modern-family"
    },
    {
      titulo: "Friends",
      slug: "friends"
    },
    {
      titulo: "Gossip Girl",
      slug: "gossip-girl"
    },
    {
      titulo: "Skins",
      slug: "skins"
    },
    {
      titulo: "Homeland",
      slug: "homeland"
    }
  ];
  $scope.verlosOtraVez = [
    {
      titulo: "The office",
      slug: "the-office"
    },
    {
      titulo: "El hobbit",
      slug: "hobbit"
    },
    {
      titulo: "Padre de familia",
      slug: "family-guy"
    },
    {
      titulo: "Suits",
      slug: "suits"
    },
    {
      titulo: "Gossip Girl",
      slug: "gossip-girl"
    },
    {
      titulo: "Skins",
      slug: "skins"
    },
    {
      titulo: "Homeland",
      slug: "homeland"
    }
  ];
});

angular.module("devflix").controller("SerieController", function () {
  this.serie = {
    titulo: "Suits",
    estreno: 2011,
    tag: "TV-14",
    numTemporadas: 3,
    descripcion: "Mike Ross, un joven brillante pero que nunca terminó la universidad, impresiona a un importante abogado y consigue trabajo en un prestigioso bufete."
  };
});

angular.module("devflix").controller("ContactoController", function ($scope) {
  $scope.nombre = "";
  $scope.email = "";
  $scope.telefono = "";
  $scope.website = "";
  $scope.mensaje = "";
});

angular.module("devflix").directive("series", function () {
  return {
    templateUrl: "series.html",
    scope: true,
    link: function (scope, element, attrs) {
      if (attrs.tipo === "nuevosLanzamientos") {
        scope.arreglo = scope.nuevosLanzamientos;
      } else if (attrs.tipo === "recientementeAnadidos") {
        scope.arreglo = scope.recientementeAnadidos;
      }
    }
  }
});














