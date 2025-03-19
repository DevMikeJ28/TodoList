const listItem = [];

const initData = function() {
    
    if(!localStorage.length) {
        return;
    }
    
    for(let i = 0; i < localStorage.length; i++) {
        listItem.push(localStorage.getItem(i));
    }

    updateList();
}

const submitForm = function() {
    
    const element = document.getElementById('input-value');

    localStorage.setItem(localStorage.length, element.value);
    listItem.push(element.value)
    element.value = ""
    updateList();
}

const updateList = function() {
    
    const listTask = document.getElementById('listTask');
   
    for(let i = 0; i < listItem.length; i++) {

        const content = `<li>${listItem[i]}</li>`;
        const eleContent = document.createElement("li");
        eleContent.innerHTML = content

        listTask.appendChild(eleContent); 

        console.log(eleContent)

    }
    console.log(listTask)
}