import { Request, Response } from "express";
/* import User from '../schemas/User'
import { updateUserSchema } from "../utils/joi/user-validator"; */
import { User } from "models/user";
/* 
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, cellphone } = req.body
        const newUser = new User({
            name,
            cellphone
        })

        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select(['-password']).populate('pets');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = (req as any).user
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = (req as any).user
        const currentUser = await User.findById(user._id);
        if (!currentUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const validationResult = updateUserSchema.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de actualización del usuario inválidos.",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de actualización del usuario inválidos." });
        }

        const updateData = validationResult.value;

        currentUser.name = updateData.name;
        currentUser.lastName = updateData.lastName;
        currentUser.cellPhone = updateData.cellPhone;
        currentUser.email = updateData.email;

        await currentUser.save();

        res.status(200).json(currentUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

 */

const users: User[] = []

export const createUser = async (req: Request, res: Response) => {
    try {
        const { _id, name, cellphone, lastName, email, cellPhone, password } = req.body
        const newUser = { _id, name, cellphone, lastName, email, cellPhone, password }
        users.push(newUser)
        res.status(201).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
