# NGRxJS in Angular: Creating a Weather App

Following are the steps to run the weather app.

1. run npm install at project root folder level
2. run npm run start to run the project.
3. Weather app will be running at localhost:4200 if everything went well.

Technology stack used in this app.
1. Angular 12 version
2. Angular Material 12 version
3. NgRx ( actions, effects, reducers, dispatch ) for state management
4. SCSS for styling
5. RXJS for async actions

Following is the approach used in this app.
1. We are using https://api.openweathermap.org/data/2.5/weather to get weather report for city wise.
2. We have created 2 forms for filtering Country and City accordingly.
3. For simplicity purpose all cities are statically provided.
4. when we select city from dropdown then it triggers dispatch action to fetch weather report.
5. After Fetch_weather dispatch action, weather API will be called to get report by using NgRx effects.
6. after getting Successfull response from Weather API, Fetch_Weather_Success action will be called and reducers will be executed accordingly .
7. OR if error repose then error reducer will be called.
8. some details have been taken from Weather API response data to show on UI.

