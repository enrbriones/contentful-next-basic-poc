import { TotalCount } from "@/components/home/TotalCount";
import { countAllPosts, countAllUsers } from "@/lib/contentful";

export default async function Home() {
  const totalUsers = await countAllUsers();
  const totalPosts = await countAllPosts();

  return (
    <>
      <div className="flex justify-start gap-6">
        <TotalCount content="Usuarios" total={totalUsers} />
        <TotalCount content="Publicaciones" total={totalPosts} />
      </div>
    </>
  );
}
