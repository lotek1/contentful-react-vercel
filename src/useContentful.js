import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "u9dniwme39z5",
    accessToken: "Ou75guPTL5mbQKjTGB805LZnXyXeeEVagVp2IoqlACM",
  });

  const getGuides = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "guidebook",
      });

      return entries.items;
    } catch (error) {
      console.log(`Error fetching reviews: ${error}`);
    }
  };
  return { getGuides };
};

export default useContentful;
