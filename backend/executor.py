from collections import defaultdict, deque
from groq_executor import ask_groq


class PipelineExecutor:

    def __init__(self, nodes, edges):
        self.nodes = {node.id: node for node in nodes}
        self.edges = edges
        self.context = {}

    def get_parent(self, node_id):

        for edge in self.edges:
            if edge.target == node_id:
                return edge.source

        return None

    def get_execution_order(self):

        graph = defaultdict(list)
        indegree = defaultdict(int)

        for node in self.nodes.values():
            indegree[node.id] = 0

        for edge in self.edges:
            graph[edge.source].append(edge.target)
            indegree[edge.target] += 1

        queue = deque(
            [node for node in indegree if indegree[node] == 0]
        )

        order = []

        while queue:

            current = queue.popleft()

            order.append(current)

            for neighbor in graph[current]:

                indegree[neighbor] -= 1

                if indegree[neighbor] == 0:
                    queue.append(neighbor)

        return order

    def execute(self):

        execution_order = self.get_execution_order()

        for node_id in execution_order:

            # THIS LINE WAS MISSING
            node = self.nodes[node_id]

            # ------------------------
            # Input Node
            # ------------------------
            if node.type == "customInput":

                self.context[node_id] = node.data.get("value", "")

            # ------------------------
            # Prompt Node
            # ------------------------
            elif node.type == "prompt":

                parent = self.get_parent(node_id)

                user_input = self.context.get(parent, "")

                prompt = node.data.get("prompt", "")

                prompt = prompt.replace(
                    "{{input}}",
                    user_input
                )

                self.context[node_id] = prompt

            # ------------------------
            # LLM Node
            # ------------------------
            elif node.type == "llm":

                parent = self.get_parent(node_id)

                prompt = self.context.get(parent, "")

                answer = ask_groq(prompt)

                self.context[node_id] = answer

            # ------------------------
            # Output Node
            # ------------------------
            elif node.type == "customOutput":

                parent = self.get_parent(node_id)

                self.context[node_id] = self.context.get(parent, "")

        return {
            "output": self.context
        }