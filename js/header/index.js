const searchBtnEl = document.querySelector("#search");
let result = document.querySelector("#no_result");

searchBtnEl.onclick = event => {
  event.preventDefault();
  const searchText = document.querySelector("#search-box").value;
  let results = [];
  if (searchText !== "") {
    results = Search(searchText);
  }
  sessionStorage.setItem("search", JSON.stringify(results));
  location.href = "/search.html";
};

window.onclick = function() {
  let result_search = window.sessionStorage.getItem("search");
  if (result_search.length === 0) {
    result.innerHTML = "<p>khong co ket qua tim kiem</p>";
    this.console.log("linh");
  }
};
