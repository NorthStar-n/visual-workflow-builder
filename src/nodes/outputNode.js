import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { targetHandle } from "./nodeHelpers";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
    id={id}
      title="Output"
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
          value: outputType,
          options: ["Text", "Image"],
          onChange: (e) => setOutputType(e.target.value),
        },
      ]}
      handles={[
        targetHandle(id, "value"),
      ]}
    />
  );
};