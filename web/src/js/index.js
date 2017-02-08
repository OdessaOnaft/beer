angular.module("app", ['ui.router', 'ngTouch'])
	.run(['$state', '$rootScope',  ($state, $rootScope )=>{

	}])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider','$httpProvider',
	  ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) =>{

      delete $httpProvider.defaults.headers.common['X-Requested-With'];
	    $locationProvider.html5Mode(true)
	    $urlRouterProvider.when('','/')
	    $urlRouterProvider.otherwise("/404/");
	    $stateProvider
	      .state('404', {
          url:'/404/',
          templateUrl: "/html/404.html"
		    })
	      .state('main', {
	        url:'/',
	        templateUrl: "/html/index.html",
	        controller: "homeController"
        })
        .state('gusev', {
          url:'/gusev/',
          templateUrl: "/html/gusev.html",
          controller: "gusevController"
        })
        .state('gusev.calc', {
          url:'calc/',
          templateUrl: "/html/gusev_calc.html",
        })
        .state('gusev.swipe', {
          url:'swipe/',
          templateUrl: "/html/gusev_swipe.html",
          controller: "gusevController"
        })
        .state('ilyzshuk', {
          url:'/ilyzshuk/',
          templateUrl: "/html/ilyzshuk.html",
          controller: "ilyzshukController"
        })
        .state('iliev', {
          url:'/iliev/',
          templateUrl: "/html/iliev.html",
          controller: "ilievController"
        })
        .state('iliev.calc', {
          url:'calc/',
          templateUrl: "/html/iliev_calc.html"
        })
        .state('iliev.menu', {
          url:'menu/',
          templateUrl: "/html/iliev_additional_menu.html"
        })
         .state('danilyuk', {
          url:'/danilyuk/',
          templateUrl: "/html/danilyuk.html",
          controller: "danilyukController"
        })
         .state('danilyuk.calc', {
          url:'calc/',
          templateUrl: "/html/danilyuk_calc.html",
        })
         .state('sansey', {
          url:'/sansey/',
          templateUrl: "/html/sansey.html",
          controller: "sanseyController"
        })
	  }
	])
