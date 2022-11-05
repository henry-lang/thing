import {getCurrentTab} from './utils.js'

const tab = await getCurrentTab()
if (tab != undefined) {
    chrome.tabs.sendMessage(tab.id, {type: 'analyze'})
}
