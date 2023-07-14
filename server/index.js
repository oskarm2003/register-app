const http = require('http');
const PORT = 3000

const USERS = new Array();
let user_counter = 0

const server = http.createServer((req, res) => {

    //DEFINE REQUEST METHOD
    switch (req.method) {
        case 'GET':
            handle_get(req, res)
            break;
        case 'POST':
            handle_post(req, res)
            break;
        case 'DELETE':
            handle_delete(req, res)
    }

})
server.listen(PORT, () => { console.log('listening on ' + PORT); })

//WHEN POST METHOD DETECTED
const handle_post = async (req, res) => {

    res.setHeader('Content-Allow-Origin', '*')

    let str = ''
    req.on('data', (data) => {
        str += data
    })

    req.on('end', () => {

        str = JSON.parse(str)

        let new_user = {
            index: user_counter + 1,
            name: str.name,
            passwd: str.passwd,
            timestamp: str.timestamp
        }

        for (let user of USERS) {
            if (user.name == new_user.name) {
                res.end('403')
                return 0
            }
        }

        USERS.push(new_user)
        user_counter++
        res.end('200')

    })

}

//WHEN DELETE METHOD DETECTED
const handle_delete = (req, res) => {

    res.setHeader('Content-Allow-Origin', '*')

    let str = ''
    req.on('data', (data) => {
        str += data
    })

    req.on('end', () => {

        index = JSON.parse(str)
        console.log(index);

        for (let i = 0; i < USERS.length; i++) {

            if (USERS[i].index === index) {

                for (let j = i; j < USERS.length; j++) {
                    console.table(USERS);
                    USERS[j] = USERS[j + 1]
                }
                USERS.pop()

                res.end('200')
                return 0

            }

        }

        res.end('404')

    })
}

//WHEN GET METHOD DETECTED
const handle_get = (req, res) => {

    res.setHeader('Content-Allow-Origin', '*')
    res.end(JSON.stringify(USERS))

}