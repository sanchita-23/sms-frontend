
# SMS

## 1. Project Description

### 1.1 Project Name

__Student Management System (SMS) Using AWS__

#### 1.2 Description

The __Student Management System (SMS)__ is a cloud-based web application designed to help educational institutions efficiently manage student records. The system leverages AWS services for security, scalability, and reliability.

#### 1.3 Key Features
	•	User Management: Secure authentication with AWS Cognito.
 
	•	Student Data Management: CRUD operations on student records (AWS RDS - MySQL).
 
	•	File Management: Secure file storage using AWS S3.
 
	•	Application Hosting: Backend services hosted on AWS EC2 with auto-scaling.
 
	•	Monitoring: AWS CloudWatch for system performance tracking.
 
	•	CI/CD Automation: AWS CodePipeline and CodeDeploy for seamless deployment.

---

#### 2. Overview

#### 2.1 Purpose

The SMS project is intended for school administrators, teachers, and students. It provides a web-based platform for managing student records with secure access control.

#### 2.2 Scope

###### Included Features:

 __User Authentication:__  <br>
	•	AWS Cognito-based login system.   <br>
	•	Role-based access control (Admin, Teacher, Student).  <br>

 __Student Data Management:__  <br>
	•	Add, edit, delete, and view student records. <br>
	•	AWS RDS (MySQL) for structured data storage <br>

 __File Management:__  <br>
	•	Upload and store documents in AWS S3. <br>
	•	Secure access with role-based permissions <br>.

 __Application Hosting:__  <br>
	•	Backend services run on AWS EC2. <br>
	•	Load balancing via AWS Elastic Load Balancer. <br>

__Monitoring & Alerts:__  <br>
	•	CloudWatch monitoring with email/SMS alerts via AWS SNS.

 __Automated Deployment:__ <br>
	•	CI/CD pipeline using AWS CodePipeline and CodeDeploy.

###### Excluded Features:

Integration with third-party Learning Management Systems (LMS).<br>
 AI-driven analytics.<br>
 On-premise support or hybrid cloud setup.<br>

---

#### 3. System Architecture

#### 3.1 Overview

The system follows a microservices-based cloud architecture, utilizing AWS services for hosting, authentication, database management, storage, and monitoring.

#### 3.2 Architectural Components
	•	Frontend: React.js (Static hosting on AWS S3 + CloudFront).
	•	Backend: Java Spring Boot (Hosted on AWS EC2).
	•	Database: AWS RDS (MySQL) for structured student data.
	•	Authentication: AWS Cognito (User and role management).
	•	Storage: AWS S3 (Document and file storage).
	•	Monitoring: AWS CloudWatch (Performance tracking and logs).
	•	Deployment: AWS CodePipeline (Automated CI/CD).

#### 3.3 Architectural Diagrams
	•	Component Diagram (EC2, S3, RDS, Cognito integration).
	•	Data Flow Diagram (User → API → Database interactions).
	•	Deployment Diagram (AWS infrastructure setup).
 ---

 #### 4. Data Dictionary

 | *Table Name* | *Field*     | *Description*                        | *Type*       |
|--------------|-------------|--------------------------------|--------------|
| *User*      | *UserID*   | Unique user identifier          | VARCHAR(36) |
|              | *Username*  | User’s login name               | VARCHAR(50) |
|              | *Password*  | Encrypted password (AWS Cognito) | VARCHAR(255) |
| *Student*   | *StudentID* | Unique student ID               | VARCHAR(36) |
|              | *Name*      | Full student name               | VARCHAR(100) |
|              | *Grade*     | Academic grade                  | VARCHAR(10) |

---

#### 5. Data Design

#### 5.1 Data Model
- *Users:* Managed using *AWS Cognito*.
- *Students:* Stored in *AWS RDS (MySQL)*.
- *Files:* Stored securely in *AWS S3* with IAM access controls.

#### 5.2 Entity Relationship Diagram (ERD)
- *User (1) → (M) Students*
- *Student (1) → (M) Files*

