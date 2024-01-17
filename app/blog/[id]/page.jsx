import { getBlogPost } from "@/lib/utils";
import Link from "next/link";

export default async function page({ params, searchParams }) {
  console.log(params);
  console.log("HEllo", searchParams);

  const id = searchParams.BlogId; // read from pathname

  const BlogInfo = await getBlogPost({ id });
  console.log(BlogInfo);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p>{id}</p>
        <div>Hello</div>
      </div>
      <div className="m-3 mb-4">
        <Link
          href={"/blog"}
          className="bg-primary  hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </Link>
      </div>
      <hr />
      <div className="container mx-auto mt-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{BlogInfo.title}</h1>
          <div>
            <p className="text-gray-600">Published on January 17, 2024</p>
            <p className="text-gray-600">Blog ID: {BlogInfo.id}</p>
          </div>
          <div className="mt-4">
            <p className="text-lg leading-7 min-h-40">{BlogInfo.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

// blog/[id].js
// export default async function Page({ params }) {
// console.log(params);
// console.log(params.query);
//   return (
//     <p>{params.id}</p>
//   )
// }
