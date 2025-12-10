// src/nodes/LoggerNode.js
import React from "react";
import BaseNode from "./BaseNode";

export default function LoggerNode({ id, data }) {
  const left = [{ id: "in", label: "in" }];
  const right = [];

  return (
    <BaseNode
      id={id}
      type="logger"
      title="Logger"
      leftHandles={left}
      rightHandles={right}
    >
      <div>
        <label style={{ fontSize: 12, display: "block", marginBottom: 6 }}>
          Level
        </label>
        <select
          defaultValue={data?.level || "info"}
          style={{ width: "100%", padding: 8, borderRadius: 6 }}
        >
          <option value="debug">debug</option>
          <option value="info">info</option>
          <option value="warn">warn</option>
          <option value="error">error</option>
        </select>
      </div>
    </BaseNode>
  );
}
