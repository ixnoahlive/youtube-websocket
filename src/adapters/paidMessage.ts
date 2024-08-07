import { YTNodes } from "youtubei.js/web";

export function paidMessageToJSON(itemData: YTNodes.LiveChatPaidMessage) {
    return JSON.stringify({
        type: 'superchat',
        id: itemData.id,
        
        hasMessage: !itemData.message.isEmpty(),
        message: itemData.message.text,
        
        author: {
            name: itemData.author.name,
            id: itemData.author.id,
            verified: itemData.author.is_verified || false,
            moderator: itemData.author.is_moderator || false,
        },
        unix: itemData.timestamp || 0
    })
}