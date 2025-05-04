# Project Log: ProTask

## Week 1: Project Initiation

### [Day 1] - Project Kickoff
- Chose project concept: Task Tracker using Pomodoro Technique
- Finalized project name: **ProTask**
- Created GitHub repository and added initial commit with web app
- Added basic README with short description

### [Day 2] - Planning
- Defined core features of the application
- Created initial GitHub issues for all core features
- Started organizing issues under a GitHub Project board
- Planned project milestones and discussed user workflow

### [Day 3] - UI Enhancements and Theme Support
- Added a toggle button for light/dark theme
- Moved toggle to the top-right corner and replaced text with moon icon
- Verified visual functionality works across modes

### [Day 4] - Project Management Setup
- Classified issues by priority and type (bug, enhancement, feature, UI)
- Discussed use of labels and GitHub Projects status columns
- Created plan for documentation structure and updates

### [Day 5] - Documentation
- Drafted and finalized detailed README file
- Began updating and creating supporting documentation files (project-log.md, changelog.md, etc.)

## Notes
- Project will continue to follow structured workflow with proper milestones, labels, and documentation
- Daily logs will capture completed tasks, decisions made, and next steps

---
# 🗓️ Project Log - ProTask

A detailed log of progress, decisions, and key milestones in the ProTask app.

---

## 📅 2025-04-22
**Project ProTask initiated**
- Defined project scope and objectives
- Selected tech stack: HTML, CSS, JavaScript

## 📅 2025-04-23
**Basic layout created**
- Created `index.html`, `style.css`, and `script.js`
- Initial Pomodoro timer working

## 📅 2025-04-30
**GitHub Project Setup**
- Created a new GitHub repository
- Enabled GitHub Projects for task tracking
- Created first few issues and grouped tasks under categories

## 📅 2025-05-01
**Documentation Added**
- `README.md`: Overview, features, workflow, and tech stack
- `.github/ISSUE_TEMPLATE/feature_request.md`: For new features
- `.github/ISSUE_TEMPLATE/bug_report.md`: For bug tracking

**Labels Created**
- Priority: `priority: high`, `medium`, `low`
- Type: `type: bug`, `type: enhancement`, `type: feature`, `type: UI`
- Status: `status: to do`, `in progress`, `done` *(used mainly for reference)*

**Planning Steps Taken**
- Identified core modules and milestones
- Prioritized issues and tagged them with appropriate labels
- Decided on consistent commit message format and documentation structure

## [2025-05-01] Integrated ProTask App Release

### ✅ What’s New

- **Integrated Pomodoro and Task Manager** into one cohesive app.
- **Live Task Linking**: Selected task appears directly in the Pomodoro timer.
- **Dark Mode Toggle** added for user comfort.
- Improved **UI design** with soft shadows, spacing, and visual hierarchy.
- Simplified layout for better usability on mobile and desktop.

### 📁 Folder Changes

- Moved old apps to:
  - `/archive/old-pomodoro/`
  - `/archive/old-task-manager/`
- Created new root folder: `/protask-app/`

### 🔧 Tech Stack

- Pure HTML, CSS, and JavaScript.
- No external frameworks used.

### 📌 Next Planned Features

- Settings page (custom timer durations)
- History of completed Pomodoros
- Daily productivity summary

---

📅 2025-05-02 – Deployment & Issue Tracking
📦 Deployed ProTask app to GitHub Pages

Initial issue: GitHub Pages displayed README.md instead of app.

Root cause: Main HTML file was named ProTask.html instead of index.html.

Resolution: Renamed to index.html, re-published successfully.

🐛 Created Bug Report Issues

Issue 1: No Pause button in Pomodoro
➤ Description: The app, once started, doesn’t allow users to pause the timer.

Issue 2: No Reset button in Pomodoro
➤ Description: The timer cannot be reset mid-session or during break.

🗃️ Archived old apps:

Moved previous Pomodoro and Task Manager apps to archive/old-pomodoro/ and archive/task-manager/.
---
📅 2025-05-03
Worked on Issue #2: Implement task editing functionality

Completed all core functionality for editing tasks: users can now update the task name, category, and priority.

Identified and resolved the following sub-issues during testing:

🐞 Category not updating: Category was being removed instead of updated.

🐞 Priority not updating properly: Both old and new priorities were shown; now only the updated one remains.

🐞 Edit button not working after one edit: Fixed logic to allow repeated edits for the same task.

Verified and tested all updates successfully in the live environment.
---

✅ Update – Issue #5: Add task due date/time
Date: 2025-05-04
Summary:
Implemented due date/time functionality in the task manager. A new datetime-local input field was added to the task creation form, allowing users to assign a deadline to each task. The due date is displayed next to the task and is also editable. The implementation ensures previous features (category, priority, completion, and editing) remain unaffected.

---
_This file will be updated regularly to reflect daily progress._

