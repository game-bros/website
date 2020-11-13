import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCES_TOKEN as string
});

export default client;

/**
 * Fetches single entry with the given slug
 *
 * NOTICE: To use this function the given content type MUST have a field called 'slug'
 *
 * @param contentType
 * @param slug
 */
export async function getEntryBySlug<T>(contentType: string, slug: string): Promise<T | undefined> {
  const response = await client.getEntries<T>({
    content_type: contentType,
    'fields.slug': slug,
    include: 1
  });

  return response.items[0]?.fields;
}
