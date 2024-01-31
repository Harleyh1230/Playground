"use client";
import Card from "@/components/Custom/Card/Card";
import { useState } from "react";

const data = [
  {
    id: "2550785e-d056-42d5-a16e-d07bf99db5ff",
    title: "VP Accounting",
    Description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: "51f7c681-a248-4939-8124-8488ad47c691",
    title: "Physical Therapy Assistant",
    Description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: "52767021-7bda-4644-90d8-8d6fca5913ad",
    title: "Director of Sales",
    Description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    id: "2a7f22b9-3cd3-499a-b14d-3f4756083dab",
    title: "Financial Analyst",
    Description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: "16fa3a4c-83c2-4683-9f7a-218cba1af19a",
    title: "Health Coach II",
    Description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

export default function page() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 3) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 3 + data.length) % data.length);
  };

  return (
    <>
      <div className="flex m-2">
        <Card
          key={data[index].id}
          title={data[index].title}
          description={data[index].Description}
        />

        <Card
          key={data[(index + 1) % data.length].id}
          title={data[(index + 1) % data.length].title}
          description={data[(index + 1) % data.length].Description}
        />

        <Card
          key={data[(index + 2) % data.length].id}
          title={data[(index + 2) % data.length].title}
          description={data[(index + 2) % data.length].Description}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