---

#### 6. User Interface Design

#### 6.1 UI Overview
The web-based frontend is built using *React.js, styled with **Material UI, and follows a **clean, intuitive design*.

#### 6.2 User Interface Navigation
➡ *Login Page* → *Dashboard* → *Student Management* → *Reports*

#### 6.3 Screens
1. *Login Page* – AWS Cognito-based authentication.  
2. *Dashboard* – Admin/Teacher views student summary.  
3. *Student Management* – CRUD operations on student records.  
4. *Reports* – View student statistics and download reports.  

---

#### 7. Testing

#### 7.1 Test Plan
✅ *Unit Testing* – JUnit for backend, Jest for frontend.  
✅ *Integration Testing* – Testing backend integration with AWS services.  
✅ *User Testing* – Ensuring smooth UI experience.  
✅ *Performance Testing* – Load tests via AWS CloudWatch.  

---

#### 8. Monitoring

#### 8.1 Monitoring Strategy
- *EC2 Metrics* – CPU, memory, instance health.  
- *Database Performance* – Query execution time, slow queries.  
- *File Access Logs* – AWS S3 tracking.  
- *Authentication Logs* – AWS Cognito login attempts.  

#### 8.2 Alerts
- *EC2 CPU > 80%* → Trigger *SNS alert*.  
- *API Response > 2s* → Send *CloudWatch notification*.  
- *Unauthorized Login Attempts* → Security alert via *AWS Cognito*.  

---

#### 9. Deployment Process

#### 9.1 Automated CI/CD Pipeline
1. *Code Push* → GitHub.  
2. *AWS CodePipeline* triggers build.  
3. *AWS CodeDeploy* deploys the backend on *EC2*.  
4. *Frontend is deployed* to *AWS S3 + CloudFront*.  
5. *Monitoring enabled* via *AWS CloudWatch*.  

---

#### 10. Future Enhancements
- *Integration with Learning Management Systems (LMS).*  
- *Advanced analytics using AWS AI/ML services.*  
- *Migration to AWS Lambda for serverless architecture.*  

---

#### 11. References
- 📖 *AWS Documentation* (EC2, S3, RDS, Cognito, CloudWatch).  
- 📖 *Java Spring Boot Guides*.  
- 📖 *React.js Official Documentation*.


---
#### DEMO 

- *Implementation OF File Management* –  using AWS S3
  
https://www.loom.com/share/060a07755477416e9783aae0988673fa?sid=592043e9-df3b-434a-b83a-882d4264fd51

---


*Read-Only AWS Account*

- *Console sign-in URL*: [User Console](https://539247474319.signin.aws.amazon.com/console)
- *Username*: readonly-reviewer
- *Password*:sSI0L%g&

## Architecture Overview

| Service             | AWS Icon Name                    | Purpose                           |
|---------------------|----------------------------------|-----------------------------------|
| *Amazon Cognito*  | Amazon-Cognito                 | Auth for Admin/Teacher login      |
| *Amazon RDS (MySQL)* | Amazon-RDS                 | Store student records             |
| *Amazon S3*       | Amazon-Simple-Storage-Service  | Store student reports and uploads |
| *Amazon CloudWatch* | Amazon-CloudWatch            | Monitoring & system metrics       |
| *Amazon SNS*      | Amazon-Simple-Notification-Service | Email alerts for S3 metrics  |
| *API Gateway / Express.js* | Amazon-API-Gateway   | Secure routing for backend APIs   |
| *IAM*             | IAM                            | Access control + S3 policy        |
| *React*           | (Custom Icon)                  | Frontend for Admin Dashboard      |

---

## Features

- *Authentication* using AWS Cognito
- *Student CRUD Operations* stored in AWS RDS
- *Report Generation* using jsPDF + autoTable
- *Upload to S3* with proper access roles
- *Monitoring* via CloudWatch alarms on object count
- *Email alerts* using SNS
- *Visual Dashboard* for students & reports

---
