// src/nodes/MathNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function MathNode({ id, data }) {
  const left = [
    { id: "a", label: "a" },
    { id: "b", label: "b" },
  ];
  const right = [{ id: "result", label: "result" }];

  return (
    <BaseNode
      id={id}
      type="math"
      title="Math"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, display: "block", marginBottom: 6 }}>
          Operation
        </label>
        <select
          defaultValue={data?.op || "add"}
          style={{ width: "100%", padding: 8, borderRadius: 6 }}
        >
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Divide</option>
        </select>
      </div>
    </BaseNode>
  );
}
