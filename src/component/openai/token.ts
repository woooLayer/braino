const url = "https://serverless-api-mutx.vercel.app/api";

export const getAccessToken = async (email: string, password: string) => {
  const textResponse = await fetch(
    `${url}?email=${email}&password=${password}`,
  );
  const textData = await textResponse.text();
  return textData;
};
