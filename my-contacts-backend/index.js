let express = require('express');
const dotevn = require('dotenv').config();

const app = express();

port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});