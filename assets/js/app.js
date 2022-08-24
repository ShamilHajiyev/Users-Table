let username = document.querySelector('#name-input');
let surname = document.querySelector('#surname-input');
let salary = document.querySelector('#salary-input');
let addBtn = document.querySelector('#add')

let result = document.querySelector('#users-table table tbody')
let warningMessage = document.querySelector('#warning-message');

function CheckInput() {
    if (username.value === '') {
        warningMessage.innerHTML = 'USERNAME IS EMPTY';
        return false;
    }

    if (surname.value === '') {
        warningMessage.innerHTML = 'SURNAME IS EMPTY';
        return false;
    }

    if (salary.value === '') {
        warningMessage.innerHTML = 'SALARY IS EMPTY';
        return false;
    }

    return true;
}

addBtn.addEventListener('click', function () {
    if (CheckInput()) {
        let text =
            `
        <tr>
            <td>${username.value}</td>
            <td>${surname.value}</td>
            <td>${salary.value}</td>
            <td onclick="Delete(event)">delete</td>
        </tr>
        `
        result.innerHTML += text;
        username.value = '';
        surname.value = '';
        salary.value = '';
    }
})

function Delete(e) {
    e.target.parentElement.style.display = 'none';
}