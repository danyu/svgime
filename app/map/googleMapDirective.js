angular
.module("dyApp")
.directive("googleMapLoader",function ($rootScope,lazyLoadMap){
    return {
        restrict: 'CA', // restrict by class name
        scope: {
          mapId: '@id', // map ID
          // lat: '@', // latitude
          // long: '@' // longitude
        },
        link: function(scope, element, attrs) {
          var location = null;
          var map = null;
          var mapOptions = null;
         var places = [
            {   city: "Yuanan Xian, YiChang, Hubei ", country:"China", coords:{lat:31.127678, lng:111.4267143 } },
            {   city: "Wuhan Hubei, China ", country:"China", coords:{lat:30.5683366, lng:114.1603008 } }, 
            {   city: "Beijing, China", country:"China", coords:{lat:40.0329851, lng:116.3180163 } },         
            {   city: "Athens, OH",   country:"USA", coords:{lat:39.3235886, lng:-82.1198954 } },    
            {   city: "Jaxonville, FL", country:"USA", coords:{lat:30.3452116, lng:-81.8231907 } },        
            {   city: "Bentoville, AR", country:"USA", coords:{lat:36.3675401, lng:-94.3088647 } },
            {   city: "San Mateo, CA", country:"USA", coords:{lat:37.5565988, lng:-122.3506494 } }
          ];    
          // Check if latitude and longitude are specified
          // if (angular.isDefined(scope.lat) && angular.isDefined(scope.long)) {
            if (angular.isDefined(places)){ 
            // Loads google map script
            lazyLoadMap.then( initializeMap );
            // initializeMap();
          }
          var center = {lat:21.3281792, lng:-157.869113};
          // Initialize the map
          function initializeMap() {
            mapOptions = {
                  zoom: 3,
                  center: center
            };
            // create map
            map = new google.maps.Map(element[0], mapOptions);
            _.each(places,function(p){
                new google.maps.Marker({
                position: p.coords,
                title: p.city,
                map: map
              });
            });
            
            var coords = _.map(places,'coords');
            var placesPath = new google.maps.Polyline({
              path: coords,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });
    
            placesPath.setMap(map);

          }
        }
      };
});