const x = new WebSocket('ws://localhost:9905/c/lofigirl')

x.addEventListener('open', () => {
    console.log('Opened connection!')
})

x.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)
    console.log(`<${data.author.name}> ${data.message}`)
})

x.addEventListener('close', (event) => {
    console.log('Closed connection: ' + event.reason || '<No reason given>')
})

x.addEventListener('error', (err) => {
    console.log(err)
})