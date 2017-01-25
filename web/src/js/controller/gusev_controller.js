angular.module("app")
  .controller("gusevController", ($scope, $rootScope, $state, $translate, $timeout, $meow)=>{
    $scope.obj = {}
    $meow.meow(5)
    $scope.state = $state
    $scope.calc = ()=>{
    	$scope.obj.res=eval($scope.obj.expression)
    	$scope.obj.expression = $scope.obj.res
    };
    $scope.config = {
	    autoHideScrollbar: false,
	    theme: 'light',
	    advanced:{
	        updateOnContentResize: true
	    },
        setHeight: 200,
        scrollInertia: 0
    }
    $timeout(()=>{
        $scope.obj.val = 5
    }, 1000)


    
  })