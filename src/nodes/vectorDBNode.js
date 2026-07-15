import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { sourceHandle, targetHandle } from "./nodeHelpers";

export const VectorDBNode = ({ id }) => {
  const [collection, setCollection] = useState("documents");

  return (
    <BaseNode
    id={id}
      title="Vector DB"
      fields={[
        {
          label: "Collection",
          type: "text",
          value: collection,
          onChange: (e) => setCollection(e.target.value),
        },
      ]}
      handles={[
        targetHandle(id, "embedding"),
        sourceHandle(id, "stored"),
      ]}
    />
  );
};