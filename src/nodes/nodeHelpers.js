import { Position } from "reactflow";

/**
 * Creates a source handle (output) on the right side.
 */
export const sourceHandle = (
  id,
  handleId,
  style = {}
) => ({
  type: "source",
  position: Position.Right,
  id: `${id}-${handleId}`,
  style,
});

/**
 * Creates a target handle (input) on the left side.
 */
export const targetHandle = (
  id,
  handleId,
  style = {}
) => ({
  type: "target",
  position: Position.Left,
  id: `${id}-${handleId}`,
  style,
});