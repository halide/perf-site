const express = require('express')

const fs = require('fs')
// const key = fs.readFileSync('./key.pem');
// const cert = fs.readFileSync('./cert.pem');

const SECRET_API_TOKEN = fs.readFileSync('./secret').toString()

console.log(SECRET_API_TOKEN)

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('this is an secure server')
})

app.post('/report', (req, res) => {
  if (SECRET_API_TOKEN !== req.headers.token) {
    res.send({ code: '401', msg: 'Authentication Failed!' })
  } else {
    res.send({
      code: '200',
      msg: {
        desc: 'Well received',
        data: req.body,
      },
    })
  }
})

// const server = https.createServer({ key: key, cert: cert }, app);

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
