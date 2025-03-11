document.addEventListener("DOMContentLoaded", () => {
  // フォーム要素の取得
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const form = document.getElementById("userForm");
  const clearButton = document.getElementById("clearStorage");

  // 以前のデータがあればフォームに復元
  if (localStorage.getItem("userData")) {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    nameInput.value = savedData.name;
    emailInput.value = savedData.email;
  }

  // 入力内容をリアルタイムで保存
  form.addEventListener("input", () => {
    const userData = {
      name: nameInput.value,
      email: emailInput.value
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  });

  // 送信時の処理（今回はデータの保存のみ）
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // フォーム送信を防止
    alert("データが保存されました！");
  });

  // ローカルストレージをクリアするボタン
  clearButton.addEventListener("click", () => {
    localStorage.removeItem("userData");
    nameInput.value = "";
    emailInput.value = "";
    alert("保存されたデータを削除しました。");
  });
});