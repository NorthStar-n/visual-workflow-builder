import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},

  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };

    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }

    newIDs[type] += 1;

    set({ nodeIDs: newIDs });

    return `${type}-${newIDs[type]}`;
  },

  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },

  deleteNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),

      edges: get().edges.filter(
        (edge) =>
          edge.source !== nodeId &&
          edge.target !== nodeId
      ),
    });
  },

  deleteSelectedNodes: () => {
    const selectedNodeIds = get()
      .nodes
      .filter((node) => node.selected)
      .map((node) => node.id);

    set({
      nodes: get().nodes.filter((node) => !node.selected),

      edges: get().edges.filter(
        (edge) =>
          !selectedNodeIds.includes(edge.source) &&
          !selectedNodeIds.includes(edge.target)
      ),
    });
  },

  clearSelection: () => {
    set({
      nodes: get().nodes.map((node) => ({
        ...node,
        selected: false,
      })),

      edges: get().edges.map((edge) => ({
        ...edge,
        selected: false,
      })),
    });
  },

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
          },
        },
        get().edges
      ),
    });
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: fieldValue,
            },
          };
        }

        return node;
      }),
    });
  },
}));