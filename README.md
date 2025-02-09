# 🐳 Nginx proxy with nodeJS and MySQL 🚀

![Docker](https://img.shields.io/badge/DockerHub-OK-blue?logo=docker) ![NodeJS](https://img.shields.io/badge/NodeJS-21-green?logo=nodedotjs)  ![NodeJS](https://img.shields.io/badge/MySQL-21-4479A1?logo=mysql) ![Dockerize](https://img.shields.io/badge/Dockerize-v.9.2-green) 

This project demonstrates how to create a **Docker image with nginx as a reverse proxy and application NodeJS made a register a name in Database MySQL**.

## 📥 Download the Docker Image from Docker Hub

To download and run the minimal Golang Docker image from Docker Hub, follow these steps:

1. **Made the download the repository**  
   Inside the folder `node` run:
   ```bash
   npm install
   ```
2. **Docker Compose**

    Inside the root Project folder run

    ```bash
    docker compose buid
    ```
    After run
    ```bash
    docker compose up
    ```
3. **Access the application page**

    ```bash
    http//localhost:8080
    ```
    You should see the output:

    ```bash
    Full Cycle Rocks!

    [INPUT to save New NAME]

    [TABLE WITH THE NAMES - LINK TO DELETE NAME]
    ```
   

## 📚 Graceful Teaching Methodology
This project is designed to teach the following concepts in a simple and effective way:

**Minimalism in Docker**: Learn how to create lightweight Docker images using multi-stage builds.

**Node Basics**: Understand how to write and compile a simple Node (Express) application.

**Docker Compose**: Create a docker compose with step and waiting dependecies.

## 📬 Contact Me
If you have any questions, suggestions, or just want to connect, feel free to reach out:

📧 Email: contato.mike.oliveiracosta@outlook.com  

🐙 GitHub: [mikeoliveira](https://github.com/mikeoliveira)

🔗 LinkedIn: [Mike Oliveira](https://www.linkedin.com/in/mike-oliveira-970bbb56/)