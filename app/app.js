angular
.module("dyApp",[])
.controller("dyAppCtrl",function($scope){

    $scope.tpls=[
            {name:'droid',url:"svg-tpls/droid.tpl.html"},
            {name:'places',url:"svg-tpls/places.tpl.html"}
        ];
    
    $scope.curTpl="";

    $scope.updateContent = function(tplName){
        $scope.curTpl=(_.find($scope.tpls, {name:tplName})).url;
    };

});