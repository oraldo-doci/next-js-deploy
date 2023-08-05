export default async function Page() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(
    `https://swapi.dev/api/planets/3/?format=json`
  );

  return <div>{JSON.stringify(staticData)}</div>;
}
