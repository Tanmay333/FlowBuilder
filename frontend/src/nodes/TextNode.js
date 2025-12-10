// src/nodes/TextNode.js
import React, { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

const varRegex = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

export default function TextNode({ id, data }) {
  const [text, setText] = useState(data?.text || "");
  const [vars, setVars] = useState([]);
  const taRef = useRef(null);

  // auto-resize textarea height
  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + 2 + "px";
  }, [text]);

  // find variable names like {{name}}
  useEffect(() => {
    const found = new Set();
    let m;
    while ((m = varRegex.exec(text)) !== null) {
      found.add(m[1]);
    }
    setVars(Array.from(found));
  }, [text]);

  const leftHandles = vars.map((v, i) => ({
    id: v,
    label: v,
    top: 36 + i * 28,
  }));
  const rightHandles = [{ id: "out", label: "out" }];

  return (
    <BaseNode
      id={id}
      type="text"
      title="Text"
      leftHandles={leftHandles}
      rightHandles={rightHandles}
    >
      <div>
        <textarea
          ref={taRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text and use {{variable}} to create handles"
          style={{
            width: "100%",
            minHeight: 56,
            resize: "none",
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        />
        <div style={{ marginTop: 8, fontSize: 12, color: "#6b7280" }}>
          Variables: {vars.length ? vars.join(", ") : "—"}
        </div>
      </div>
    </BaseNode>
  );
}
