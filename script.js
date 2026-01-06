let used = 0;
const LIMIT = 10;

function sendRequest() {
  if (used >= LIMIT) {
    document.getElementById("status").innerText =
      "Rate limit exceeded (429 Too Many Requests)";
    return;
  }
  used++;
  document.getElementById("used").innerText = used;
  document.getElementById("status").innerText = "Request accepted";
}

function reset() {
  used = 0;
  document.getElementById("used").innerText = used;
  document.getElementById("status").innerText = "";
}
