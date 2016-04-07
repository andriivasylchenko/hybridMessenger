function getDistance(opt) {
    
    var api_key = MFP.Server.getPropertyValue("api_key");
    
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'maps/api/distancematrix/json?' + opt + '&key=' + api_key
	};

	return MFP.Server.invokeHttp(input);
}