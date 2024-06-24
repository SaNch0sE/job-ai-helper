import projectConstants from "./constants";

const cutString = (str: string | null): string => {
  if (!str || str.length === 0) return projectConstants.nullString;

  return str.length > projectConstants.maxTableCellLength ? `${str.substring(0, projectConstants.maxTableCellLength)}...` : str;
};

export default cutString;