onModelAfterCreate(() => {
  console.log("model created");
  console.log(`${process.env.APP_URL}/provider/revalidate/resources`);
  $http.send({
    url: `${process.env.APP_URL}/provider/revalidate/resources`,
    method: "POST",
  });
}, "landing_page_resources");


onCollectionsListRequest(({ collections }) => {
  console.log("collections list request");
  console.log(collections);
  return collections;
});