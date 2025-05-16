# Project Log: ProTask

## Week 1: Project Initiation

### [Day 1] - Project Kickoff
* Chose project concept: Task Tracker using Pomodoro Technique  
* Finalized project name: **ProTask**  
* Created GitHub repository and added initial commit with web app  
* Added basic README with short description  

### [Day 2] - Planning
* Defined core features of the application  
* Created initial GitHub issues for all core features  
* Started organizing issues under a GitHub Project board  
* Planned project milestones and discussed user workflow  

### [Day 3] - UI Enhancements and Theme Support
* Added a toggle button for light/dark theme  
* Moved toggle to the top-right corner and replaced text with moon icon  
* Verified visual functionality works across modes  

### [Day 4] - Project Management Setup
* Classified issues by priority and type (bug, enhancement, feature, UI)  
* Discussed use of labels and GitHub Projects status columns  
* Created plan for documentation structure and updates  

### [Day 5] - Documentation
* Drafted and finalized detailed README file  
* Began updating and creating supporting documentation files (`project-log.md`, `changelog.md`, etc.)  

---

# 🗓️ Project Log - ProTask

A detailed log of progress, decisions, and key milestones in the ProTask app.

---

## 🗕️ 2025-04-22
**Project ProTask initiated**
* Defined project scope and objectives  
* Selected tech stack: HTML, CSS, JavaScript  

## 🗕️ 2025-04-23
**Basic layout created**
* Created `index.html`, `style.css`, and `script.js`  
* Initial Pomodoro timer working  

## 🗕️ 2025-04-30
**GitHub Project Setup**
* Created a new GitHub repository  
* Enabled GitHub Projects for task tracking  
* Created first few issues and grouped tasks under categories  

## 🗕️ 2025-05-01
**Documentation Added**
* `README.md`: Overview, features, workflow, and tech stack  
* `.github/ISSUE_TEMPLATE/feature_request.md`: For new features  
* `.github/ISSUE_TEMPLATE/bug_report.md`: For bug tracking  

**Labels Created**
* Priority: `priority: high`, `medium`, `low`  
* Type: `type: bug`, `type: enhancement`, `type: feature`, `type: UI`  
* Status: `status: to do`, `in progress`, `done` (used mainly for reference)  

**Planning Steps Taken**
* Identified core modules and milestones  
* Prioritized issues and tagged them with appropriate labels  
* Decided on consistent commit message format and documentation structure  

## 🗌 [2025-05-01] Integrated ProTask App Release

### ✅ What’s New
* Integrated Pomodoro and Task Manager into one cohesive app  
* Live Task Linking: Selected task appears directly in the Pomodoro timer  
* Dark Mode Toggle added for user comfort  
* Improved UI design with soft shadows, spacing, and visual hierarchy  
* Simplified layout for better usability on mobile and desktop  

### 📁 Folder Changes
* Moved old apps to:  
  * `/archive/old-pomodoro/`  
  * `/archive/old-task-manager/`  
* Created new root folder: `/protask-app/`  

### 🔧 Tech Stack
* Pure HTML, CSS, and JavaScript  
* No external frameworks used  

### 📌 Next Planned Features
* Settings page (custom timer durations)  
* History of completed Pomodoros  
* Daily productivity summary  

---

## 🗕️ 2025-05-02
**Deployment & Issue Tracking**
* Deployed to GitHub Pages  
* Renamed `ProTask.html` to `index.html` to resolve publishing issue  

🛠️ Created Bug Report Issues:
* **Issue 1**: No Pause button in Pomodoro  
* **Issue 2**: No Reset button in Pomodoro  

🗃️ Archived old apps:
* `/archive/old-pomodoro/` and `/archive/task-manager/`  

---

## 🗕️ 2025-05-03
**Update – Issue #2: Implement task editing functionality**
* Completed full task edit flow with bug fixes:
  * Category, priority, edit logic
* Verified in live environment  

---

## 🗕️ 2025-05-04
### ✅ Update – Issue #5: Add task due date/time
* Added `datetime-local` input and editable due dates

### ✅ Update – Issue #8: Implement 5-minute short break timer
* Timer now switches automatically between Pomodoro and short break  

---

## 🗕️ 2025-05-05
* Continued due date support  
* Started working on sound notifications  

---

## 🗕️ 2025-05-06
* Deployed for sound test  
* Added fallback confirm dialogs  
* Introduced sound priming  

---

## 🗕️ 2025-05-07
✅ Update – Issue #9: Allow custom timer settings  
🛠️ Fix – Timer transitions and task editing  
* Added dropdowns for Pomodoro/Break durations  
* Improved confirm-based transitions and sound setup  

---

## 🗕️ 2025-05-09
🐞 Fix – Timer paused in background  
🐞 Fix – Task form refresh bug  
* Switched to `Date.now()`-based timing  
* Corrected form logic to prevent reload  

---

## 🗕️ 2025-05-10
🔔 Fix – Sound notification not working  
* Finalized working sound system with toggle  

---

## 🗕️ 2025-05-11
🛠️ Fix – Timer buttons and dropdown visibility  
* Restored all missing controls and cleaned script errors  

---

## 🗕️ 2025-05-16
✨ Feature – Long Break after 4 Pomodoros (Issue #9)  
* Added long break logic with dropdown (5–30 mins)  
* Break switches to long after every 4 Pomodoros  
* Labels streamlined to “Pomodoro” and “Break”  
---

*This file will be updated regularly to reflect daily progress.*