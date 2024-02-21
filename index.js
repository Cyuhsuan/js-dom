console.log("start");

const root = document.getElementById("app");
let list = null;
let filist = null;
window.onload = () => {
  console.log("window loaded");
  onInit();
  list = document.getElementById("list");
  filist = document.getElementById("finish_list");
};

const onInit = () => {
  root.innerHTML = `
    <div>
     <input id="inputRef"/>
     <button onclick="onAdd()">增加</button>
    </div>
    未完成：
    <ul id="list"></ul>
    已完成：
    <ul id="finish_list"></ul>
    `;
};

const onAdd = () => {
  const inputRef = document.getElementById("inputRef");
  const node = document.createElement("li");
  node.innerHTML = `
    <div>
        <input type="checkbox" onchange="onCheck(this)"/> 
        ${inputRef.value}
        <button onclick="onDelete(this)">刪除</button>
    </div>`;
  list.appendChild(node);
  inputRef.value = "";
};

const onDelete = (e) => e.parentNode.parentNode.remove() 

const onCheck = (e) => {
    const item = e.parentNode.parentNode;
    if(item) {
        const node = document.createElement("li");
        node.innerHTML = item.innerHTML;
        filist.appendChild(node);
        item.remove();
    }
}