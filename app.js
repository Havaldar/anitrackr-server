var express = require('express');
var app = express();
var schedule = require('node-schedule');
var request = require('request');
var cheerio = require('cheerio');

// var twilio = require('twilio-api');
// var cli = new twilio.Client("AC8291e1a6d67aafe528bcdc77f25f3e4f","c6021b739324a11dbedcfe5129eae946");

// app.use(cli.middleware());


app.set('port', process.env.PORT || 5000);


app.get('/api/user/:username', function(req,res) {
	res.json({
		name: req.params.username
	});
});


app.get('/api/anime/:link', function(req, res) {
	var url = "http://www.watch-anime.net/" + req.params.link;
	request(url, function (error, response, html) {
		if (!error) {
			var $ = cheerio.load(html), episodes = $(".wpa_pag ul li");
			res.json({
				number_of_episodes: episodes.length
			});
		}
		else { 
			console.log("We've encountered a problem!");
		}
	});
}); 

app.listen(app.get('port'), function() { 
	console.log('Node app is running on port', app.get('port')); 
});
