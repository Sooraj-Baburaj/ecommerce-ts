const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const nextFetch = async (endPoint: string, options?: RequestInit) => {
  try {
    const data = await fetch(`${BASE_URL}${endPoint}`, { ...options });
    const response = await data.json();

    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
};
