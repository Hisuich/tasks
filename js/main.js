let check = false

window.onload = function() {
    console.log(document.getElementById("delivery"));
    document.getElementById("delivery").checked = check;
    document.getElementById('toadress').disabled = !check;
    document.getElementById('todepartment').disabled = !check;
}

function deliveryCheck() {
    check = !check;
    document.getElementById('toadress').disabled = !check;
    document.getElementById('todepartment').disabled = !check;
}

function calculate() {
    const params = document.getElementsByClassName("main")[0].getElementsByClassName('form-label');
    let url = "./pages/calculate.html?";
    for (let param of params) {
        value = document.getElementById(param.htmlFor).value;
        url += `${param.htmlFor}=${value}\&`;
    }
    if (check) {
        if (document.getElementById('toadress').check) {
            url += "delivery=To_adress";
        }
        else {
            url += "delivery=To_department";
        }
    }
    window.location.href = url;
}

