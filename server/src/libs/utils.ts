import Jimp from "jimp";

export function generateThumbnail(image: Buffer) {
  return Jimp.read(image)
    .then(img => {
      img.resize(100, Jimp.AUTO);
      img.quality(80);
      return img.getBase64Async(Jimp.MIME_JPEG);
    })
    .then(file => {
      return file;
    })
    .catch(reason => {
      console.error(reason);
      throw reason.message;
    });
}
