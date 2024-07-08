export const getActiveColor = (active: boolean): "primary" | "foreground" => {
  return active
    ? "primary"
    : "foreground";
};