import axios from "@/utils/axios";

export default class UploadService {
  /**
   * @uploadImage
   * @param single file
   * @returns response.data
   */
  public static uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("/upload-single", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };
  /**
   * @uploadImage
   * @param multiple files
   * @returns response.data
   */
  public static uploadImages = async (files: any) => {
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append("files", file);
    });
    const response = await axios.post("/upload-multiple", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };
}
