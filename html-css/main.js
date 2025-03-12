document.addEventListener("DOMContentLoaded", () => {

  // フォーム要素の取得
  const nameInput = document.getElementById("js-email");
  const emailInput = document.getElementById("js-password");
  const form = document.getElementById("js-form");

  // 以前のデータがあればフォームに復元
  if (localStorage.getItem("userData")) {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    nameInput.value = savedData.name;
    emailInput.value = savedData.email;
  }

  // 送信時の処理
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // フォーム送信を防止
    const userData = {
      name: nameInput.value,
      email: emailInput.value
    };
    localStorage.setItem("userData", JSON.stringify(userData)); // 入力内容を保存
    alert("データが保存されました！");
  });

});