onModelAfterCreate(() => {
  const APP_URL = "https://hermanngmeiner.edu.al";
  $http.send({
    url: `${APP_URL}/provider/revalidate/resources`,
    method: "POST",
  });
}, "landing_page_resources");

onModelAfterCreate((event) => {
  const APP_URL = "https://hermanngmeiner.edu.al";
  $http.send({
    url: `${APP_URL}/provider/revalidate/posts`,
    method: "POST",
  });
}, "posts");

onModelAfterUpdate((event) => {
  const APP_URL = "https://hermanngmeiner.edu.al";
  const { id } = event.model;

  $http.send({
    url: `${APP_URL}/provider/revalidate/posts`,
    method: "POST",
  });

  $http.send({
    url: `${APP_URL}/provider/revalidate/posts/${id}`,
    method: "POST",
  });
}, "posts");
