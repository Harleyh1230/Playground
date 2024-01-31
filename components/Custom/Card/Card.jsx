

import CDialog from "../Dialog/Dialog";

export default function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-48 mx-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={"https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg"}
            alt="Card image"
          />
        </div>
        <div className="p-8">
          <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Category
          </p>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
          <div>
            <CDialog Title={title} Description={description} />
          </div>
        </div>
      </div>
    </div>
  );
}
