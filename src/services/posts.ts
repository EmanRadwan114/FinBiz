import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getAllPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    const result: { body: string }[] = response.data;
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Failed to fetch posts");
  }
};

export { getAllPosts };
