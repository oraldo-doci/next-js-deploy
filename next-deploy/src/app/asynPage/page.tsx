export const asyncPage = async () => {
  const apiRes = await fetch("https://rickandmortyapi.com/api/character/108");
  return <>{JSON.stringify(apiRes)}</>;
};
