const robots = `User-agent: *
Disallow:
Sitemap: https://example.com/sitemap.xml
`;

export default function Robots() {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
