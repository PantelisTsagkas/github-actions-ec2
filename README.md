[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

# 🚀 CI/CD Pipeline Achievement

A simple Node.js Express application that showcases a CI/CD pipeline implementation using GitHub Actions to deploy to AWS EC2.

---

## 🚀 Project Overview

This project demonstrates a continuous integration and continuous deployment (CI/CD) pipeline that automatically deploys a Node.js application to AWS EC2 whenever changes are pushed to the GitHub repository.

---

## 📋 Features

* 🌐 **Simple Express Web Server**: A basic Node.js application with an Express server.
* 📄 **HTML Page Displaying CI/CD Achievements**: An HTML page that showcases the project’s key achievements.
* 📊 **JSON Endpoint for Server Information**: Provides server details like uptime.
* 🚀 **Automated Deployment to AWS EC2**: Uses GitHub Actions for seamless deployment.

---

## 🔧 Technologies Used

* **Node.js and Express**: For the web application.
* **GitHub Actions**: For CI/CD workflow automation.
* **AWS EC2**: For hosting the application.
* **SSH**: For secure deployment to the EC2 instance.

---

## 🛠️ Installation & Setup

### Prerequisites

* Node.js (v14 or later recommended)
* npm (v6 or later)
* GitHub account
* AWS account with an EC2 instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PantelisTsagkas/github-actions-ec2.git
   cd PantelisTsagkas/github-actions-ec2
   ```
1.1 Change directory

   ```bash
   cd simple-web-server
   ```
2. Install dependencies:

   ```bash
   npm install
   npm run dev
   ```

3. Configure your GitHub Secrets for AWS EC2 deployment.

---

## 🌐 API Endpoints

* `GET /` - Returns the HTML page showcasing CI/CD pipeline achievements.
* `GET /info` - Returns JSON with server information:

```json
{
  "name": "simple-web-server",
  "version": "1.0.0",
  
  "main": "server.js",
  "scripts": {
    "test": "jest",
    "prestart": "npm test",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "supertest": "^6.3.0"
  }
}
```

---

## 📈 Key Achievements

* 🚀 **Automated Deployment**: Changes pushed to the main branch are automatically deployed.
* 🔄 **Zero-Downtime Deployment**: Using PM2 for process management.
* 🔐 **Secure Credentials Management**: Using GitHub Secrets.
* 🌐 **Scalable Infrastructure**: Easy to scale with AWS EC2.

---

## 🔒 Security Considerations

* SSH keys are stored securely in GitHub Secrets.
* Application runs on a specific port that can be configured.
* Consider implementing HTTPS for production use.

---

## 👥 Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:

   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


📄 License
MIT License
📞 Contact
For any questions or feedback, please open an issue in the GitHub repository.
