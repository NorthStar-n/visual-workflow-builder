import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { sourceHandle } from "./nodeHelpers";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
    id={id}
      title="Input"
      fields={[
        {
          label: "Name",
          type: "text",
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        },
        {
          label: "Type",
          type: "select",
          value: inputType,
          options: ["Text", "File"],
          onChange: (e) => setInputType(e.target.value),
        },
      ]}
      handles={[
        sourceHandle(id, "value"),
      ]}
    />
  );
};