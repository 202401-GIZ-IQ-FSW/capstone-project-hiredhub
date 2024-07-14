const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
    const payload = {
        id: user._id,
        role: user.role
    }
    const token = jwt.sign( payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' } )
    return token
}

const generateRefreshToken = (user) => {
    const payload = {
        id: user._id,
        role: user.role
    }
    const token = jwt.sign( payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3h' } )
    return token
}

module.exports = { generateAccessToken, generateRefreshToken };