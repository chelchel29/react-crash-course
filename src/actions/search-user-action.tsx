import type { ActionFunctionArgs } from "react-router";

export const searchUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const id = formData.get("id") as string;
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(data);
    //return data;
  } catch (err) {
    if (err instanceof DOMException) {
      return null;
    }
    throw err;
  }
};
