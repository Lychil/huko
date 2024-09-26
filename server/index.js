const express = require('express');
const eventRouter = require("./routes/event.routes");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json()) // express по умолчанию не может распарсить строку
app.use('/api', eventRouter);

app.listen(PORT, () => console.log('server is ready!'));