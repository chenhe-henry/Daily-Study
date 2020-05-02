var test = document.getElementById("testOne");

test.addEventListener("click", () => {
  //   window.location.assign(
  //     "https://www.youtube.com/user/DigitalOceanVideos/playlists"
  //   );
  document.getElementById("testResult").innerHTML =
    "This page is host on" + window.location.host;
  console.log("clicked");
});
