# part-01

Sample code for [this post](https://www.nesware.io/2020/04/26/discord-github-classroom-pt1.html)

We have two scripts here:

* `installation.js` retrieves the installation ID for a GitHub app. You need to provide a private key for your app along with the app ID.
* `index.js` runs a query to get all public repositories for your organization. You need to provide a private key and app ID as before, but also include the installation ID from `installation.js` and the name of your organization.
