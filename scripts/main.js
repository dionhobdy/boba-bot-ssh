const input = document.getElementById("command");
const output = document.getElementById("output");

input.focus();

input.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();

    const command = input.textContent.trim();

    output.innerHTML += `user@boba-bot:~$ ${command}<br>`;

    executeCommand(command);

    input.textContent = "";
});


function executeCommand(command) {

    switch (command) {

        case "clear":
            output.innerHTML = "";
            break;

        case "help":
            output.innerHTML += `
                Available Commands:<br>
                clear
                generate
                help
                loadMenu
                ls
                open
                saveMenu
            `;
            break;

        default:
            output.innerHTML +=
                `Command not found: ${command}<br><br>`;
    }
}