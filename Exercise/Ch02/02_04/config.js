var env=process.env;

export default
{
 port : env.PORT || 8080
};


export  const nodeenv = env.NODE_ENV || 'development'