const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  
  it('should return HTML content', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('<!DOCTYPE html>');
    expect(res.text).toContain('CI/CD Pipeline Achievement');
  });
});

describe('GET /info', () => {
  it('should return server info as JSON', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Simple Web Server');
    expect(res.body).toHaveProperty('version', '1.0.0');
    expect(res.body).toHaveProperty('uptime');
    expect(typeof res.body.uptime).toBe('number');
  });
});

describe('Main module execution', () => {
  // Store original methods before mocking
  const originalListen = app.listen;
  const originalConsoleLog = console.log;
  const originalRequireMain = require.main;
  
  beforeEach(() => {
    // Mock app.listen
    app.listen = jest.fn((port, host, callback) => {
      callback();
      return { on: jest.fn() };
    });
    
    console.log = jest.fn();
  });
  
  afterEach(() => {
    // Restore original methods
    app.listen = originalListen;
    console.log = originalConsoleLog;
    // Restore the original require.main
    jest.resetModules();
  });
  
  
  
  it('should not start server when imported as a module', () => {
    // Save the original require.main
    const originalMain = require.main;
    
    try {
      // Temporarily set require.main to something other than module
      require.main = {};
      
      // Re-require the server
      jest.resetModules();
      require('./server');
      
      // Verify listen was not called
      expect(app.listen).not.toHaveBeenCalled();
    } finally {
      // Restore the original require.main
      require.main = originalMain;
    }
  });
});

describe('404 handling', () => {
  it('should return 404 for non-existent routes', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.statusCode).toBe(404);
  });
});
