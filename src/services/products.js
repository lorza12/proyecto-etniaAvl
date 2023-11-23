export function getImageProduct(element) {
  const { url } = element.image.data.attributes;
  return url;
}
