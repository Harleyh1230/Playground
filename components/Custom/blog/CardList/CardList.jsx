import { getBlogPosts } from "@/lib/utils";
import Card from "../Card/Card";

export default async function CardList() {
  const posts = await getBlogPosts();
  return (
    <section >
      <Card data={posts} />
    </section>
  );
}
