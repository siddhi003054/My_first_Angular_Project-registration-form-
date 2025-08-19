**<h1> Angular Student Registration Form</h1>**

**<h2> Project Overview</h2>**

This is a Student Registration Form built using Angular. It collects student details such as name, email, password, gender, date of birth, phone, department, skills, and address. The data is stored in a Supabase database after form submission.

**<h3>Key Features:</h3>**
Form validation using Reactive Forms
Multi-selection of skills using FormArray
Integration with Supabase for database storage
Navigation to a success page after registration
Standalone Angular components and services

###**Folder Structure**
hello-world/
├─ src/app/
│  ├─ registration/
│  │  ├─ registration.ts
│  │  ├─ registration.html
│  │  └─ registration.css
│  ├─ success/
│  │  ├─ success.ts
│  │  ├─ success.html
│  │  └─ success.css
│  └─ supabase.service.ts
├─ angular.json
├─ package.json
└─ README.md

**Technologies Used**
Angular 20 (Standalone Components, Reactive Forms)
Supabase (PostgreSQL Database as a Service)
TypeScript
HTML & CSS

**How to Run Locally**
**Clone the repository:**
git clone https://github.com/siddhi003054/My_first_Angular_Project-registration-form-.git

**Navigate into the project folder:**
cd My_first_Angular_Project-registration-form-

**Install dependencies:**
npm install

**Start the Angular development server:**
ng serve

**Open your browser at:**
http://localhost:4200
