let inputBox = document.getElementById('inputBox');
let btn = document.querySelector('button');
let listContainer = document.getElementById('listContainer');
let arrList = [];

showTask()


btn.addEventListener('click', function () {
    addTask()
});

function addTask() {
    if (inputBox.value === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Must Write Something!",
        });
    }
    else {
        let li = ``;
        arrList.push(inputBox.value);
        for (let i = 0; i < arrList.length; i++) {
            li += `
            <li class="">${arrList[i]} <span>\u00d7</span></li>
            `;
            listContainer.innerHTML = li;
        }
        saveData();
    }
    clearInput()
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.add('checked')
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData();
    }
}, false)

function clearInput() {
    inputBox.value = '';
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
