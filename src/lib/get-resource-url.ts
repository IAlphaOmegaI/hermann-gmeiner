export const getResourceUrl = (
  resource: string,
  id: string,
  collectionId: string,
) => {
  return `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${id}/${resource}`;
};
