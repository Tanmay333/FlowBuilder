// toolbar.js
import { DraggableNode } from "./draggableNode";
import "./toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar-container">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="format" label="Format" />
      <DraggableNode type="logger" label="Logger" />
      <DraggableNode type="delay" label="Delay" />
    </div>
  );
};
