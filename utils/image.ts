export const DEFAULT_IMAGE = "/images/noimage.jpg";

export const setDefaultImgSrc = (e: any, deafultImage = DEFAULT_IMAGE) => {
  e.target.src = deafultImage;
};
