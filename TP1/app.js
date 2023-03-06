let main = document.querySelector(".main");
let news = document.querySelector(".add-news");
news.addEventListener("click", addNew);
function addNew() {
    let newsContent = document.createElement("div");
  newsContent.innerHTML =`<div class="header-main">
  <i class="fa-solid fa-trash"></i>
  <i class="fa-solid fa-pen-to-square"></i>
</div>
<div>
 <textarea name="" class="textA" cols="30" rows="10"></textarea>
</div>`;
    main.appendChild(newsContent);
    let trash = newsContent.querySelector(".fa-trash");
    trash.addEventListener("click", deleteElement);
    let edit = newsContent.querySelector(".fa-pen-to-square");
    edit.addEventListener("click", editElement);
}
function deleteElement(e) {
    let supprimer = e.target;
    let parent = supprimer.parentNode;
    let container = parent.parentNode;
   container.remove();
  }
  function editElement(e) {
    let supprimer = e.target;
    let parent = supprimer.parentNode;
    let container = parent.parentNode;
    let child = container.lastElementChild;
    let textArea = child.querySelector(".textA");
    
    if (textArea.classList.contains("textA")) {
      textArea.disabled = !textArea.disabled;
    }
  }
  
  
