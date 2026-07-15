import "./draggableNode.css";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const getCategory = () => {
    switch (type) {
      case "customInput":
      case "customOutput":
      case "text":
      case "llm":
        return "CORE";

      default:
        return "AI";
    }
  };

  const getAccentColor = () => {
    switch (type) {
      case "customInput":
        return "#a2bbf3"; // blue

      case "customOutput":
        return "#a1e4ce"; // green

      case "text":
        return "#cabbed"; // purple

      case "llm":
        return "#e6c6af"; // orange

      case "pdf":
        return "#e3a0a0"; // red

      case "api":
        return "#b9d6e4"; // cyan

      case "prompt":
        return "#bebfec"; // indigo

      case "vectordb":
        return "#b4e4df"; // teal

      case "email":
        return "#e9c1d5"; // pink

      default:
        return "#111827";
    }
  };

  return (
    <div
      className="draggable-node"
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      style={{
        borderTop: `4px solid ${getAccentColor()}`
      }}
    >
      <div className="node-category">
        {getCategory()}
      </div>

      <div className="node-label">
        {label}
      </div>
    </div>
  );
};