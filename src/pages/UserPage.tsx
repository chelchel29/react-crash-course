import { Form, useLoaderData } from "react-router";
import type { User } from "../components/StateTest";

type UserData = {
  users: User[];
  total: number;
};

export default function UserPage() {
  const users = useLoaderData() as UserData;

  return (
    <div>
      <Form action="/users" method="post">
        <input name="id" type="text" placeholder="Search user..." />
        <button type="submit">Search</button>
      </Form>
      {users?.users.map((user) => (
        <li key={user.id}>
          {user.firstName}
          {user.email}
        </li>
      ))}
    </div>
  );
}
