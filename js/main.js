window.addEventListener("load", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const form = document.querySelector("form");
      sendData();
    });
  }

  function sendData() {
    const FD = new FormData(form);

    let url = form.dataset.gfUrl;
    for (let [key, value] of FD) {
      url = url.replace(key, value);
    }

    let opts = {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      referrer: "no-referrer",
    };

    return fetch(url, opts)
      .then(alert("Uw offerte is aangevraagd."))
      .catch((e) => {
        alert("Error:", e);
      });
  }
});
