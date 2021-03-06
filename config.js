module.exports = new function() {
	var config = this;
	this.dev = true;
	this.protocol = "http://"
	this.port = 3001;
	this.host = this.dev ? "127.0.0.1" : "185.22.232.114"; 
	this.secret = "mySecretKey"
	this.root = this.protocol + this.host + ":" + this.port;
	this.storage = this.root + "/storage/"
	this.db = new function() {
		this.name = "app";
		this.port = "27017"
		this.host = "mongodb://185.22.232.114:" + this.port + "/" + this.name
	}
};