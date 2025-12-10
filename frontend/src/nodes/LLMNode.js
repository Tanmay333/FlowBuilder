// src/nodes/LLMNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function LLMNode({ id, data }) {
  const left = [{ id: "in", label: "in" }];
  const right = [{ id: "out", label: "out" }];

  return (
    <BaseNode
      id={id}
      type="llm"
      title="LLM"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <div style={{ fontSize: 13, marginBottom: 6 }}>Model</div>
        <select
          defaultValue={data?.model || "gpt-4"}
          style={{ width: "100%", padding: 8, borderRadius: 6 }}
        >
          <option value="gpt-4">gpt-4</option>
          <option value="gpt-3.5">gpt-3.5</option>
        </select>
      </div>
    </BaseNode>
  );
}
