import { Request, Response, NextFunction } from "express";

export const authorizeRole = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = res.locals.user;

        if (!user || !user.role || user.role !== requiredRole) {
            return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
        }

        next();
    };
};