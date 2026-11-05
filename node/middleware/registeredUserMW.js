const jwt = require('jsonwebtoken')

// Allows the request through only if it carries a valid JWT. The decoded user is available as req.user.
const verifyJwt = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization
    if (!authHeader?.startsWith('Bearer '))
        return res.status(401).send('unauthorized')
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.TOKEN_PSWD,
        (err, decode) => {
            if (err)
                return res.status(401).send('unauthorized')
            req.user = decode
            next()
        }
    )
}

module.exports = verifyJwt
