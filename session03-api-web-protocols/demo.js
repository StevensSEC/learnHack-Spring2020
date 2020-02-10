const express = require('express');
const http = require('http');
const FLAG = "FLAG_mxOf4KUqcA5JwSGoYLZWpCFqdloxfmMAQBaWcKSSG2YjChhm6zTpTSheFH2Qa7R1qBG3aWidVtya7esU_FLAG";
const SECRET_TOKEN = "CwMAsGQagXMGNCQAKIHNlSDMgHVj9CKqVwKpgHtpczlPoRaKOGjERJXQti3r";
/*
Jannet just finished making her wish list and she put it on her
website! It took her a really long time to put everything together.
But as her little sibling, you think it would be really funny to DELETE it.
*/
/*
SOLUTION:
Make a DELETE request to /wish-list.txt
*/
const app = express();
const server = http.createServer(app);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
});

app.get("/", (req, res) => {
    res.send(
    `<html>
        <head>
            <meta name="admin-token" content="${SECRET_TOKEN}">
            <title>Jannet's web site :)</title>
        </head>
        <body>
            <h1>Jannet's website</h1>
            <div>
                Wow! look at my website :3 its so cool<br>
                my birthday is coming up soon, maybe take a look at my <a href="/wish-list.txt">wish list</a>?
            </div>
        </body>
    </html>
    `);
});
app.get("/wish-list.txt", (req, res) => {
    res.send(
`penguin plush doll<br\>
grape peeler<br\>
single egg<br\>
left sock<br\>
Komatsu HD605-8 Off-Highway Truck with Komatsu Traction Control<br\>
toenail<br\>
banana flavored tissues<br\>
commando underwear<br\>
concave magnifying glass<br\>
edible rat poison<br\>
`);
});
app.delete("/wish-list.txt", (req, res) => {
    if (req.headers["token"] && req.headers["token"] === SECRET_TOKEN) {
        console.log(`[${new Date().toLocaleTimeString()}] ${req.ip} found the flag!`);
        res.send(FLAG);
    }
    else {
        res.send("Access Denied!");
    }
});
server.listen(process.env.PORT || 8999, () => {
    console.log(`[${new Date().toLocaleTimeString()}] Server started on port ${server.address().port}`);
});