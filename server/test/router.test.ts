import {describe, expect, it} from '@jest/globals'
import request from 'supertest';
import {app} from '../src/app';

describe('GET /api/1.0/crop/getWeather', () => {
  it('debería devolver 200 OK y conectarse a la API meteorológica', async () => {
    const response = await request(app).get('/api/1.0/crop/getWeather?lat=-12.04318&lon=-77.02824');
    expect(response.status).toBe(200);
  });

});

describe('POST /api/1.0/auth/register', () => {
  it('debería registrar un nuevo usuario', async () => {
    const userData = {
      name: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      cellPhone: '123456789',
      password: 'testpassword',
    };

    const response = await request(app)
      .post('/api/1.0/auth/register')
      .send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Usuario registrado exitosamente' });
  });

  it('debería devolver un error 409 si el correo electrónico ya está registrado', async () => {
    const existingUser = {
      name: 'Existing',
      lastName: 'User',
      email: 'existing@example.com',
      cellPhone: '987654321',
      password: 'existingpassword',
    };

    // Registrar el usuario existente primero
    await request(app)
      .post('/api/1.0/auth/register')
      .send(existingUser);

    // Intentar registrar el mismo usuario nuevamente
    const response = await request(app)
      .post('/api/1.0/auth/register')
      .send(existingUser);

    expect(response.status).toBe(409);
    expect(response.body).toEqual({ error: 'El correo electrónico ya está registrado' });
  });
});

describe('POST /api/1.0/auth/login', () => {
  it('debería iniciar sesión con credenciales válidas', async () => {
    const userCredentials = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const response = await request(app)
      .post('/api/1.0/auth/login')
      .send(userCredentials);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Inicio de sesión exitoso.');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('name', 'Test');
    expect(response.body.user).toHaveProperty('email', 'test@example.com');
    expect(response.body.user).toHaveProperty('accessToken');
  });

  it('debería devolver un error 404 si el correo electrónico no está registrado', async () => {
    const nonExistingUser = {
      email: 'nonexisting@example.com',
      password: 'nonexistingpassword',
    };

    const response = await request(app)
      .post('/api/1.0/auth/login')
      .send(nonExistingUser);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'El correo electrónico no está registrado' });
  });

  it('debería devolver un error 401 si las credenciales son inválidas', async () => {
    const invalidCredentials = {
      email: 'test@example.com',
      password: 'invalidpassword',
    };

    const response = await request(app)
      .post('/api/1.0/auth/login')
      .send(invalidCredentials);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Credenciales inválidas.' });
  });
});