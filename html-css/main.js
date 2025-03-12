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

  // // 入力内容をリアルタイムで保存
  // button.addEventListener("click", () => {

  // });

  // 送信時の処理（今回はデータの保存のみ）
  form.addEventListener("submit", () => {
    const userData = {
      name: nameInput.value,
      email: emailInput.value
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("データが保存されました！");
  });

});