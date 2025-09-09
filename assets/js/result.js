// ページ上部へスクロール
const btn = document.getElementById("pagetop");
btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// tebleのソート機能
const options = { valueNames: ['rank', 'votes', 'character'] };
const userList = new List('table', options);
function filter(){ userList.filter(); }
filter();
