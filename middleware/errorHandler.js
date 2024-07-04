const error= {

	VALIDION_ERROR:400,
	UNAUTHORIZED:401,
	FORBIDDEN:403,
	NOT_FOUND:404,
	SERVER_ERROR:500,


}

const errorHandler=(err,req,res,next) => {
	const statusCode = res.statusCode ? res.statusCode :500;
	switch (statusCode) {
		case error.VALIDION_ERROR:
			res.json({
				title:"Validation failed",
				Message:err.Message,
			});
			break;
			case errors.NOT_FOUND:
				res.json({
					title:"not found",
					Message:err.Message,
				});
				default:
				break;

	};

}
module.exports=errorHandler;