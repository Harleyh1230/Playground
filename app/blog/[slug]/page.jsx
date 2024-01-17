import "./styles.css";
import { getBlogPost } from "@/lib/utils";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function page({ params, searchParams }) {
  console.log(params);
  console.log("HEllo", searchParams);

  const id = searchParams.BlogId; // read from pathname

  const BlogInfo = await getBlogPost({ id });

  const MDX = `
  # angular-course
  
  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.
  
  ## Development server
  
  Run \`ng serve\` for a dev server. Navigate to \`http://localhost:4200/\`. The application will automatically reload if you change any of the source files.
  
  ## Code scaffolding
  
  Run \`ng generate component component-name\` to generate a new component. You can also use \`ng generate directive|pipe|service|class|guard|interface|enum|module\`. 
  
  ## Build
  
  \`ng build\` to build the project. The build artifacts will be stored in the \`dist/\` directory.
  
  ## Running unit tests
  
  Run \`ng test\` to execute the unit tests via [Karma](https://karma-runner.github.io).
  
  ## Running end-to-end tests
  
  Run \`ng e2e\` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
  
  ## Further help
  
  To get more help on the Angular CLI use \`ng help\` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
  `;

  return (
    <>
      <div className="flex flex-col justify-center items-center border-solid border-2 border-red-700">
        <div>Dev mode</div>
        <p>Blog Id: {id}</p>
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
      <hr />
      <div className="m-3 mb-4">
        <p className="text-3xl">MDX</p>
        <div className="mx-4 text-base leading-relaxed break-words">
          <MDXRemote source={MDX} />
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
