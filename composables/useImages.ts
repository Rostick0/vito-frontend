// import { useToast } from "vue-toastification";
import api from "~/api";

export default () => {
  const createImage = async (image: File) => {
    const formData = new FormData();

    formData.append("imageFile", image);

    const response = await api.images.create({
      data: formData,
    });

    return await response;
  };

  const createImages = async (images) => {
    let data = [];

    for (let i = 0; i < images.length; i++) {
      if (images[i]?.file) {
        try {
          const image = await createImage(images[i]?.file);
          data.push(image.id);
        } catch (e) {
          warningPopup(`Image dont upload: ${images[i]?.name}`);
        }
      }
    }

    return data;
  };

  const getImageFrom = async (image: File) => {
    if (image?.toString() === "[object File]") {
      const resp = await createImage(image);

      if (resp?.error) {
        warningPopup("Image dont upload");
        return;
      }

      return resp;
    }
    return image;
  };

  const getImageIdsFrom = async (images) => {
    const result = [];

    for (let i = 0; i < images.length; i++) {
      if (!images[i]?.file) {
        result.push(images[i]?.id);
        continue;
      }
      const uploadeImage = await createImage(images[i]?.file);

      result.push(uploadeImage?.id);
    }

    return result.join();
  };

  return {
    createImage,
    createImages,
    getImageFrom,
    getImageIdsFrom,
  };
};
