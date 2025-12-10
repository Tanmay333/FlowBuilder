// src/nodes/APINode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function APINode({ id, data }) {
  const left = [{ id: "trigger", label: "trigger" }];
  const right = [{ id: "response", label: "response" }];

  return (
    <BaseNode
      id={id}
      type="api"
      title="API"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, display: "block", marginBottom: 6 }}>
          Endpoint
        </label>
        <input
          defaultValue={data?.endpoint || "/api/example"}
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
