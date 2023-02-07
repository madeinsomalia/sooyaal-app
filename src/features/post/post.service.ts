import axios from "@/utils/axios";

export default class PostService {
  /**
   * @getPosts
   * @returns response.data
   */
  public static async getPosts() {
    const response = await axios.get("/posts");
    return response.data;
  }

  public static async getPostById(id: string) {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  }
}
