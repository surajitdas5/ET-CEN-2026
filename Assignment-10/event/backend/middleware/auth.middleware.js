import jwt from "jsonwebtoken"

function auth(req, res, next){
    let token = req.cookies.token
    if(!token) return res.status(401).send({message: "Not Logged in"});

    try {
        let decoaded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoaded
        next()
    } catch (error) {
        res.status(401).send({message: "Token is not valid"})
    }
}

export default auth