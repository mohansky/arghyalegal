import { BASE_PATH } from "@/lib/constants";
export default function sitemap() {
  return [
    {
      url: `${BASE_PATH}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_PATH}/whyus`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_PATH}/team`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_PATH}/practice-areas`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_PATH}/contact`,
      lastModified: new Date(),
    },
  ];
}
