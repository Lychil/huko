const express = require('express');
const userRouter = require("./routes/user.routes");
const eventRouter = require("./routes/event.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json()) // express по умолчанию не может распарсить строку
app.use('/api', eventRouter);

app.listen(PORT, () => console.log('server is ready!'));