import pool from "../database";
import { Request, Response } from "express";


export const getUserByIdOrEmail = async (req: Request, res: Response) => {
    const {  email,password } = req.query;
  
    try {
      const query = `
        SELECT * FROM public.users
        WHERE email='${email}' and password='${password}'
      `;
  
      const result = await pool.query(query);
  
      if (result.rows.length > 0) {
        return res.json({data:result.rows[0],status:200}); 
      } else {
        return res.status(404).json({data:{},status:404});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };