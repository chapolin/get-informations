var itensData = [];

Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObj = function(key) {
	return JSON.parse(this.getItem(key));
};

var insertValue = function(value) {
	itensData.push(value);
	
	localStorage.setObj("itensData", itensData);
};

var getValue = function() {
	if(itensData.length > 0) {
		return itensData;
	}
	
	itensData = localStorage.getObj("itensData") || [];
	
	return itensData;
};
