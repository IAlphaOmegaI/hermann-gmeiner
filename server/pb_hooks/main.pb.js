onModelAfterCreate(() => {
  const APP_URL = "https://hermanngmeiner.edu.al";

  console.log(`${APP_URL}/provider/revalidate/resources`);
  $http.send({
    url: `${APP_URL}/provider/revalidate/resources`,
    method: "POST",
  });
}, "landing_page_resources");


onCollectionsListRequest(({ collections }) => {
  console.log("collections list request");
  console.log(collections);
  console.log("hi")
  return collections;
});