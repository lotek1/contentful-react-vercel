import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
  });

  const getGuides = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "guidebook",
      });

      return entries.items;
    } catch (error) {
      console.log(`Error fetching guides: ${error}`);
    }
  };
  return { getGuides };
};

export default useContentful;
