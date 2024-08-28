import pool from "../database";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
const {email,password}=req.body
  try {
    await pool.query(
      `INSERT INTO public.users(email,password) VALUES ('${email}','${password}')`
    );
    res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
