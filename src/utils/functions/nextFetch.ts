const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const nextFetch = async <T>(
  endPoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const data = await fetch(`${BASE_URL}${endPoint}`, { ...options });
    const response = await data.json();

    return response as T;
  } catch (error) {
    return { error: JSON.stringify(error) } as T;
  }
};
