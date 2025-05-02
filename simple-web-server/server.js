const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CI/CD Pipeline Achievement</title>
        <style>
            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
                color:rgb(206, 118, 18);
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            .step {
                margin: 20px 0;
                padding: 15px;
                background-color: #f8f9fa;
                border-left: 4px solid #3498db;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>My CI/CD Pipeline Achievement</h1>
            
            <div class="step">
                <h2>🚀 Project Overview</h2>
                <p>Successfully implemented a CI/CD pipeline using GitHub Actions to automatically deploy a Node.js application to AWS EC2.</p>
            </div>

            <div class="step">
                <h2>🔧 Pipeline Components</h2>
                <ul>
                    <li>GitHub Actions for automation</li>
                    <li>Node.js with Express</li>
                    <li>AWS EC2 for hosting</li>
                    <li>SSH for secure deployment</li>
                </ul>
            </div>

            <div class="step">
                <h2>📝 Pipeline Steps</h2>
                <ol>
                    <li>Code changes pushed to GitHub</li>
                    <li>GitHub Actions workflow triggered</li>
                    <li>Code tested and built</li>
                    <li>SSH connection to EC2 established</li>
                    <li>Application deployed and restarted</li>
                </ol>
            </div>

            <div class="step">
                <h2>✨ Key Achievements</h2>
                <ul>
                    <li>Automated deployment process</li>
                    <li>Zero-downtime deployment</li>
                    <li>Secure credentials management</li>
                    <li>Scalable infrastructure setup</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.get('/info', (req, res) => {
  res.json({
    name: 'Simple Web Server',
    version: '1.0.0',
    uptime: process.uptime()
  });
});

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

module.exports = app;