document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const noticeList = document.getElementById("notice-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
      const li = document.createElement("li");
      li.classList.add("notice-item");

      li.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
      `;

      noticeList.appendChild(li);

      // 입력창 초기화
      form.reset();
    }
  });
});
