console.log("hello")

function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });

    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
}

function logSubmit(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userAge = document.getElementById('userAge').value;
    const userEmail = document.getElementById('userEmail').value;
    const date = document.getElementById('date').value;
    const country = document.getElementById('country').value;
    const userNotes = document.getElementById('userNotes').value;

    const content = `Name: ${userName} \nAge: ${userAge} \nEmail:${userEmail} \nDate of Birth: ${date} \nCountry: ${country} \nNotes: ${userNotes}`

    downloadString(content, "txt", "Data")
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);
