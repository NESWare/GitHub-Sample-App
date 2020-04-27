// Step 1
const fs = require('fs');
const { createAppAuth } = require("@octokit/auth-app");
const { request } = require("@octokit/request");

// Step 2
var privateKey = fs.readFileSync("./myapp.2020-04-26.private-key.pem", 'utf8');

// Step 3
const auth = createAppAuth({
    id: 12345,
    privateKey: privateKey,
})

// Step 4
auth({ type: "app" }).then(x => {
    // Step 5
    request("GET /app/installations", {
        headers: {
            authorization: `Bearer ${x.token}`,
            accept: "application/vnd.github.machine-man-preview+json",
        },
    }).then(console.log)
})

