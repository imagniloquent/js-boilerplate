/* [filename] - [description]
 * [copyright]
 */

const express    = require("express");
const bodyParser = require("body-parser");
const port       = 3000;
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => res.send("Hello, world!"));
app.listen(port, () => console.log(`Server listening on port ${port}.`));
