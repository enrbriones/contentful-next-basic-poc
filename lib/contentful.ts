import { createClient, Entry, EntryCollection } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Generic
// export async function fetchEntries<T>(contentType: string):Promise<Entry<T>[]> {
//   const entries: EntryCollection<T> = await client.getEntries<T>({ content_type: contentType });
//   return entries.items;
// }

// Campo fijo
// export async function fetchEntries(contentType: string): Promise<Entry<IPostFields>[]> {
//   const entries: EntryCollection<IPostFields> = await client.getEntries({
//     content_type: contentType,
//   });

//   return entries.items;
// }

// Any
export async function fetchEntries(contentType: string) {
  const entries = await client.getEntries({
    content_type: contentType,
  });

  return entries.items;
}
