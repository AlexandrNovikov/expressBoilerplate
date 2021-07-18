import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.listen(PORT, () => console.log(`app on the ${PORT} port`))