import {describe, expect, it} from '@jest/globals'
import request from 'supertest';
import {app} from '../src/app';

describe('GET /api/1.0/crop/getWeather', () => {
  it('debería devolver 200 OK y conectarse a la API meteorológica', async () => {
    const response = await request(app).get('/api/1.0/crop/getWeather?lat=-12.04318&lon=-77.02824');
    expect(response.status).toBe(200);
  });

});