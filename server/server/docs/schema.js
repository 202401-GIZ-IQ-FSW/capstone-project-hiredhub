/**
 * @swagger
 * components:
 *   schemas:
 *     SignUp:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - password2
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password
 *         password2:
 *           type: string
 *           format: password
 *           description: Confirmation of the user's password
 *         role:
 *           type: string
 *           description: The role of the user (e.g., employer, jobSeeker)
 *       example:
 *         email: startlink@gmail.com
 *         password: Pass1234
 *         password2: Pass1234
 *         role: employer
 *     AuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The auto-generated id of the user
 *             email:
 *               type: string
 *               format: email
 *               description: The user's email address
 *             role:
 *               type: string
 *               description: The role of the user
 *         access_token:
 *           type: string
 *           description: The JWT access token
 *         refresh_token:
 *           type: string
 *           description: The JWT refresh token
 *       example:
 *         user:
 *           id: 6693fa0fb0030ee72de68300
 *           email: startlink@gmail.com
 *           role: employer
 *         access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTcyMDk3MzgzOSwiZXhwIjoxNzIwOTc3NDM5fQ.9H6JpD9XeTiNjJk_xS5VWTww1MN9xBz_VMxOMQeNzWE
 *         refresh_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBsb3llciIsIwlhdCI6MTcyMDk3MzgzOSwiZXhwIjoxNzIwOTg0NjM5fQ.sEdIAdAcQwtzAdI7SKUuqwBzCUr06hKEtwnX9SlUr6E
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SignUp:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - password2
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password
 *         password2:
 *           type: string
 *           format: password
 *           description: Confirmation of the user's password
 *         role:
 *           type: string
 *           description: The role of the user (e.g., employer, jobSeeker)
 *       example:
 *         email: startlink@gmail.com
 *         password: Pass1234
 *         password2: Pass1234
 *         role: employer
 *     SignIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password
 *       example:
 *         email: startlink@gmail.com
 *         password: Pass1234
 *     AuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The auto-generated id of the user
 *             email:
 *               type: string
 *               format: email
 *               description: The user's email address
 *             role:
 *               type: string
 *               description: The role of the user
 *         access_token:
 *           type: string
 *           description: The JWT access token
 *         refresh_token:
 *           type: string
 *           description: The JWT refresh token
 *       example:
 *         user:
 *           id: 6693fa0fb0030ee72de68300
 *           email: startlink@gmail.com
 *           role: employer
 *         access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTcyMDk5NTU3OCwiZXhwIjoxNzIwOTk5MTc4fQ.fpwJHRmiUelSmw3_mt4ZXQjr6qXcNySddjDiFRQY9k
 *         refresh_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBs4llciI444mlhdCI6MTcyMDk5NTU3OCwiZXhwIjoxNzIxMDA2Mzc8fQ.HBGLOu7caC5wpZ57gTR0rNGutfHuktUPLX1nhVih2Ik
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SignUp:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - password2
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password
 *         password2:
 *           type: string
 *           format: password
 *           description: Confirmation of the user's password
 *         role:
 *           type: string
 *           description: The role of the user (e.g., employer, jobSeeker)
 *       example:
 *         email: startlink@gmail.com
 *         password: Pass1234
 *         password2: Pass1234
 *         role: employer
 *     SignIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password
 *       example:
 *         email: startlink@gmail.com
 *         password: Pass1234
 *     AuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The auto-generated id of the user
 *             email:
 *               type: string
 *               format: email
 *               description: The user's email address
 *             role:
 *               type: string
 *               description: The role of the user
 *         access_token:
 *           type: string
 *           description: The JWT access token
 *         refresh_token:
 *           type: string
 *           description: The JWT refresh token
 *       example:
 *         user:
 *           id: 6693fa0fb0030ee72de68300
 *           email: startlink@gmail.com
 *           role: employer
 *         access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTcyMDk5NTU3OCwiZXhwIjoxNzIwOTk5MTc8fQ.fpwJHRmiUelSmw3_mt4ZXQjr6qXcNySddjDiFRQY9k
 *         refresh_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNmYTBmYjAwMzBlZTcyZGU2ODMwMCIsInJvbGUiOiJlbXBs4llciI444mlhdCI6MTcyMDk5NTU3OCwiZXhwIjoxNzIxMDA2Mzc8fQ.HBGLOu7caC5wpZ57gTR0rNGutfHuktUPLX1nhVih2Ik
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         __v:
 *           type: integer
 *           description: Version key (for internal use)
 *       example:
 *         _id: 6691a44ad3bcb8d862bcccdd
 *         name: Software Development
 *         __v: 0
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: The authentication managing API
 *   - name: Categories
 *     description: The category managing API
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignUp'
 *     responses:
 *       200:
 *         description: The user was successfully signed up
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Some server error
 * /auth/signin:
 *   post:
 *     summary: Sign in an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignIn'
 *     responses:
 *       200:
 *         description: The user was successfully signed in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Some server error
 * /category:
 *   get:
 *     summary: Lists all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Some server error
 * /category/{id}:
 *   get:
 *     summary: Get a category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 *   put:
 *     summary: Update a category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove a category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the company
 *         name:
 *           type: string
 *           description: The name of the company
 *         address:
 *           type: string
 *           description: The address of the company
 *         phone:
 *           type: string
 *           description: The phone number of the company
 *         email:
 *           type: string
 *           description: The email address of the company
 *       example:
 *         _id: 60c72b2f9b1e8d1e0b9e5d50
 *         name: Example Company
 *         address: 123 Main St, Anytown, USA
 *         phone: (123) 456-7890
 *         email: contact@example.com
 */
