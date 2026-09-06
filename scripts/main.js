const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
    if (event.key !== "Enter") { return; }

    const command = input.value.trim();

    output.innerHTML += ` user@boba-bot:~$ ${command}<br> `;
    executeCommand(command);

    input.value = "";
});

function executeCommand(command) {
    switch (command) {
        case "help":
            output.innerHTML += `
                Available Commands:<br>
                clear
                generate
                help
                loadMenu
                ls
                open
                saveMenu<br>
            `;
            break;
        default:
            output.innerHTML += ` Command not found: ${command}<br><br> `;
    }
}