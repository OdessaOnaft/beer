var request = require('request')
var _ = require('underscore')
var $ = require('cheerio')





var getHtml = (callback)=>{
	request({
		method: "get",
		url: "http://vesti-ukr.com/",
		headers: {}
	}, (body, response)=>{
		if(response && response.body)
			callback(response.body)
		else 
			callback('bad')


	}, (err)=>{
		callback(err)
		console.log(err)
	})
}


getHtml((data)=>{

	var news = $(data).find(".rubric-top-news")
	var a = $(news).each(function(v){return $(v).text()})
	for(var i=0;i<a.length;i++)console.log($(a[i]).text(),$($(a[i]).find("a")[0]).attr('href'), "\n")
})