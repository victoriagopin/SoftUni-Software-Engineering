

function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const textArea = document.getElementById('messages');
    const nameRef = document.querySelector('input[name="author"]');
    const msgRef = document.querySelector('input[name="content"]');
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onSubmit);
    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', onRefresh);

    async function onSubmit(event) {

        event.preventDefault();
        let name = nameRef.value;
        let msg = msgRef.value;

        let data = {
            method: "POST",
            headres: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ author: name, content: msg })
        }

        let res = await fetch(url, data);
        let dataRes = await res.json();


    }

    async function onRefresh() {
        const url = 'http://localhost:3030/jsonstore/messenger';
        let res = await fetch(url);
        let data = await res.json();

        let dataResults = Object.values(data);

        for (let { author, content } of dataResults) {
            textArea.value += `${author}: ${content}\n`;
        }
        textArea.value = textArea.value.trim();
    }
}

attachEvents();