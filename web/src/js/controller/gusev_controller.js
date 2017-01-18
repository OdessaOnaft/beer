angular.module("app")
  .controller("gusevController", ($scope, $rootScope, $state, $translate)=>{
    $scope.obj = {}
    $scope.state = $state
    console.log($state.current.name)
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
  })