// const jwt = require('jsonwebtoken');

// const JwtAuthorize = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const parts = authHeader.split(' ');

//         if (parts.length === 2 && parts[0] === 'Bearer') {
//             const token = parts[1];

//             jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//                 if (err) {
//                     return res.status(403).json({ message: 'Token is invalid or expired' });
//                 }

//                 req.user = user;
//                 next();
//             });
//         } else {
//             return res.status(401).json({ message: 'Authorization header format is Bearer <token>' });
//         }
//     } else {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// module.exports = JwtAuthorize;
