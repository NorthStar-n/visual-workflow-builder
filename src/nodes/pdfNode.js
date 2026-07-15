import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { sourceHandle } from "./nodeHelpers";

export const PDFNode = ({ id }) => {
  const [fileName, setFileName] = useState("document.pdf");

  return (
    <BaseNode
    id={id}
      title="PDF Loader"
      fields={[
        {
          label: "File Name",
          type: "text",
          value: fileName,
          onChange: (e) => setFileName(e.target.value),
        },
      ]}
      handles={[
        sourceHandle(id, "document"),
      ]}
    />
  );
};