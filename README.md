# youtube-websocket
A rudimentary websocket for YouTube live chat!
* [x] Outputs messages with basic info
* [ ] Superchat support
* [ ] Superchat sticker support
* [ ] Member gifting support
* [ ] Message pinning support

*(Probably won't add any of those things, though...)*

## Deploying
You can deploy this on any server by following these steps!
* Install [Bun](https://bun.sh/) on your system
* Clone this GitHub repo using `git clone`
* Navigate to directory and run `bun i` to get deps
* Run the server with `bun .`

You can also change the default port of `9905` to anything by creating a `.env` file and specifying the `PORT` property.

```env
PORT=1234
```

## Usage
You can use the endpoint `/c/<id>` to access live chat via a channel, this can be via a handle such as `ixnoah`, or the channel's id. It will always return the latest stream. If you want to get more specific, try using `/s/<id>` to access a stream via it's id. This can be found in the stream's URL.

```ts
interface LiveChatMessage {
    type: 'message';
    id: string; 
    message: string;
    author: {
        name: string;
        id: string;
        verified: boolean;
        moderator: boolean;
    },
    unix: number;
}
```

By default, superchats are disabled. You can enable these by adding a `?includeSuperchat=true` parameter to your websocket URL.
Be warned, we do not convert currencies and the `purchase_amount` property is a string. The message may also be blank.

```ts
interface LiveChatSuperchat {
    type: 'superchat';
    id: string;
    purchase_amount: string,
    hasMessage: boolean,
    message: string | null;
    author: {
        name: string;
        id: string;
        verified: boolean;
        moderator: boolean;
    },
    unix: number;
}
```

## Special Thanks
* [Ottomated](https://github.com/ottomated/youtube-websocket)
    * made me lose $5 to cloudflare workers resulting in me making this project out of spite