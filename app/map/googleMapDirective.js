angular
.module("dyApp")
.directive("googleMapLoader",function ($rootScope){
    return {
        restrict: 'CA', // restrict by class name
        scope: {
          mapId: '@mapId'//, // map ID
          // lat: '@', // latitude
          // long: '@' // longitude
          // onPlaceSelected:'&', // bidirectional 
          // selectedPlace:'='
        },
        controller:'googleMapCtrl',
        templateUrl: 'tpls/my-map.tpl.html'
      };
});