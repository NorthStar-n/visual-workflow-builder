import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { sourceHandle, targetHandle } from "./nodeHelpers";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("https://api.example.com");
  const [method, setMethod] = useState("GET");

  return (
    <BaseNode
      title="API Request"
      fields={[
        {
          label: "Endpoint",
          type: "text",
          value: url,
          onChange: (e) => setUrl(e.target.value),
        },
        {
          label: "Method",
          type: "select",
          value: method,
          options: ["GET", "POST", "PUT", "DELETE"],
          onChange: (e) => setMethod(e.target.value),
        },
      ]}
      handles={[
        targetHandle(id, "input"),
        sourceHandle(id, "response"),
      ]}
    />
  );
};