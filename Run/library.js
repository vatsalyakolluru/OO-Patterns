var Car = function(loc) {
	var obj = {loc: loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};