function getEmployeeRating() {
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : '?results=20&nat=gb'
	};

	return MFP.Server.invokeHttp(input);
}