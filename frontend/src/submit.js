// src/submit.js
import React from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export function SubmitButton() {
  const { nodes, edges } = useStore(
    (s) => ({ nodes: s.nodes, edges: s.edges }),
    shallow
  );

  const sendToBackend = async (payload) => {
    const endpoints = [
      "/pipelines/parse",
      "http://localhost:8000/pipelines/parse",
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(text || `HTTP ${res.status}`);
        }

        return await res.json();
      } catch (err) {
        if (url === endpoints[endpoints.length - 1]) throw err;
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = { nodes, edges };
      const result = await sendToBackend(payload);

      alert(
        `Pipeline Results:\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
      );
    } catch (err) {
      alert("Submit failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <button
        onClick={handleSubmit}
        style={{
          background: "#4f46e5",
          color: "white",
          padding: "10px 18px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        Submit
      </button>
    </div>
  );
}
