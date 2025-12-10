// frontend/src/nodes/BaseNode.js
import React from "react";
import { Handle, Position } from "reactflow";
import "./base-node.css";

export default function BaseNode({
  id,
  type,
  title,
  leftHandles = [],
  rightHandles = [],
  children,
  className = "",
}) {
  return (
    <div
      data-node-id={id}
      data-node-type={type}
      className={`base-node p-3 rounded-lg shadow-sm ${className}`}
      style={{ minWidth: 240 }}
    >
      <div
        className="node-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, opacity: 0.6 }}>{type}</div>
      </div>

      <div style={{ position: "relative" }}>
        {/* left handles (targets) */}
        {leftHandles.map((h) => (
          <Handle
            key={h.id}
            type="target"
            position={Position.Left}
            id={h.id}
            style={{ top: h.top ?? 40 + 28 * leftHandles.indexOf(h) }}
          />
        ))}

        {/* right handles (sources) */}
        {rightHandles.map((h) => (
          <Handle
            key={h.id}
            type="source"
            position={Position.Right}
            id={h.id}
            style={{ top: h.top ?? 40 + 28 * rightHandles.indexOf(h) }}
          />
        ))}

        <div className="node-content">{children}</div>
      </div>
    </div>
  );
}
