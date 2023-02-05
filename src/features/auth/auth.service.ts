import axios from "@/utils/axios";

export default class AuthService {
  /**
   * @register
   * @param userData
   * @returns response.data
   */
  public static async register(userData: any) {
    const response = await axios.post("/auth/register", userData);
    return response.data;
  }
  /**
   * @login
   * @param userData
   * @returns response.data
   */
  public static async login(userData: any) {
    const response = await axios.post("/auth/login", userData);
    return response.data;
  }
}
