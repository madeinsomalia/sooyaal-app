import UploadService from "./upload.service";

export default class UploadApi {
  public static uploadImage = async (file: any) => {
    const response = await UploadService.uploadImage(file);
    return response;
  };

  public static uploadImages = async (files: any) => {
    const response = await UploadService.uploadImages(files);
    return response;
  };
}
