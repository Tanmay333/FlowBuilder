// src/nodes/OutputNode.js
import React, { useState } from "react";
import BaseNode from "./BaseNode";

export default function OutputNode({ id, data }) {
  const left = [{ id: "in", label: "in" }];
  const right = []; // no outputs

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  return (
    <BaseNode
      id={id}
      type="customOutput"
      title="Output"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, marginBottom: 6, display: "block" }}>
          Name
        </label>
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
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
