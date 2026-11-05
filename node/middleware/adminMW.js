const jwt = require('jsonwebtoken')

// Allows the request through only if it carries a valid JWT of a user with the 'admin' role.
const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization
    if (!authHeader?.startsWith('Bearer '))
        return res.status(401).send('unauthorized')
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.TOKEN_PSWD,
        (err, decode) => {
            if (err)
                return res.status(401).send('unauthorized')
            if (decode.role !== 'admin')
                return res.status(403).send('forbidden')
            req.user = decode
            next()
        }
    )
}

module.exports = verifyAdmin
