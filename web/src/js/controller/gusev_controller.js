angular.module("app")
  .controller("gusevController", ($scope, $rootScope, $state, $translate, $timeout, $meow)=>{
    $scope.obj = {}
    $meow.meow(5)
    $scope.state = $state
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
    $timeout(()=>{
        $scope.obj.val = 5
    }, 1000)

    $scope.deleteLast =() => {
        $scope.obj.expression = $scope.obj.expression.slice(0,-1)
    }

    // $scope.valideCalc = () => {
    //     var element = document.getElementById('zero');

    //         if ($scope.obj.expression == '0') {
    //         element.setAttribute('disabled','disabled');
    //         } else {
    //             $scope.obj.expression = $scope.obj.expression + 0;
    //         }
    //             if(element.hasAttribute("disabled")) {
    //                 element.removeAttribute('disabled','disabled');
    //             }

    // }
    $scope.$watch("obj.expression", (val)=> {
        if(val=="00") {
            $scope.obj.expression="0";
        }
    })



    
  })