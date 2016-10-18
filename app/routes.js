module.exports = function(app) {
	app.get('/api/category', function(req, res) {
		res.send(['test1','test2','test3']);
	});
	app.get('/api/test2' , function(req, res) {
		setTimeout(function() {res.send(req.url)}, 2000);
	});
	app.get('/api/test1' , function(req, res) {
		setTimeout(function() {res.send(req.url)}, 3000);
	});
	app.get('/api/test*', function(req, res) {
		res.send(req.url);
	});
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};