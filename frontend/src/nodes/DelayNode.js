// src/nodes/DelayNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function DelayNode({ id, data }) {
  const left = [{ id: "in", label: "in" }];
  const right = [{ id: "out", label: "out" }];

  return (
    <BaseNode
      id={id}
      type="delay"
      title="Delay"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, display: "block", marginBottom: 6 }}>
          Delay (ms)
        </label>
        <input
          defaultValue={data?.ms || "1000"}
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
