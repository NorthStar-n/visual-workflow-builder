# Visual Workflow Builder

A modern, node-based workflow editor built with **React**, **React Flow**, and **Zustand**. The application enables users to visually construct workflows by dragging, connecting, and configuring reusable nodes on an interactive canvas.

Inspired by modern AI workflow automation tools, this project focuses on building a scalable, reusable frontend architecture with an intuitive user experience.

---

## Demo

> Live Demo: *Coming Soon*

> GitHub: https://github.com/NorthStar-n/visual-workflow-builder

---

## Features

- Drag-and-drop workflow editor
- Interactive node-based canvas
- Multiple reusable node types
  - Input
  - Output
  - LLM
  - Text
  - API
  - PDF
  - Email
  - Vector Database
- Dynamic node connections
- Automatic handle generation for template variables
- Responsive node resizing
- Modern frosted-glass UI
- Floating toolbar
- Interactive minimap
- Zoom and pan controls
- Node deletion functionality
- Centralized state management using Zustand

---

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- React Flow
- CSS3

### State Management

- Zustand

### Development Tools

- Git
- GitHub
- npm
- Vite

---

## Project Structure

```
visual-workflow-builder
│
├── public/
├── src/
│   ├── components/
│   ├── nodes/
│   ├── toolbar/
│   ├── styles/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── README.md
└── .gitignore
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/NorthStar-n/visual-workflow-builder.git
```

Navigate into the project

```bash
cd visual-workflow-builder
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Screenshots

<img width="1913" height="970" alt="image" src="https://github.com/user-attachments/assets/b82db541-1501-498a-b6ae-7b1301d58acd" />
<img width="1911" height="958" alt="image" src="https://github.com/user-attachments/assets/908128e6-baea-42c0-b8d3-1eb22d811755" />


## Technical Highlights

### Reusable Component Architecture

Designed reusable node components to minimize duplication and simplify the creation of additional node types.

### Dynamic Handle Generation

Implemented automatic input handle creation by parsing template variables (e.g. `{{input}}`) within text nodes.

### Centralized State Management

Managed nodes, edges, and workflow interactions using Zustand, ensuring consistent synchronization across the application.

### Modern UI

Enhanced usability with:

- Frosted glass navigation
- Floating controls
- Interactive minimap
- Responsive layouts
- Smooth drag-and-drop interactions

---

## Challenges

One of the most technically challenging aspects of this project was designing a scalable architecture that allowed all node types to share common functionality while remaining flexible enough for custom behavior.

Managing synchronized state between dynamically generated handles, node connections, and user interactions required careful component abstraction and efficient state management.

---

## Future Improvements

- Save and Load workflows
- Local storage persistence
- JSON import/export
- Undo / Redo functionality
- Dark mode
- Keyboard shortcuts
- Backend integration
- Real-time collaboration
- Workflow execution engine

---

## Skills Demonstrated

- Frontend Engineering
- React Development
- State Management
- Component Design
- UI/UX Development
- Software Architecture
- JavaScript
- Graph-based Interfaces
- Interactive Visualizations

---

## License

This project is licensed under the MIT License.

---

## Author

**Nishitta Senthilkumar**

GitHub: https://github.com/NorthStar-n

LinkedIn: https://www.linkedin.com/in/nishitta-senthilkumar-028533317
