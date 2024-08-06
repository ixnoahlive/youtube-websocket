import { Innertube, Log, UniversalCache } from "youtubei.js/web";
Log.setLevel(Log.Level.ERROR)

let innertubeInstance = null

export async function innertube(): Innertube {
    if (!innertubeInstance)
        innertubeInstance = await Innertube.create()

    return innertubeInstance
}