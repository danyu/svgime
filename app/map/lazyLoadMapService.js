angular
.module("dyApp")
.service("lazyLoadMap",function($window, $q){

    function loadScript() {
        console.log('loadScript');
          // use global document since Angular's $document is weak
        var s = document.createElement('script');
        s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKTctAdX96lpDIvR3w0y9pCM8gs7UEGM&callback=initMap';
        document.body.appendChild(s);
    }

    var deferred = $q.defer();

    $window.initMap = function() {
        deferred.resolve();
    }
    
    if ($window.attachEvent) {
        $window.attachEvent('onload', loadScript);
    } else {
        $window.addEventListener('load', loadScript, false);
    }
    
    return deferred.promise;
});