# website-builder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
The project needs to query the backend database.
For convenience, `json-server` is added as a dev dependency.

Start the backend server and listen on 0.0.0.0:8300:
```
npm run backend
```

Start the Vue development server:
```
npm run serve
```

Navigate to the `Demo` section.
The page should show data loaded from the DB.
You may change the file `db.json` under the project's root directory to modify the page's content.
Don't forget to reload the page in the browser to see the updated content.

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
