function startMachine() {
    var machineCode = document.getElementById('machine-code').value;

    fetch('/start-machine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ machineCode: machineCode })
    })
    .then(response => {
        if (response.ok) {
            console.log('Machine started successfully');
        } else {
            console.error('Failed to start machine');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
