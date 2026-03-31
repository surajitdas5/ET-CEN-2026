function logger(req, res, next){
    console.log(`${new Date().toISOString()} ${req.url} ${req.method}`)
    next();
}

export default logger