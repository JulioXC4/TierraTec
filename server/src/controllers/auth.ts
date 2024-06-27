import bcrypt from "bcrypt";
import { Request, Response } from "express";

import User from "../schemas/User";

import { registerSchema, loginSchema } from "../utils/joi/auth-validator";
import { generateBearerToken } from "../utils/jwt";

// Simulación de una base de datos
const database = {
  users: [] as any[],

  async findOne(query: any, projection?: string): Promise<any | null> {
    // Simulación de la búsqueda en la base de datos
    const user = this.users.find((u) => u.email === query.email);
    return user ? { ...user } : null;
  },

  async save(collection: string, data: any): Promise<void> {
    // Simulación de guardar datos en la base de datos
    this.users.push(data);
  },
};

/* export const register = async (req: Request, res: Response) => {
  try {
    const validationResult = registerSchema.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de registro no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de registro no válidos" });
        }
        const { name, lastName , email, cellPhone, password } = validationResult.value;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "El correo electrónico ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);

        const newUser = new User({
            name, lastName , email, cellPhone, password: hashedPassword
        });

    await newUser.save();

    res.status(200).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validationResult = loginSchema.validate(req.body, {
      allowUnknown: true,
      stripUnknown: true,
    });

    if (validationResult.error) {
      console.error({
        error: "Datos de logeo no válidos",
        details: validationResult.error.details,
      });
      return res.status(400).json({ error: "Datos de logeo no válidos" });
    }
    const { email, password } = validationResult.value;

    const existingUser = await User.findOne(
      { email },
      "name lastName email cellPhone password"
    );

    if (!existingUser) {
      return res
        .status(404)
        .json({ error: "El correo electrónico no está registrado" });
    }

    const passwordMatch = bcrypt.compareSync(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    const token = generateBearerToken(existingUser._id);

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        cellPhone: existingUser.cellPhone,
        email: existingUser.email,
        accessToken: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al intentar logear al usuario" });
  }
};
 */
export const register = async (req: Request, res: Response) => {
  try {
    const validationResult = registerSchema.validate(req.body);

    if (validationResult.error) {
      console.error({
        error: "Datos de registro no válidos",
        details: validationResult.error.details,
      });
      return res.status(400).json({ error: "Datos de registro no válidos" });
    }
    const { name, lastName, email, cellPhone, password } = validationResult.value;

    // Simulación de la búsqueda de usuario existente
    const existingUser = await database.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "El correo electrónico ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);

    // Simulación de guardar el nuevo usuario
    await database.save("users", { name, lastName, email, cellPhone, password: hashedPassword });

    res.status(200).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validationResult = loginSchema.validate(req.body, {
      allowUnknown: true,
      stripUnknown: true,
    });

    if (validationResult.error) {
      console.error({
        error: "Datos de logeo no válidos",
        details: validationResult.error.details,
      });
      return res.status(400).json({ error: "Datos de logeo no válidos" });
    }
    const { email, password } = validationResult.value;

    // Simulación de búsqueda de usuario por correo electrónico
    const existingUser = await database.findOne({ email }, "name lastName email cellPhone password");

    if (!existingUser) {
      return res
        .status(404)
        .json({ error: "El correo electrónico no está registrado" });
    }

    const passwordMatch = bcrypt.compareSync(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    const token = generateBearerToken(existingUser._id);

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        cellPhone: existingUser.cellPhone,
        email: existingUser.email,
        accessToken: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al intentar logear al usuario" });
  }
};
