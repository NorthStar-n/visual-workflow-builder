import { Handle } from "reactflow";
import { useStore } from "../store";
import "./BaseNode.css";

export const BaseNode = ({
  id,
  title,
  fields = [],
  handles = [],
  width = 240,
  minHeight = 130,
}) => {
  const deleteNode = useStore((state) => state.deleteNode);
  const renderField = (field, index) => {
    switch (field.type) {
      case "text":
      case "number":
      case "password":
        return (
          <input
            className="node-input"
            type={field.type}
            value={field.value}
            placeholder={field.placeholder || ""}
            onChange={field.onChange}
          />
        );

      case "textarea":
        return (
          <textarea
            className="node-textarea"
            value={field.value}
            placeholder={field.placeholder || ""}
            onChange={field.onChange}
          />
        );

      case "select":
        return (
          <select
            className="node-select"
            value={field.value}
            onChange={field.onChange}
          >
            {field.options.map((option) => {
              if (typeof option === "string") {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              }

              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        );

      case "checkbox":
        return (
          <div className="node-checkbox">
            <input
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
            />
            <span>{field.checkboxLabel}</span>
          </div>
        );

      case "custom":
        return field.component;

      default:
        return null;
    }
  };

  return (
    <div
      className="base-node"
      style={{
        width,
        minHeight,
      }}
    >
      <button
    className="delete-node-btn"
    onClick={() => deleteNode(id)}
>
    ×
</button>
      <div className="node-title">{title}</div>

      <div className="node-fields">
        {fields.map((field, index) => (
          <label className="node-label" key={index}>
            {field.label}
            {renderField(field, index)}
          </label>
        ))}
      </div>

      {handles.map((handle, index) => (
  <Handle
    key={index}
    {...handle}
    title={handle.label || ""}
  />
))}
    </div>
  );
};