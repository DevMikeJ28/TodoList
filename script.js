let listItem = [];

const initData = function () {
  listItem = [];

  if (!localStorage.length) {
    return;
  }

  for (let i = 0; i < localStorage.length; i++) {
    listItem.push(localStorage.getItem(i));
  }

  updateList();
};

const submitForm = function () {
  const element = document.getElementById("input-value");

  localStorage.setItem(localStorage.length, element.value);
  listItem.push(element.value);
  element.value = "";
  updateList();
};

const updateList = function () {
  if (!listItem.length) {
    return;
  }

  const listTask = document.getElementById("listTask");

  //clear old list:
  let child = listTask.lastElementChild;
  while (child) {
    listTask.removeChild(child);
    child = listTask.lastElementChild;
  }

  for (let i = 0; i < listItem.length; i++) {
    const content = `<li class='display-flex-between' id='content${i}'>
                            <div class='content'>
                                ${listItem[i]}
                            </div>
                            <div class='action'>
                                <button class='button buton-edit' onclick='editContent(${i})'>Edit</button>
                                <button class='button button-del' onclick='remove(${i})'>Delete</button> 
                            </div>
                        </li>`;
    const eleContent = document.createElement("li");
    eleContent.innerHTML = content;

    listTask.appendChild(eleContent);
  }
};

const editContent = function (id) {
  const ele = document.getElementById(`content${id}`);

  //create input node:
  const content = `<li class='display-flex-between' >
                        <input class='input' id='ip-content${id}' value='${listItem[id]}'>
                        </input>
                        <div class='action'>
                            <button class='button buton-done' onclick='done(${id})'>Done</button>
                        </div>
                    </li>`;
  const eleContent = document.createElement("li");
  eleContent.innerHTML = content;

  //replace to input node:
  ele.replaceWith(eleContent);
};

const done = function (id) {
  //get new value:
  const newContent = document.getElementById(`ip-content${id}`).value;

  //update localStorage:
  localStorage.setItem(id, newContent);
  listItem[id] = newContent;

  //update
  updateList();
};

const remove = function (id) {
    
    //reset key:
    localStorage.clear();

    //update newStorage:
    for(let i = 0; i < listItem.length; i++) {
        
        if(i == id) {
            continue
        }

        localStorage.setItem(i, listItem[i]);
    }

    updateList();
};

//test update git #2
