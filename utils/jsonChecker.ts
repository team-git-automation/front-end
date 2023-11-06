export const isJson = (res?: Response, str?: string) => {
  if (res) {
    const result = res.headers
      .get("content-type")
      ?.includes("application/json");
    return result;
  } else if (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  return false;
};
