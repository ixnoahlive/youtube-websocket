const x = new WebSocket('ws://localhost:9905/c/_uMuuHk_KkQ') // UCSJ4gkVC6NrvII8umztf0Ow

x.addEventListener('open', () => {
    console.log('opened')
})

x.addEventListener('message', (event) => {
    console.log(event.data)
})

x.addEventListener('close', () => {
    console.log('closed')
})

x.addEventListener('error', (err) => {
    console.log(err)
})