import { gql } from "@apollo/client";
import client from "@/lib/utils";
import Link from "next/link";

// UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip } from "@nextui-org/react";
import Form from "@/components/Custom/(NewSubmission)/Form/Form";

export default async function Home() {
  const { data } = await client.query({
    query: gql`
      query FetchAllGames {
        games {
          platform
          title
        }
      }
    `,
  });

  return (
    <main>
      <section className="m-5">
        <div>
          <h1 className="text-5xl m-5 mb-2">Hello</h1>
          <Link href="/blog">GO TO blog page</Link>
          
        </div>
        <div className="grid grid-cols-3 gap-8">
          {data.games.map((item) => (
            <Card key={item.id} className="mt-4">
              <CardHeader>
                <div>
                  <Tooltip content="I am a tooltip">
                    <CardTitle>{item.title}</CardTitle>
                  </Tooltip>
                  <CardDescription className=" flex justify-center items-center">
                    {item.platform}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-8 m-5"> 
        <Form/>
      </section>
    </main>
  );
}
