# In-N-Out Versus

Web app created with React components, context, and Sass for styling.

---

The [Context component](./src/components/Context.js) contains all the data that the app uses, it can be converted into JSON and uploaded in a database.

It is also easy to add new restaurants to the comparison, albeit adding new parameters to compare against does require some HTML, but as long as the pattern is followed there shouln't be many problems.

---

Implementing ads into the site should also be possible and not difficult, there is a lot of space on the sides for that on the desktop render, and ad servers like AdSense have an automatic feature where you just copy and paste the code they give you into the [html file](./public/index.html).

---

The favicon can be changed, just replace the `favicon.ico` file in [the public folder](./public/).

---

## After changes ...

You will have to rebuild the site, that means compiling the code again into a minimized version of itself, that goes into the [build folder](./build/) which is the website that you will host.

DO NOT MODIFY THESE FILES DIRECTLY!

Or the site will break, to make changes refer to the [public](./public/) and [src](./src/) folder.
After you made changed you will have to build the webapp again, you can use the command line / terminal for that with this command from the [root directory](./)

```bash
npm run build
```

This may change depending on your hosting method, some may build the app in the deployment process itself (like with gh-pages `npm run deploy`)

---

Inside the [src folder](./src/) you will find the [App component](./src/App.js) which contains the most of the app except for the actual comparison cards which are rendered by the [Table component](./src/components/Table.js)

In the [assets folder](./src/assets/) we have all the logos of the food chains, so if you want to add a new restaurant you would have to first add the logo there and then import it into the [Context component](./src/components/Context.js). This folder can later be uploaded into backend storage if you so want.
