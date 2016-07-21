var express = require('express');
var app = express();

var schedule = require('node-schedule');
var twilio = require('twilio-api');
var cli = new twilio.Client("AC8291e1a6d67aafe528bcdc77f25f3e4f","c6021b739324a11dbedcfe5129eae946");

app.use(cli.middleware());
app.listen(3000, function() { console.log("serve running on port 3000" ); });



app.get('/user/:username', function(req,res) {
	res.json({
		name: req.params.username
	});
});