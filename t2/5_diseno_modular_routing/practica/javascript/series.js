angular.module("series", []);

angular.module("series").controller("SeriesController", function ($scope) {
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

angular.module("series").directive("series", function () {
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