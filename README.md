# Houses App

## Getting Started

These are rough guidelines on how to get this running locally.

### Prerequisites

You will need node and npm accessible in your cli. You can get those here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/). For this repo, I recommend node version **10**.

### Installing

Clone or download this respository and then within it, run:
```
npm i
```

Once things have finished installing, run the following command to get a mock API endpoint started that will give us our vendor/house information at `localhost:1337/houses`:
```
node api.js
```

Then, run the following to get webpack up and running with a local dev server:
```
npm run start
```

Then visit `localhost:8080` and you're good to go (normally, your browser should open up automatically to `localhost:8080`)! You can also run `npm run lint` and `npm run test` to run those tasks, respecively.


## Building production files

Running `npm run build` will create a `dist/` directory with an `index.html` and `main.js`. You should be able to open `main.js` and have everything working in your browser, but you will still need to provide the API endpoint for the houses at `localhost:1337/houses`.

## Why not Redux?

Redux is great, but it introduces a lot of overhead and complexity. In this particular case, I decided not to use it due to the app being so small. The application state is still held at the highest level (`<HousesApp />`).

## What does the state of the application look like?

Since this application uses hooks, there isn't an easy way to look at the application state at a glance. If it were a more traditional React Component, here's what the state schema would look like:

```
{
	hasError: boolean,
	vendors: {
		[vendorId]: {
			logoThumb: string,
			displayName: string,
			houses: {
				[houseId]: {
					exteriorImage: string,
					name: string,
					price: number,
					editedPrice: number|null,
					size: number
				}
			}
		}
	},
	sortMode: string (''|'id'|'name'|'price'|'size'),
	ascendingOrder: boolean
}
```

### Why not store vendors/houses as arrays?

True, it would make rendering houses less cumbersome if houses were stored as an array. However, I went with this option because it makes it super easy to access the house for price editing and canceling price editing; see `handleHousePriceChange` and `cancelEditPrice` in [HousesApp.jsx](https://github.com/RussHR/houses/blob/master/src/HousesApp.jsx). This way, we don't have to iterate through a houses array to find the correct one with the matching id.

## Are React Hooks the future?

Possibly, though this is the first time I've used them to build a project. I like that they can make files shorter, but I don't necessarily think the code becomes more readable. It's harder to keep track of what exactly the state is, and support for hooks with other tools, like React Developer Tools, is still lacking.

## Things I would do with more time:

* Better test coverage, especially integration testing. Right now, it only covers basic things just as a sanity check.
* Other features, such as:
  * Clicking the `<thead>` items to sort the table
  * Load images lazily
  * Show when an image is loading, possibly through skeleton placeholders
  * Allow multiple images to be shown for a house if available, possibly with a lightbox or other UI element
  * take advantage of `srcset` and the different image sizes provided for a house
* Explore design more. The responsiveness is adequate, but it would be nice to have a more elegant solution.
* More thorough testing on different browsers. 👀👀👀
* Sleep! Exercise! Eat well.


## Acknowledgments

* This gist for providing an excellent README.md template: [https://gist.github.com/PurpleBooth/109311bb0361f32d87a2](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* This site for the initial loading animation: [https://projects.lukehaas.me/css-loaders/](https://projects.lukehaas.me/css-loaders/)
