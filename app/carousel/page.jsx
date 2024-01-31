import Card from "@/components/Custom/Card/Card";
import Carousel from "@/components/Custom/Carousel/Carousel";
import CDialog from "@/components/Custom/Dialog/Dialog";
import React from "react";

export default function page() {
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
    {
      id: "e6ba9453-201b-4930-aebd-534aad598234",
      title: "Internal Auditor",
      Description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    },
    {
      id: "068b2b98-a477-40f8-a877-4d20ad10fc51",
      title: "Quality Engineer",
      Description:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    },
    {
      id: "1e084419-7f99-4d6b-9c13-6674445dcda9",
      title: "Sales Associate",
      Description:
        "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    },
    {
      id: "67217fc0-3614-4c01-8fcf-d689f1f9404b",
      title: "Compensation Analyst",
      Description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    {
      id: "7ba6f1b5-cc8a-4a9a-81a7-f2bf36850b20",
      title: "Help Desk Technician",
      Description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    },
    {
      id: "71eeec14-bbb7-4f31-8e41-fae82d98d09f",
      title: "Junior Executive",
      Description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    },
    {
      id: "ccaa6b78-7c4a-45bf-ae82-8a355351fe34",
      title: "Administrative Officer",
      Description:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
    {
      id: "54307f99-f7c5-4732-a572-a721c9b6f091",
      title: "Environmental Tech",
      Description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      id: "c457b2bb-33d9-405a-af40-3653fa343a68",
      title: "Research Assistant III",
      Description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    {
      id: "7acd0ca8-21f1-465b-ab14-b488f79066b0",
      title: "Civil Engineer",
      Description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    },
  ];

  return (
    <>
      <Carousel initialData={data} />
    </>
  );
}
