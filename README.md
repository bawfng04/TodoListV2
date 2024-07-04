# Todo List Application

This is a Todo List application built using React.js. It allows users to manage their tasks, including adding, deleting, checking/unchecking, and rearranging tasks.

## Features

- Add new tasks
- Mark tasks as completed or unchecked
- Search for tasks
- Filter tasks by completion status (All, Checked, Unchecked)
- Move tasks up or down in the list
- Delete tasks
- Persist tasks and their completion status in the browser's local storage

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS

## How to Use the Application

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Open your web browser and navigate to `http://localhost:3000` to access the Todo List application.

## File Structure

The project is structured as follows:

```
todo-list/
├── src/
│   ├── core/
│   │   ├── TodoHandle.js
│   │   ├── TodoRender.js
│   │   ├── ...
│   │   └── ...
│   ├── Main.js
│   └── Main.css
├── package.json
└── README.md
```

- `TodoHandle.js`: Manages the state of the Todo List, including tasks, search, and filter.
- `TodoRender.js`: Renders the list of tasks based on the state.
- `Todo.css`: Styles the Todo List interface.
- `Tasks.css`: Styles the individual task units.
- `Main.js`: The main entry point of the application.
- `Main.css`: Styles the main container of the application.







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
