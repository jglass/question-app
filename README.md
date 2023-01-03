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

### TODO
"Record Store"
- Remove Deezer as we go
- Add to API functionality:
- ~~Step 1: User picks one genre from a pre-downloaded list of genres (like we do now)~~
- ~~Step 2: Get random but high popularity artists based on predefined artist and track seeds for that genre~~
- ~~Step 3: Show artists, have user pick one~~
- ~~Step 3a: Add preview player (Spotify embed)~~
- ~~Fix bug with danceability not getting set~~
- ~~experiment with max_ and min_ danceability~~
- ~~Render components based on step (genre, buzzfeed, recommendation) (buzzfeed is multiple steps)~~
- ~~Add valence to spotify query~~
- ~~Remove images from results~~
- Debug valence not adding track to URL (in network tab) (don't use useState hook for final step)
- Finish adding different seeds based on question answers
- Add popularity question
- Add more questions that don't necessarily correspond 1-1 ("how hippy?")
- Style Silly questions
- Don't use loudness (yet)
- Add GIFs to silly questions
- Why is fetch running token request twice? (everything running twice)
- Step 3b: New styles for player
- Step 4: Add Step 2.5 where user answers Buzzfeed style questions using new component
- Can we consolidate players into one?
- Brackets?
- Step Final: Recommendation (Browse) -> Playlist
- Move API calls to async/await
- Don't refetch API token  from spotify if not expired
- Step X: Who sang the song?
- URL should change when user clicks (and should go to state when user goes to URL)
- Convert credentials for to Virtual Dom Element
- Ask user if they want famous or obscure recommendations
- Build Player?
- Finish testing spotify flow for getting data
- Add more data or get from API
- Finish Styling
- Identify pic of artist?
- A/B test (eg image only vs text)
- Eclectic artist quiz (id song based on artist)
- Rotating Holiday Music for genre
- Gather user data? Like age?

Music app to start recommendations?
https://rapidapi.com/deezerdevs/api/deezer-1/
