//import type { LoaderFunctionArgs } from "react-router";

export const userLoader = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof DOMException) {
      return null;
    }
    throw err;
  }
};
