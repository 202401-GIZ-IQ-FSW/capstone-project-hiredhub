const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const payload = {
        id: user._id,
        role: user.role
    }
    const token = jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: '1h' } )
    return token
}

module.exports = generateToken