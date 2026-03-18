import { cookies } from "next/headers";

export default async function APIFromServer() {
  const cookieStore = await cookies();
  
  const resp = await fetch("http://localhost:3000/api/whoAmI", {
    headers: {
      cookie: cookieStore.toString(),
    },
  }).then((res) => res.json());

  return (
    <div>
      <div>
        API Route From <span className="font-bold underline">Server</span>
      </div>
      <div>Name: {resp?.name}</div>
    </div>
  );
}