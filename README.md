## BBC iPlayer A-Z

This is a webpage built for this [BBC Challenge](https://www.gapjumpers.me/questions/bbc-digital/qs-286/?just_committed=True).
It was built using [AngularJS](https://angularjs.org/), in a [Node.js](https://nodejs.org/en/) environment and hosted with [Sinatra](https://github.com/sinatra/sinatra). Feature test were written with [Protractor](http://www.protractortest.org/#/) and unit tests with [Karma](https://karma-runner.github.io/0.13/index.html). Visit the finished page at https://iplayeraz.herokuapp.com/.

#### Challenge Brief


Our team has been asked to work with a new HTTP API that provides iPlayer with lists of programmes sorted alphabetically.


Your task is to use the API to generate an A-Z listing for the website. A simple web page that will list out all the content to be viewed on different devices.

Each of the listing pages should include:

- a list of programme titles and images
- the ability to paginate if the letter has more than 20 results
- navigation to other letters

You may implement your solution in PHP/ node.js or any appropriate (i.e. non-obscure) language. But please make sure your solution is working end-to-end and you include instructions for us to run and test your code. Please host your application on Heroku or similar and include a link.

We would like to see TDD being applied in this exercise.

#### How to Use

 To use locally:
 ```
$ git clone <this-repo> or unzip bbc_challenge folder
$ cd bbc_challenge
$ npm install              // install dependencies
$ npm start                // start server on port 8000
$ npm run protractor       // run protractor feature tests, server must also be running
$ npm test                 // run unit tests with karma
 ```

#### Note on testing

Because the list of programmes is continually updated, the feature test expectations, for e.g. title, synopses, need to be altered to check against existing program details. Unfortunately due to the time limit, I was unable to implement a better solution in time. Although I am working on one!
