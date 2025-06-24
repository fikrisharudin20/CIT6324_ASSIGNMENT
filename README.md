# TechFlow Solutions: Enterprise Application Integration Platform

A modular enterprise system powered by Node.js, Express, PostgreSQL, React, and Docker. Built to manage business-critical modules such as Invoices, Subscriptions, Support, Inventory, and Analytics—fully integrated through a centralized API Gateway.

---

## 🚀 Features

- **Microservices Architecture** – Individual services for each business domain
- **API Gateway** – Unified entry point with routing, security, and service abstraction
- **PostgreSQL** – Primary relational datastore for structured module data
- **React Frontend** – Interactive dashboards with form inputs and real-time table updates
- **Dockerized Deployment** – Fully containerized with `docker-compose` orchestration
- **Logging & Monitoring** – Winston-based logging and Prometheus/Grafana integration-ready
- **Future-Ready** – Designed for Kubernetes scaling and hybrid cloud integration

---

## 📁 Modules

| Module         | Functionality                                       |
|----------------|-----------------------------------------------------|
| Invoices       | Create, retrieve, and manage invoice records        |
| Subscriptions  | Manage user subscriptions and billing cycles        |
| Support        | Submit and track support tickets                    |
| Analytics      | Log API activities and view insights                |
| Inventory      | Track stock levels and reorder thresholds           |

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, Sequelize, PostgreSQL
- **Frontend**: React.js, HTML/CSS, Chart.js
- **API Gateway**: Express Gateway
- **Containerization**: Docker, Docker Compose
- **Monitoring**: Winston logging (Prometheus/Grafana compatible)

---

## Video Demo
https://www.youtube.com/watch?v=a_OpH7z_Y6A

---

## 📦 Getting Started

```bash
# Clone this repo
git clone https://github.com/your-username/CIT6324_ASSIGNMENT.git
cd techflow-eai

# Download Docker For Setup
https://www.docker.com/products/docker-desktop/

# Build and run the system
docker-compose up --build
