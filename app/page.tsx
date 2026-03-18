import { getServerSession } from "next-auth";
import { TodoAppClient } from "./todos/TodoAppClient";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="w-full">
      {session ? (
        <TodoAppClient />
      ) : (
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
          <p className="text-gray-500">Please sign in to manage your tasks.</p>
        </div>
      )}
    </div>    
  );
}
