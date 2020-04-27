// Step 1
const fs = require('fs');
const { createAppAuth } = require("@octokit/auth-app");
const { graphql } = require("@octokit/graphql");

// Step 2
var privateKey = fs.readFileSync("./myapp.2020-04-26.private-key.pem", 'utf8');

// Step 3
const auth = createAppAuth({
    id: 12345,
    installationId: 67890,
    privateKey: privateKey,
})

// Step 4
const graphqlWithAuth = graphql.defaults({
    request: {
        hook: auth.hook
    }
});

// Step 5
organization = "NESWare"
var query = `{
    organization(login: "${organization}") {
        repositories(first: 10, privacy: PUBLIC) {
            nodes {
                name
                url
            }
        }
    }
}`;

// Step 6
graphqlWithAuth(query).then( result => {
    console.log( result.organization.repositories.nodes )
})
