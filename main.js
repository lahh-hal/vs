function showError(errorMessage) {
  const messages = [
    "あれ？なんかエラー出たっぽいけど、なんだか全然わかんないんだけど！",
    "ふん、このソースコード、いい加減すぎるわよね！",
    "もうちょっとちゃんと書かないとダメよ！"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const error = new Error(`${randomMessage} ${errorMessage}`);

  console.error(error);

  const img = document.createElement("img");
  img.src = "https://www.google.co.jp/url?sa=i&url=https%3A%2F%2Fwww.pinterest.jp%2Fpin%2F241224123783486593%2F&psig=AOvVaw2f7kyHBJ2rB6wncCYECWzF&ust=1677124478925000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiZsdidqP0CFQAAAAAdAAAAABAE";
  img.style.position = "fixed";
  img.style.right = "0";
  img.style.bottom = "0";
  img.style.width = "100px";
  img.style.height = "100px";
  document.body.appendChild(img);
}
