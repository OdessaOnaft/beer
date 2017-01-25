angular.module("app")
	.directive('crazy', ($timeout, $parse)=>{
	  return (scope, element, attrs)=> {
	  	// var animationTime = 1000
	  	// _.each($("button"), (v,i)=>{
	  	// 	console.log(v,i)
	  	// 	$(v).click(()=>{
		  // 		var mock = angular.element("<p>"+$(v).text()+"</p>")
		  // 		console.log($(v).offset())
		  // 		mock.css({
		  // 			position: "absolute",
		  // 			"text-align": "center",
		  // 			"z-index": 345435,
		  // 			top: $(v).offset().top+"px",
		  // 			left: $(v).offset().left+"px"
		  // 		});
		  // 		$(mock).animate({
		  // 			"font-size": 250,
		  // 			opacity: 0,	  		},
		  // 		animationTime)

		  // 		$("body").append(mock)
		  // 		$timeout(()=>{
		  // 			mock.remove()
		  // 		}, animationTime)
		  // 	})
		  // }
	  	// )
	  	// $("button").click(()=>{
	  	// 	var mock = angular.element("<p>"+$(this).text()+"</p>")
	  	// 	console.log($(element).offset())
	  	// 	mock.css({
	  	// 		position: "absolute",
	  	// 		"text-align": "center",
	  	// 		"z-index": 345435,
	  	// 		top: $(element).offset().top+"px",
	  	// 		left: $(element).offset().left+"px"
	  	// 	});
	  	// 	$(mock).animate({
	  	// 		"font-size": 250,
	  	// 		opacity: 0,	  		},
	  	// 	animationTime)

	  	// 	$("body").append(mock)
	  	// 	$timeout(()=>{
	  	// 		mock.remove()
	  	// 	}, animationTime)
	  	// })
	  }
	})