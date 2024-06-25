import { EnProjectAction } from "@/enums/project-action.enum";

export default interface HighlightRow {
  highlightId: number;

  highlightStyle: EnProjectAction;
}