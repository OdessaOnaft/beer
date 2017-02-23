var http = require('http'),
	request = require('request'),
	_ = require('underscore'),
	express = require('express'),
	bodyParser = require('body-parser'),
	$ = require('cheerio'),
	app = express();

app.use(bodyParser.json({
    limit: '150mb'
}));


app.use(express.static('public'));


app.post('/parseYouTube', function (req, res) {
	var getHtml = (callback)=>{
		request({
			method: "get",
			url: "https://www.youtube.com/",
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


	getHtml(data=>{
		var video = []
		var videos = $(data).find(".yt-lockup-dismissable")
		// var title = $(data).find(".yt-lockup-title contains-action-menu")
		var a = $(videos).each(function(v){return $(v).text()})
		for(var i=0; i<a.length; i++) {
			var videoLength = $(a[i]).find(".video-time").text()
			// var videoPreviewImg = $(a[i]).find(".yt-thumb-simple").find("img").attr('src')
			var videoLink = $(a[i]).find(".yt-lockup-content").find("a").attr("href")
			var videoFullLink = "https://www.youtube.com" + videoLink
			var videoTitle = $(a[i]).find(".yt-lockup-content").find("a").attr("title")
			var videoId = videoLink.split("=")[1]
			var videoPreviewImg = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` // ?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68
			video.push({videoPreviewImg, videoLength, videoFullLink, videoTitle})
			// console.log(videoLength, videoPreviewImg)

		}

		res.json(video.slice(0, 11))
		
		//var a = $(news).map(function(v){return $(v).text()})
		//console.log(a)
		// for(var i=0;i<a.length;i++)console.log($(a[i]).text(),$($(a[i]).find("a")[0]).attr('href'), "\n")

	})
	// console.log(videoLength, videoPreviewImg)
});


http.createServer(app).listen(8888);