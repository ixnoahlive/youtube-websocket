import type { YTNodes } from "youtubei.js/web";

export function textMessageToJSON(itemData: YTNodes.LiveChatTextMessage) {
    return JSON.stringify({
        type: 'message',
        id: itemData.id,
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