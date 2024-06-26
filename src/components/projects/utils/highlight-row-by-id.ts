import { EnProjectAction } from "@/enums/project-action.enum";
import projectConstants from "./constants";

export default function highlightRowWithStyle(highlightStyle?: EnProjectAction): string {
  switch (highlightStyle) {
    case EnProjectAction.create:
      return projectConstants.highlight.styles.create;
    case EnProjectAction.update:
      return projectConstants.highlight.styles.update;
    case EnProjectAction.delete:
      return projectConstants.highlight.styles.delete;
    default:
      return '';
  }
}