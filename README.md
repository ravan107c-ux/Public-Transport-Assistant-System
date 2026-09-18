# 🌸 TravelEase

> **Explore · Plan · Travel**

TravelEase is a smart travel and bus-planning web application designed to help users find suitable buses, check seat availability, predict bus arrival times, compare journey comfort, and get assistance through an AI-style chatbot.

---

## 🚍 Project Overview

TravelEase provides a single platform for planning and managing bus journeys.

Instead of simply displaying bus routes, the application considers multiple travel factors such as:

- 🕐 Travel Duration
- 💰 Travel Expense
- 💺 Seat Availability
- 👥 Crowd Prediction
- 🛣️ Route Information
- ⭐ Journey Comfort Score
- 🕐 AI Arrival Prediction

The goal is to help users understand their travel options before starting their journey.

---

## ✨ Features

### 🔐 Login / Registration

Users can enter:

- Username
- Phone Number
- Address
- Gmail
- Password

After login, the user can access the TravelEase homepage.

---

### 🏠 Homepage

The homepage provides quick access to the main TravelEase features.

It includes:

- 🧭 Plan Your Trip
- 💺 Seat Availability
- 🕐 AI Arrival Prediction
- ⭐ Journey Comfort Score
- 🤖 TravelEase Chatbot
- ◷ Travel History

Users can also search using:

**Current Location → Destination → Travel Date**

---

### 🧭 Plan Your Trip

Users can search for a journey using:

- Destination Search
- Route Search

The application displays multiple buses with information such as:

- Bus Name
- Route
- Travel Duration
- Fare
- Crowd Level
- Comfort Score

---

### 💺 Seat Availability

This section displays buses based on seat availability and predicted crowd.

Each bus card shows:

- Available Seats
- Crowd Level
- Route
- Bus Information

Example:

```text
🚌 Tamil Nadu Express

Periyar → Chennai

32 Seats Available
Low Crowd


---

🕐 AI Arrival Prediction

TravelEase provides an estimated bus arrival time based on the user's previous search.

Example:

Previous Search:

Periyar → Chennai

Normal Time:
7:50 PM

AI Predicted Arrival:
7:32 PM

The page contains 6 bus prediction cards and a Refresh 🔄 button to generate updated predictions.

> Current implementation uses sample prediction data. Live GPS/API-based prediction can be integrated in a future version.




---

⭐ Journey Comfort Score

TravelEase calculates a conceptual Comfort Score by considering multiple factors:

Travel Duration
        +
Travel Expense
        +
Seat Availability
        +
Crowd Prediction
        +
Route Quality
        =
Journey Comfort Score

Example:

Tamil Nadu Express

Comfort Score: 92

🕐 7h 30m
💰 ₹650
💺 32 seats
👥 Low Crowd
🛣️ Good Route

The page displays six bus cards for comparison.


---

🤖 TravelEase Chatbot

The chatbot allows users to ask questions about buses and journeys.

Example questions:

Which bus has more seats?

What is the fare of Tamil Nadu Express?

Tell me about GreenLine Travels.

Which bus has a better comfort score?

What factors are used for comfort score?

The chatbot provides responses based on the available bus information.


---

◷ Travel History

TravelEase stores and displays:

🔍 Bus Search History

Previous searches made by the user.

Example:

Periyar → Chennai
18/09/2026, 7:30 PM

🚌 Buses Used

Previously selected/used buses.

Example:

Tamil Nadu Express
Used on 18/09/2026

The current prototype uses browser localStorage for storing history.


---

🛠️ Technologies Used

Frontend

HTML5

CSS3

JavaScript


Browser Storage

LocalStorage


Development Tools

Visual Studio Code

Git

GitHub

Live Server



---

📁 Project Structure

TravelEase/
│
├── index.html
├── plan.html
├── seats.html
├── arrival.html
├── comfort.html
├── chatbot.html
├── history.html
│
├── style.css
├── script.js
│
└── README.md


---

🚀 How to Run

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project

cd TravelEase

3. Open in VS Code

code .

4. Run the website

Install the Live Server extension in VS Code.

Then:

Right Click → index.html → Open with Live Server

The TravelEase homepage will open in your browser.


---

🔄 Application Flow

Login
  ↓
Homepage
  ↓
┌───────────────────────────────┐
│       TravelEase Features     │
├───────────────────────────────┤
│ 🧭 Plan Your Trip             │
│ 💺 Seat Availability          │
│ 🕐 AI Arrival Prediction      │
│ ⭐ Journey Comfort Score      │
│ 🤖 TravelEase Chatbot         │
│ ◷ Travel History              │
└───────────────────────────────┘


---

🧠 Future Improvements

The current project is a frontend prototype. Future versions can include:

📍 Real-time GPS location

🚌 Live bus tracking

💺 Real-time seat availability

🗺️ Interactive maps

🤖 Real AI chatbot

🧠 Machine-learning-based arrival prediction

👥 Real-time crowd prediction

⭐ Dynamic Comfort Score calculation

🔐 Secure user authentication

🗄️ Database integration

📱 Mobile application

🔔 Bus arrival notifications

💳 Online ticket booking

🚆 Train integration



---

🎯 Project Objective

The main objective of TravelEase is to create a smart and user-friendly travel assistant that helps passengers make informed travel decisions by combining bus route information, seat availability, crowd prediction, arrival prediction, and journey comfort analysis in one application.


---

👨‍💻 Developer
 
Eagle Squad 

B.E. Computer Science and Engineering
Artificial Intelligence & Machine Learning


---

📌 Project Status

🟢 Frontend Prototype
🟡 Backend Integration – Planned
🟡 Real-time Data – Planned
🟡 AI/ML Integration – Planned


---

📄 License

This project is developed for educational and project-development purposes.

### Git commands to upload it

After creating `README.md` in your TravelEase folder:

```bash
git add .
git commit -m "Add TravelEase project README"
git push
