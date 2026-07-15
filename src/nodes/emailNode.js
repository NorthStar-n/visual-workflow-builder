import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { targetHandle } from "./nodeHelpers";

export const EmailNode = ({ id }) => {
  const [recipient, setRecipient] = useState("user@example.com");

  return (
    <BaseNode
    id={id}
      title="Email Sender"
      fields={[
        {
          label: "Recipient",
          type: "text",
          value: recipient,
          onChange: (e) => setRecipient(e.target.value),
        },
      ]}
      handles={[
        targetHandle(id, "content"),
      ]}
    />
  );
};