export const getResourceUrl = (
  resource: string,
  id: string,
  collectionId: string,
) => {
  return `http://127.0.0.1:8090/api/files/${collectionId}/${id}/${resource}`;
};
