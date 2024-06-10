import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken'
import User from '../schemas/User'
import Admin from '../schemas/Admin';
const { SECRET } = process.env

interface User {
    _id: string
    name: string
    lastName: string
    email: string
    cellPhone: Number;
}

interface AdminPayload {
    _id: string;
    email: string;
}

export interface AdminRequest extends Request {
    admin?: AdminPayload;
}

export interface AuthRequest extends Request {
    user?: User
}

export const verifyAccessToken = async (req: AuthRequest, res: Response, next: NextFunction) => {

    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Token de acceso no proporcionado' })
    }

    if (!authorizationHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Formato de token no válido' });
    }

    const token = authorizationHeader?.substring(7)

    jwt.verify(token, SECRET as Secret, async (err: VerifyErrors | null, decodedToken: any) => {
        if (err) {
            console.log("Error de token ", err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token de sesion expirado' })
            } else {
                return res.status(401).json({ message: 'Token de sesion invalido' })
            }
        }

        try {
            const user = await User.findById(decodedToken.userId)
            if (!user) {
                console.error("Usuario no encontrado")
                return res.status(404).json({ message: "Usuario no encontrado" })
            }
            
            req.user = { _id: user._id, name: user.name, lastName: user.lastName, email: user.email, cellPhone: Number(user.cellPhone) }
            next()
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Error del servidor", error })
        }
    })
}

export const verifyAdminAccessToken = (req: AdminRequest, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Formato de token no válido' });
    }

    const token = authorizationHeader.substring(7);

    jwt.verify(token, SECRET as Secret, async (err: VerifyErrors | null, decodedToken: any) => {
        if (err) {
            console.error("Error de token ", err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token de sesión expirado' });
            } else {
                return res.status(401).json({ message: 'Token de sesión inválido' });
            }
        }

        try {
            const admin = await Admin.findById(decodedToken.userId);

            if (!admin) {
                console.error("Administrador no encontrado");
                return res.status(404).json({ message: "Administrador no encontrado" });
            }

            req.admin = { _id: admin._id, email: admin.email };
            next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error del servidor", error });
        }
    });
};