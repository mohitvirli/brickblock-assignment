# Brickblock Assignment

The project is given as an assignment for the fronted developer recruitment process. More details can be found [here](https://github.com/brickblock-io/coding-challenge-frontend)

## Brief
The main deliverables of the project were to make an API call and visualize the response in such a way that it makes sense. This was supposed to be done using React and Redux. So, accordingly I used [create-react-app](https://github.com/facebook/create-react-app/) as the seed project and included Redux and used SCSS for styling the components.

## Get Started
You need [Node.js v4.0+](https://nodejs.org/en/) to run these commands. Prefer using `yarn` over `npm`. To get the server up and running, run the following.
```
    $ yarn
    $ yarn start
```

Or you can always use the good ol' (slower) `npm`. You can find the server running at [localhost:3000](http://localhost:3000)

To build the project for production, you will have to run `yarn build` and serve the `/build` folder.

## Dependencies
I have used a couple of external dependencies to make the project more efficient and modular.
 * [node-sass-chokidar](https://github.com/michaelwayman/node-sass-chokidar) - Transpiling SCSS to CSS at runtime.
 * [ImmutableJS](https://github.com/facebook/immutable-js) - For managing the store as it makes things clean and pure IMMUTABLE. Also used [redux-immutable](https://github.com/gajus/redux-immutable)
 * [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - A React library written over [Chart.js](http://www.chartjs.org/). I have used react-chartjs-2 instead of react-chartjs because of [this](https://github.com/reactjs/react-chartjs/issues/112#issuecomment-323213442). It obviously has a peer dependency (Chartjs)
 * [Cryptonator](https://api.cryptonator.com/api/ticker/) - An API which gives the realtime conversion rates. This was basically a future usecase although I implemented this in the existing plan but came to the conclusion that this won't be giving additional information. I have still pushed the conversion rates in the store for future use.


## Thoughts
The main focus of the project was to visualize the data in a proper way. For me, the challenge was not to have a good UI (Although I used the [Style guidelines](https://github.com/brickblock-io/coding-challenge-frontend/blob/master/brickblock-styleguide.sketch) and the fonts, not that pixel perfect but still), it was to have more information using less visuals and obviously not making it overwhelming.

The project code didn't take that much time, but I took a lot of time thinking how to implement the idea of having more with less. I wrote every possible graph that can be made out of the given data and filtered it out by integrating everything possible with less number of visuals. I thought of how a naive user would feel if he came to this website and consume the information easily.
