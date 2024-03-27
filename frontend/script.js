// frontend/script.js
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendData();
});

function sendData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var data = {
        "name": name,
        "email": email
    };

    fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Data submitted successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error occurred while submitting data.");
    });
}
