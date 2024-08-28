import express from "express";

import { getCategoriesController } from "../../controllers/categories";

const router = express.Router();


/**
 * @swagger
 * /categories:
 *   post:
 *     summary: return categories
 *     tags: [Categories]
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
 *               franchiseId:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                  type: string
 *                 example:
 *                           {"email":"test@gmail.com",password:"pass"}
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
router.route("/categories").post(getCategoriesController);



export default router;
