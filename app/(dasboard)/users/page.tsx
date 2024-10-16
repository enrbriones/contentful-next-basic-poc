import { User } from "@/interfaces/user.interface";
import { fetchEntries } from "@/lib/contentful";

export default async function Users() {
  const users = await fetchEntries("user");
  console.log("users", users);

  if (!users) return <div>No se encontró</div>;

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.sys.id}>{user.fields.name as string}</p>
      ))}
    </div>
  );
}
