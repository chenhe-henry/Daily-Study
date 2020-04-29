function progressLoading() {
  var bar = document.getElementById("progress-bar");

  setInterval(function () {
    bar.value += 1;
    if (bar.value >= 5) {
      bar.value = 0;
    }
  }, 1000);
}

progressLoading();
