// src/nodes/InputNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function InputNode({ id, data }) {
  const left = []; // no inputs
  const right = [{ id: "out", label: "out" }];

  return (
    <BaseNode
      id={id}
      type="customInput"
      title="Input"
      leftHandles={left}
      rightHandles={right}
    >
      <div style={{ gap: 8 }}>
        <label style={{ fontSize: 12, marginBottom: 6, display: "block" }}>
          Value
        </label>
        <input
          value={data?.value || ""}
          onChange={() => {}}
          placeholder="Enter value..."
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
          }}
        />
      </div>
    </BaseNode>
  );
}
