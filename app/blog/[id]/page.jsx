export default async function page({ params, searchParams }) {
  console.log(params);
  console.log("HEllo", searchParams);
  
  const id = params.id; // read from pathname

  return (
    <>
      <p className="flex justify-center">{id}</p>
      <div>Hello</div>
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
