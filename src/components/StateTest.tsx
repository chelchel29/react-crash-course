import { useFetch } from "../hooks/useFetch";
import Header from "./Header";

interface User {
  id: number;
  firstName: string;
  email: string;
}

interface UserResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className="animate-spin rounded-full h-8 w-8 
                      border-2 border-indigo-600 border-t-transparent"
      />
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-800 font-medium">⚠️ {message}</p>
    </div>
  );
}

function StateTest() {
  const {
    data: users,
    loading,
    error,
  } = useFetch<UserResponse>("https://dummyjson.com/users");

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      {/* <Header point={0} /> */}
      {/* <h2>Point - {point}</h2>
      <button onClick={increacePoint}>+</button>
      <button onClick={decreasePoint}>-</button> */}
      {users?.users.map((user) => (
        <li key={user.id}>
          {user.firstName}
          {user.email}
        </li>
      ))}
    </div>
  );
}

export default StateTest;
