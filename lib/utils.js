import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ApolloClient, InMemoryCache } from '@apollo/client';


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export async function getBlogPosts() {
 const result = await fetch('https://jsonplaceholder.typicode.com/posts')

 return result.json()
}

export async function getBlogPost({id}) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return result.json()  
}

export default client;