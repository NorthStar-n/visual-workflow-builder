import { BaseNode } from "./BaseNode";
import { sourceHandle, targetHandle } from "./nodeHelpers";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
    id={id}
      title="LLM"
      fields={[
        {
          label: "Description",
          type: "custom",
          component: (
            <span style={{ fontSize: "14px" }}>
              This is a LLM.
            </span>
          ),
        },
      ]}
      handles={[
        targetHandle(id, "system", {
          top: `${100 / 3}%`,
        }),
        targetHandle(id, "prompt", {
          top: `${200 / 3}%`,
        }),
        sourceHandle(id, "response"),
      ]}
    />
  );
};