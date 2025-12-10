
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

