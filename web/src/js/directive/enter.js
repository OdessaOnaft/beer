angular.module("app")
	.directive('enter', ()=>{
	  return (scope, element, attrs)=> {
	  	$(element).keydown((e)=>{
	  		if(e.which == 13) {
	  			
	  			scope.$apply(()=>{
	  				var f =scope.$eval(attrs.enter)
	  				f()
	  			})

  	  		}

	  	})
	  }
	})