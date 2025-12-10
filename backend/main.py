from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List

app = FastAPI()

# Allow local frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all during dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    """
    FRONTEND SENDS:
    {
        "nodes": [...],
        "edges": [...]
    }

    RETURN:
    {
        "num_nodes": int,
        "num_edges": int,
        "is_dag": bool
    }
    """
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    # Count
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list for DAG check
    # ReactFlow edges contain: edge["source"], edge["target"]
    graph = {}
    for n in nodes:
        graph[n["id"]] = []

    for e in edges:
        src = e.get("source")
        tgt = e.get("target")
        if src in graph and tgt:
            graph[src].append(tgt)

    # DAG check using DFS (cycle detection)
    visited = {}  # 0 = unvisited, 1 = visiting, 2 = completed
    is_dag = True

    def dfs(node):
        nonlocal is_dag
        if visited.get(node) == 1:
            # Found a back-edge → cycle
            is_dag = False
            return
        if visited.get(node) == 2:
            return

        visited[node] = 1
        for neighbor in graph[node]:
            dfs(neighbor)
        visited[node] = 2

    for node in graph:
        if visited.get(node) is None:
            dfs(node)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
