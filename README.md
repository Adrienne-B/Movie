# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<!---->

# Movie App
This was a personal project I wanted to do to practice on the react software

## Summary
This is a single=page API react app. I was able to display one of my favorite childhood movies.

### Software used:
Visual Studio Code and react.js

### What I learn:
I learned that Bootstrap makes web development more quick and efficient, especially if I am under time.
Also, I learn that I can extract certain sources such as images and/or videos from the actual site: inspect/dev tools, click on the link, and hit save.
Further more, I realized that you must put position: absolute, fixed, relative, etc, at the top of the list under the element in css> If you dont then moving 
an element will be a challenge to do.


#### Random Unexpected Challenges:
1. It would not display, even when I watched a Youtube video
2. Hard time displaying it on Github host

#### Solutions/solving the issue:
1. I realized that the app.css didnt match what was imported in app.js page when imported
2. I misspelled searchterm (for the search bar)
3. I didn't export movieCard
4. Had to put "predeploy" : "npm run build", AND "deploy" : "gh-pages -d build", in the script section of package.json
5. Had to put https NOT http for the api link
6. The top part of package.json, I had to put "homepage": "https://adrienne-b.github.io/Movie",


#### Weakness so far:
1.	Still a beginner a react


##### Credited: https://www.youtube.com/watch?v=b9eMGE7QtTk
