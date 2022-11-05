chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
    switch (msg.type) {
        case 'analyze': {
            sendResponse({msg: 'ayo'})
            break
        }
    }
})
