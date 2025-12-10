// src/nodes/FormatNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function FormatNode({ id, data }) {
  const left = [{ id: "in", label: "in" }];
  const right = [{ id: "out", label: "out" }];

  return (
    <BaseNode
      id={id}
      type="format"
      title="Formatter"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, display: "block", marginBottom: 6 }}>
          Format
        </label>
        <select
          defaultValue={data?.format || "uppercase"}
          style={{ width: "100%", padding: 8, borderRadius: 6 }}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="json">JSON</option>
        </select>
      </div>
    </BaseNode>
  );
}
