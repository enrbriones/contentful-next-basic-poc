import { fetchAllUsers } from "@/lib/contentful";
import { UserList } from "../../../components/users/UserList";

export default async function Users() {
  const users = await fetchAllUsers();
  // console.log("users", users);
  // users.map((user) => {
  //   console.log("POSTS", user.fields.posts);
  // });

  return (
    <div>
      <h1 className="text-2xl mb-3">Usuarios</h1>
      <UserList users={users} />
    </div>
  );
}
