export const getImagePath = (path) => {
    const prefix = "/"; // For staging
    // const prefix = "/"; // For local
    return `${prefix}${path}`;
  };
  