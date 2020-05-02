var test = document.getElementById("testOne");

test.addEventListener("click", () => {
  const redirect = () => {
    window.location.assign(
      "https://www.youtube.com/user/DigitalOceanVideos/playlists"
    );
  };
  setTimeout(redirect, 10000);

  //   document.getElementById("testResult").innerHTML =
  //     "This page is host on " + window.location.href;
  //   console.log("clicked");
});
