const request = require('supertest');
const express = require('express');
const app = require('./server'); // Assuming your Express app is in a file named 'server.js'

describe('GET /', () => {
  it('should return status 200 and correct HTML', async () => {
    const response = await request(app).get('/');
    
    // Check the response status
    expect(response.status).toBe(200);
    
    // Check that the returned HTML contains the expected title
    expect(response.text).toContain('<title>CI/CD Pipeline Achievement</title>');
    
    // Check if the response contains a section with the Project Overview heading
    expect(response.text).toContain('<h2>🚀 Project Overview</h2>');
  });
});

describe('GET /info', () => {
  it('should return status 200 and a JSON response', async () => {
    const response = await request(app).get('/info');
    
    // Check the response status
    expect(response.status).toBe(200);
    
    // Check the structure of the JSON response
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('uptime');
  });
});
describe('GET /nonexistent', () => {
  it('should return status 404 for a nonexistent route', async () => {
    const response = await request(app).get('/nonexistent');
    
    // Check the response status
    expect(response.status).toBe(404);
    
    // Check that the returned HTML contains the expected error message
    expect(response.text).toContain('<h1>404 Not Found</h1>');
  });
});
const app = require('./server');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
