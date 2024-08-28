import express from "express";

import { postUser } from "../..//controllers/postUser";
import { getUser, } from "../..//controllers/getUser";

import {getUserByIdOrEmail} from "../../controllers/getUserByIdOrEmail"
const router = express.Router();


/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: add user
 *     tags: [User]
  *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/addUser").post(postUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: user's data
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/users").get(getUser);

/**
 * @swagger
 * /client:
 *   get:
 *     summary: user's data
 *     tags: [User]
 *     parameters:
 *       - name: email
 *         in: query
 *         description: The email of the user to retrieve
 *         required: true
 *         schema:
 *          type: string
*       - name: password
 *         in: query
 *         description: The password of the user to retrieve
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/client").get(getUserByIdOrEmail);





export default router;
