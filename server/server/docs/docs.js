/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: The authentication managing API
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
 * /auth/signout:
 *   post:
 *     summary: Sign out the current user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logout successful
 *       500:
 *         description: Some server error
 * /auth/google:
 *   post:
 *     summary: Authenticate using Google OAuth2
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: The Google OAuth2 token
 *             required:
 *               - token
 *             example:
 *               token: your-google-oauth-token
 *     responses:
 *       200:
 *         description: Successful authentication with Google
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Bad request, invalid token or other validation errors
 *       500:
 *         description: Some server error
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh the access token using a refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: The refresh token to get a new access token
 *             required:
 *               - token
 *             example:
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTE0ZDgyMzMzOGY4Y2QyY2YyMGM2ZCIsInJvbGUiOiJqb2JTZWVrZXIiLCJpYXQiOjE3MjA4MDUzNzksImV4cCI6MTcyMDgwNTk3OX0.jdlyNttazWNaeedPkwYVFEptR4PRBSiQiVljay_TFEo
 *     responses:
 *       200:
 *         description: Successful token refresh
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   description: The new access token
 *                 refresh_token:
 *                   type: string
 *                   description: The new refresh token
 *               required:
 *                 - access_token
 *                 - refresh_token
 *               example:
 *                 access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTFhMDg3ZDNiY2I4ZDg2MmJjY2NkMCIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTcyMDk5Nzk0NCwiZXhwIjoxNzIxMDAxNTQ0fQ.Ta_XDK5p-WyzBRjEmcsWtjI3YdYqzZEO4jfj-Qea5ag
 *                 refresh_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTFhMDg3ZDNiY2I4ZDg2MmJjY2NkMCIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTcyMDk5Nzk0NCwiZXhwIjoxNzIxMDA4NzQ0fQ.PLSqP075zaGXOnaTYfpvxbtKaLJ2q1Jg3rjXdmQqbio
 *       400:
 *         description: Bad request, invalid token or other validation errors
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * tags:
 *   - name: Companies
 *     description: The companies managing API
 * /companies:
 *   get:
 *     summary: Get a list of all companies
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: A list of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Create a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the company
 *               website:
 *                 type: string
 *                 description: The company's website URL
 *               description:
 *                 type: string
 *                 description: A brief description of the company
 *               logo:
 *                 type: string
 *                 format: binary
 *                 description: The company's logo
 *               location:
 *                 type: string
 *                 description: The location of the company
 *               history:
 *                 type: string
 *                 description: A brief history of the company
 *               mission:
 *                 type: string
 *                 description: The company's mission statement
 *               values:
 *                 type: string
 *                 description: Comma separated core values of the company
 *               userId:
 *                 type: string
 *                 description: ID of the user who created the company entry
 *               ceoName:
 *                 type: string
 *                 description: Name of the CEO
 *               ceoBio:
 *                 type: string
 *                 description: A brief biography of the CEO
 *               ceoLinkedin:
 *                 type: string
 *                 description: LinkedIn profile URL of the CEO
 *               ceoTwitter:
 *                 type: string
 *                 description: Twitter handle of the CEO
 *     responses:
 *       201:
 *         description: The company was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Some server error
 * /companies/{id}:
 *   get:
 *     summary: Get a single company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the company to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested company
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: Company not found
 *       500:
 *         description: Some server error
 *   put:
 *     summary: Update a company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the company to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the company
 *               website:
 *                 type: string
 *                 description: The company's website URL
 *               description:
 *                 type: string
 *                 description: A brief description of the company
 *               logo:
 *                 type: string
 *                 format: binary
 *                 description: The company's logo
 *               location:
 *                 type: string
 *                 description: The location of the company
 *               history:
 *                 type: string
 *                 description: A brief history of the company
 *               mission:
 *                 type: string
 *                 description: The company's mission statement
 *               values:
 *                 type: string
 *                 description: Comma separated core values of the company
 *               userId:
 *                 type: string
 *                 description: ID of the user who created the company entry
 *               ceoName:
 *                 type: string
 *                 description: Name of the CEO
 *               ceoBio:
 *                 type: string
 *                 description: A brief biography of the CEO
 *               ceoLinkedin:
 *                 type: string
 *                 description: LinkedIn profile URL of the CEO
 *               ceoTwitter:
 *                 type: string
 *                 description: Twitter handle of the CEO
 *     responses:
 *       200:
 *         description: The company was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       400:
 *         description: Bad request, validation error
 *       404:
 *         description: Company not found
 *       500:
 *         description: Some server error
 *   delete:
 *     summary: Delete a company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the company to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The company was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Company deleted successfully
 *       404:
 *         description: Company not found
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         CEO:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             bio:
 *               type: string
 *             linkedin:
 *               type: string
 *             twitter:
 *               type: string
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         website:
 *           type: string
 *         description:
 *           type: string
 *         logo:
 *           type: string
 *         location:
 *           type: string
 *         history:
 *           type: string
 *         mission:
 *           type: string
 *         values:
 *           type: array
 *           items:
 *             type: string
 *         userId:
 *           type: string
 *         __v:
 *           type: integer
 */
