angular.module("app")
  .controller("ilievController", ($scope, $rootScope, $state, $translate)=>{
  $scope.obj = {expression: ''}
    $scope.state = $state
    console.log($state.current.name)
    $scope.calc = ()=>{
    	$scope.obj.res=eval($scope.obj.expression)
    	$scope.obj.expression = $scope.obj.res+""
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
    $scope.lines = []
    $scope.line = {}
    $scope.addLine = function(){
          $scope.lines.push($scope.line.menu)
        }
    $scope.removeLine = ()=>{
        $scope.lines = []
    }

  })