import { DraggableNode } from "./draggableNode";
import "./toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">

      <div className="toolbar-header">
        Node Library
      </div>

      <div className="toolbar-subtitle">
        Core Nodes
      </div>

      <div className="toolbar-section">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="pdf" label="PDF" />
        <DraggableNode type="prompt" label="Prompt" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="vectordb" label="Vector DB" />
        <DraggableNode type="email" label="Email" />
      </div>

      

      

    </div>
  );
};