function getSchedule() {
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'schedule/2b0559ddb065062cb63733addec05f1a'
	};

	return MFP.Server.invokeHttp(input);
}
