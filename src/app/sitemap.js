export default function sitemap() {
  const baseUrl = "https://parvarastogi.dev";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
