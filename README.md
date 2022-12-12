## BasketBall Labs

An application that takes basketball statistics from an API and displays them in a chart visualization format, built with the PERN stack using:

- React-Router
- Tailwind CSS
- Charts.js
- react-charts-2
- JWT
- Bcrypt

## Project Screen Shot(s)

### Home Page

![Basketball Labs Homepage](https://github.com/danielAwale/basketball-labs/blob/main/public/docs/mainpage.png)

### Stats Page

[ PRETEND OTHER SCREEN SHOT IS HERE ]

### Register Page

[ PRETEND SCREEN SHOT IS HERE ]

### Graphs Page

[ PRETEND SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

You will need to run both the front-end and back-end servers to host this app. Please visit [basketball-labs-api](https://github.com/danielAwale/basketball-labs-api) for the back-end and follow all the steps below for both servers.

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

#### Example:

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
