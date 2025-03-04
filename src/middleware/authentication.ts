import { Request, Response, NextFunction } from "express";

import admin from "firebase-admin";
 
export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({ error: "Unauthorized: No token provided" });

    }
 
    const token = authHeader.split(" ")[1];
 
    try {

        const decodedToken = await admin.auth().verifyIdToken(token);

        res.locals.user = decodedToken; // Store user data in res.locals

        next();

    } catch (error) {

        res.status(401).json({ error: "Unauthorized: Invalid token" });

    }

};

 