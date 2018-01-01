angular
.module("dyApp",[])
.controller("dyAppCtrl",function($scope){

    $scope.navs=[
            {name:'places',url:"tpls/places.tpl.html",visible:true},
            {name:'me',url:"tpls/droid.tpl.html",visible:false},
            {name:'experiences', url:"tpls/experiences.tpl.html",visible:false}
            
        ];
   

    $scope.placesJSON = JSON.stringify($scope.places);

    $scope.experiences =[
        {year:{start:"2013",end:"2015"}, title:"Software Engineer"},
        {year:{start:"2015",end:"now" }, title:"Programmer Analyst"}
    ];

    $scope.curTpl="";

    $scope.updateContent = function(tplName){
        // $scope.curTpl=(_.find($scope.navs, {name:tplName})).url;
        _.each($scope.navs, function(nav){
            nav.visible=nav.name==tplName;
        });
    };

});