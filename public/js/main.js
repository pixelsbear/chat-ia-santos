const inputMessage = document.getElementById("inputMessage");
const btnSend = document.getElementById("btnSend");
const chatArea = document.getElementById("chatArea");

    inputMessage.focus();

    function addMessage(message,sender) {
        const divMessage = document.createElement("div");

        divMessage.classList.add("message", sender);
        divMessage.innerHTML = marked.parse(message);

        chatArea.appendChild(divMessage);
        chatArea.scrollTop = chatArea.scrollHeight;

    }

    function showLoadingIndicator() {
        const divMessage = document.createElement("div");
        divMessage.classList.add("message", "bot", "loading");
        
        divMessage.innerHTML = `
            Pensando
            <span class="loading-dots">
                <span>.</span><span>.</span><span>.</span>
            </span>
        `;

        chatArea.appendChild(divMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
        return divMessage;

    }

    async function sendMessage () {
        const message = inputMessage.value.trim();

        inputMessage.value = "";
        //inputMessage.focus();

        if (!message) return;

        inputMessage.disabled = true;
        btnSend.disabled = true;

        addMessage(message, "user");

        const loadingIndicator = showLoadingIndicator();

        try {

            const response = await fetch("/api/chat", {
                method:"POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ message }),
            });

            loadingIndicator.remove();

            const data = await response.json();

            if (response.ok){
                addMessage(data.response, "bot");

            } else {
                addMessage(data.error, "bot");
            }
            
        } catch (error) {
            loadingIndicator.remove();
            addMessage(error.message, "bot");
        } finally {
        
        inputMessage.disabled = false;
        btnSend.disabled = false;
        inputMessage.focus();

        }
        
    }

    btnSend.addEventListener("click", sendMessage);

    inputMessage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !btnSend.disabled){
            sendMessage();
        }
            
    });