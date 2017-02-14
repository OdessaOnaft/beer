angular.module("app")
	.directive('swiper', ($timeout, $parse)=>{
	  return (scope, element, attrs)=> {
	  	var down = true;
	  	var startPos;


	  	$(element).on('mousemove', ()=>{
	  	if (down == false) {
	  		var posX = event.clientX
  			// console.log(posX)
			
  			$(element).css({
  				"position": "relative",
          "cursor": "pointer",
  				"display": "block",
  				"left" : posX - 50+"px"
  				
  			})

  			var a = posX;
  			var b = startPos;
  			var c = posX-startPos;
  			console.log(c)


  			if( c > 200 || c < -200) {
  				$(element).css({
  					"transition" : "all" +' ' + "2s"+' '+ "linear",
  					"opacity" : 0
  					
  				})
  				$timeout(()=> {
  					$(element).css({
  						"display":"none"
  					}) 
  				},2000)
  			}
  		}	
		})



	  	$(element).on('mousedown', ()=>{
  		down = false;
  		startPos = event.clientX
  		console.log(startPos)
  
		})

		$(element).on('mouseup', ()=> {
  		down = true;
  
		})
		$(element).on('mouseleave',()=> {
  		down = true;
  		
  
		})


		

		
	  }
	})