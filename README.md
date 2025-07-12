# StackIt – Minimal Q&A Forum Platform

StackIt is a minimal question-and-answer platform focused on collaborative learning and structured knowledge sharing. It’s designed to be simple, user-friendly, and centered on the core experience of asking and answering questions within a community.


## Team Members 👥
  - Prince Ghoda 🛠️
  - Rohit Pagi 🚀 🎨

## Table of Contents

- [Features](#features)
- [User Roles](#user-roles)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Features

- **Ask Questions**
  - Submit questions with a short, descriptive title
  - Rich text editor for question description (supports bold, italic, strikethrough, lists, emoji, hyperlinks, image upload, text alignment)
  - Multi-select tags (e.g., React, JWT)

- **Answer Questions**
  - Post answers using the same rich text editor
  - Only logged-in users can answer

- **Voting & Accepting Answers**
  - Upvote or downvote answers
  - Question owners can mark one answer as accepted

- **Tagging**
  - Questions must include relevant tags

- **Notification System**
  - Notification icon (bell) in the top navigation bar
  - Users notified when:
    - Someone answers their question
    - Someone comments on their answer
    - Someone mentions them using @username
  - Icon shows unread notification count
  - Dropdown with recent notifications

### Admin Features

- Reject inappropriate or spammy skill descriptions
- Ban users who violate platform policies
- Monitor pending, accepted, or cancelled swaps
- Send platform-wide messages (feature updates, downtime alerts)
- Download reports of user activity, feedback logs, and swap stats

## User Roles

| Role   | Permissions                                                                 |
|--------|-----------------------------------------------------------------------------|
| Guest  | View all questions and answers                                              |
| User   | Register, log in, post questions/answers, vote                              |
| Admin  | Moderate content, manage users, send alerts, download reports               |


## Installation

### Prerequisites

- Node.js
- npm

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## Usage

- Register or log in to post questions and answers.
- Use the rich text editor for formatting.
- Tag your questions for better discoverability.
- Vote and accept answers.
- Check notifications for updates and mentions.

## Technology Stack

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Notifications:** Custom implementation

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features or bug fixes.

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Contact 📧

For questions or feedback, please contact [Prince Ghoda](mailto:princepatel61141@gmail.com).