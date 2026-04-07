<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=2500&pause=1000&color=FFD700&center=true&vCenter=true&width=600&lines=🐾+PetBond+BD+Project" alt="Typing Title">
</h1>

---

## 📝 Project Overview
**PetBond BD** is a full-stack web application for pet adoption and pet lovers. Users can browse pets, filter them by category, deposit money for adoption, and submit adoption requests. Admins can manage pets, view adoption requests, and approve or reject adoptions.  

This project is built to provide a **smooth, interactive, and responsive experience** for users and includes modern web technologies.  

---

## 💻 Tech Stack

### Frontend
- **ReactJS** (with TailwindCSS & DaisyUI)  
- React Router for page navigation  
- Axios for API communication  

### Backend
- **Django** & **Django REST Framework**  
- PostgreSQL/MySQL (or SQLite) as database  
- JWT Authentication  

### Deployment
- Frontend deployed on **Vercel**  
- Backend deployed on **Vercel**  

---

## 🚀 Features

### User Features
- Browse and search pets by category  
- Filter pets by type, age, or availability  
- Deposit money for future adoptions  
- Submit adoption requests with details  
- Leave reviews for adopted pets  

### Admin Features
- Add, update, and delete pets  
- View customer adoption requests  
- Approve or reject adoption requests  
- Monitor deposits and user activity  

### Other Features
- Responsive design for mobile & tablet  
- Clean UI using TailwindCSS & DaisyUI  
- Notifications for user actions (e.g., deposit success, adoption approval)  

---

## 🖼️ Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/b6414f91-131d-4213-b62c-b70a3f7f9d23" width="45%" />
  <img src="https://github.com/user-attachments/assets/6af51b9a-bdf3-4794-9ebc-69f32eed37ea" width="45%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9a57224f-ca86-42de-be9d-becfc4a2dbd5" width="45%" />
  <img src="https://github.com/user-attachments/assets/c2b8d56c-1de6-4c5d-b5e4-d35a304a6ff9" width="45%" />
</p>

---

## ⚙️ Installation

### Backend
```bash
git clone https://github.com/Israt022/PetBond-BD-backend.git
cd PetBond-BD-backend
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

