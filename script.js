function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("https://anchor.fm/s/dccf7cb8/podcast/rss");
      
}

window.onload = function() {
  const myButton = document.getElementById("myButton");
  if (myButton) {
    myButton.addEventListener("click", handleClick);
  }
};


