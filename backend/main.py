from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware
from executor import PipelineExecutor


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


# -----------------------------
# Models
# -----------------------------

from typing import Any

class Node(BaseModel):
    id: str
    type: str
    data: dict[str, Any]


class Edge(BaseModel):
    source: str
    target: str
    sourceHandle: str | None = None
    targetHandle: str | None = None


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


# -----------------------------
# DAG Check
# -----------------------------

def is_dag(nodes, edges):

    graph = defaultdict(list)
    indegree = defaultdict(int)

    for node in nodes:
        indegree[node.id] = 0

    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    queue = deque(
        [node for node in indegree if indegree[node] == 0]
    )

    visited = 0

    while queue:

        current = queue.popleft()

        visited += 1

        for neighbor in graph[current]:

            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)


# -----------------------------
# Endpoint
# -----------------------------

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    return {

        "num_nodes": len(pipeline.nodes),

        "num_edges": len(pipeline.edges),

        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges
        ),
    }
    
@app.post("/pipeline/run")
def run_pipeline(pipeline: Pipeline):

    executor = PipelineExecutor(
        pipeline.nodes,
        pipeline.edges
    )

    result = executor.execute()

    return result