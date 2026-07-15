import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { sourceHandle } from "./nodeHelpers";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );
  // Find all variables like {{input}}
const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const variables = [
  ...new Set(
    [...currText.matchAll(variableRegex)].map(
      (match) => match[1]
    )
  ),
];

  
  const lines = currText.split("\n");

const longestLine = Math.max(
  ...lines.map((line) => line.length),
  15
);

const nodeWidth = Math.min(
  Math.max(260, longestLine * 8),
  500
);

const nodeHeight = Math.max(
  160,
  Math.max(
    lines.length * 28 + 90,
    variables.length * 30 + 110
  )
);

const variableHandles = variables.map((variable, index) => ({
  type: "target",
  position: Position.Left,
  id: `${id}-${variable}`,
  label: variable,
  style: {
    top: `${((index + 1) / (variables.length + 1)) * 100}%`,
  },
}));

  return (
    <BaseNode
    id={id}
    title="Text"
    width={nodeWidth}
    minHeight={nodeHeight}
      
      fields={[
        {
          label: "Text",
          type: "textarea",
          value: currText,
          onChange: (e) => {
    const value = e.target.value;

    setCurrText(value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
},
        },
      ]}
      handles={[
    ...variableHandles,

    sourceHandle(id,"output"),
]}
    />
  );
};