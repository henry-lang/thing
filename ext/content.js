chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
    switch (msg.type) {
        case 'analyze': {
            const elements = document.querySelectorAll('span[data-ingredient-name]')
            console.log(elements.length)
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i].textContent)
            }
            break
        }
    }

    return true
})
