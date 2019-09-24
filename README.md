A basic example of using [`react-pages`](https://github.com/catamphetamine/react-pages).

## Development

```sh
npm install
npm start
```

Then go to [`http://localhost:1234`](http://localhost:1234).

## Production

See the `dist` directory for the output files. The output files can be uploaded to the cloud (e.g. Amazon S3) and hosted for a very low price as a "static" website by mapping any URL to `index.html`.

## Explanation

This sample project illustrates the use of [`react-pages`](https://github.com/catamphetamine/react-pages) library for building a React/Redux application.

[Parceljs](https://parceljs.org/) is used for bundling the app because it's much simpler for beginners than Webpack.

The "Basic" page shows the "conventional" (old-fashioned) way of writing React/Redux applications.

The "Advanced" page shows the more convenient way of writing React/Redux applications.

The counters on both pages operate identically the only difference being that the counter on the "Basic" page is implemented the "conventional" (old-fashioned) way and the counter on the "Advanced" page is implemented using the ["redux module"](https://github.com/catamphetamine/react-pages#redux-module) utility from `react-pages` library.

`react-pages` library packs a lot of utilities not showcased here for sake of simplicity, such as [`@preload()`ing pages](https://github.com/catamphetamine/react-pages#preloading-pages), [making `http` requests](https://github.com/catamphetamine/react-pages#http-utility), [setting `<meta/>` tags](https://github.com/catamphetamine/react-pages#setting-title-and--tags), [programmatic navigation](https://github.com/catamphetamine/react-pages#changing-current-location), and more...