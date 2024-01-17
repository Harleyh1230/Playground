import Link from "next/link";

export default function Card({ data }) {
  return (
    <article className="mx-2 mb-4 grid grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-800 shadow-md rounded-lg p-4 ">
          <Link
            href={{
              pathname: `/blog/${item.title.toLowerCase().replace(/\s+/g, "-")}`,
              query: {
                title: item.title,
              },
            }}
          >
            <p>ID: {item.id}</p>
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </article>
  );
}

