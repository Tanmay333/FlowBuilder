
# 🚀 FlowBuilder – Visual Workflow Builder

FlowBuilder is a **drag-and-drop workflow builder** built using **React Flow** on the frontend and **FastAPI** on the backend.  
It allows users to create pipelines by placing nodes on a canvas, connecting them, and analyzing the resulting graph.

This project demonstrates reusable node architecture, dynamic node behavior (like TextNode variable detection), and backend graph processing.

---

## 📌 Features

### 🧩 Drag & Drop Workflow Creation
- Add nodes to the canvas by dragging from the toolbar  
- Move them freely  
- Connect nodes using input/output handles  

### 🔗 Build Directed Pipelines
- Connect nodes visually to form workflows  
- Edges represent directional data flow  

### ✍️ Smart Text Node
- Auto-resizing textarea  
- Detects variables like:

- Creates input handles automatically for each detected variable  

### 🧱 Reusable Node Architecture (BaseNode)
All nodes share a consistent layout built from a `BaseNode` component:
- InputNode  
- OutputNode  
- LLMNode  
- TextNode  

### ➕ Includes 5 Additional Custom Nodes
To demonstrate extensibility:
- MathNode  
- APINode  
- FormatNode  
- LoggerNode  
- DelayNode  

### 🔍 Backend Graph Parsing (FastAPI)
Backend receives the pipeline and returns:
- Number of nodes  
- Number of edges  
- Whether the graph is a **DAG (Directed Acyclic Graph)**  

---

# 🛠️ Tech Stack

### **Frontend**
- React
- React Flow
- Zustand (state management)
- Custom Node Components

### **Backend**
- FastAPI  
- Python 3  
- Uvicorn  

---

# 📦 Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Tanmay333/FlowBuilder.git
cd FlowBuilder

```
# ▶️ Running the Frontend
Install dependencies:

```

cd frontend
npm install
npm start
```
The frontend will run at:
👉 http://localhost:3000



# ▶️ Running the Backend

Install backend dependencies:
```
cd backend
pip install fastapi uvicorn python-multipart
```
Start the FastAPI server:
```
uvicorn main:app --reload
```
Backend runs at:
👉 http://localhost:8000

API Documentation available at:
👉 http://localhost:8000/docs

## 🧪 Usage Guide 
# 1. Drag nodes from the top toolbar
Nodes like Input, LLM, Text, Output, Math, etc.

# 2. Drop them onto the canvas
You can place nodes anywhere.

# 3. Connect nodes using handles
Drag from the right handle of one node → to the left handle of another.

# 4. Use TextNode with variables
Inside TextNode, type:
```

Hello {{username}}, your score is {{score}}
```

Dynamic handles will automatically appear for each variable (username, score).

# 5. Click Submit
The frontend sends the pipeline to the backend.

# 6. Backend will return:
``` 
Nodes: X
Edges: Y
Is DAG: true/false
```
This tells whether the workflow contains a cycle.
```

FlowBuilder/
│
├── backend/
│   ├── main.py                 # FastAPI backend (DAG logic)
│   └── __pycache__/            # Python cache
│
├── frontend/
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── nodes/              # All node components
│   │   ├── ui.js               # React Flow canvas logic
│   │   ├── submit.js           # Submit button logic
│   │   ├── toolbar.js          # Toolbar + draggable nodes
│   │   ├── store.js            # Global state (Zustand)
│   │   ├── App.js              # Layout
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```
## Future Enhancements

Save & load workflows

Export pipeline as JSON

Workflow execution engine

Undo/redo actions

Dark mode

Node search + filter

Drag-to-connect animations






