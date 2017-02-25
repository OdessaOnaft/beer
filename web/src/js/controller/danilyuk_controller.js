angular.module("app")
    .controller("danilyukController", ($scope, $rootScope, $state, $translate) => {
        $scope.obj = {
            expression: ''
        }
        $scope.state = $state
        console.log($state.current.name)
        $scope.calc = () => {
            $scope.obj.res = eval($scope.obj.expression)
            $scope.obj.expression = ($scope.obj.res || '') + '';
        };
        $scope.deleteLast = () => {
            $scope.obj.expression = $scope.obj.expression.slice(0, -1);
        }
        $scope.deleteAll = () => {
            $scope.obj.expression = '';
        }
        $scope.config = {
            autoHideScrollbar: false,
            theme: 'light',
            advanced: {
                updateOnContentResize: true
            },
            setHeight: 200,
            scrollInertia: 0
        }
    })
