import { Request, Response } from "express";
import pool from "../../database";


export const postTodo = async (req: Request, res: Response) => {
const {text,user}=req.body
console.log(text,user);
    console.log(`INSERT INTO public.todo(text,user_email) VALUES ('${text}','${user}')`);

  try {
    await pool.query(
      `INSERT INTO public.todo(text,user_email) VALUES ('${text}','${user}')`
    );
    
    res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};