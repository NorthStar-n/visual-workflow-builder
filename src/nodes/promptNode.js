import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { sourceHandle, targetHandle } from "./nodeHelpers";

export const PromptNode = ({ id }) => {
  const [prompt, setPrompt] = useState("Summarize this document");

  return (
    <BaseNode
    id={id}
      title="Prompt Builder"
      fields={[
        {
          label: "Prompt",
          type: "text",
          value: prompt,
          onChange: (e) => setPrompt(e.target.value),
        },
      ]}
      handles={[
        targetHandle(id, "input"),
        sourceHandle(id, "prompt"),
      ]}
    />
  );
};