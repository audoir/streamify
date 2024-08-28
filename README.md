## Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To see the deployed application, go to [https://main.d1xxgqedw9nzyo.amplifyapp.com/]

## Development Notes

- Design decisions

Design systems typically have support for pre-fabricated data visualization components. I've chosen to use Material UI (MUI) because I think it looks great compared with other design systems. The data visualization for the line chart, pie chart, bar chart, and data table already come pre-packaged with the user interaction features required for this assignment.

I've chosen to use NextJS as my framework to build this app, even if the app is an SPA. NextJS allows me to build the back end in the same IDE, and also has support for MPAs, so it's very flexible for future design iterations. The web app is deployed using AWS Amplify Hosting. This works well with NextJS, since back end code is automatically deployed as serverless compute processes. 

The front end is created in conjunction with the Google Chrome inspector tool. This allows me to make sure the front end is responsive and looks good on all form factors, like a mobile device.

- Design process

First, I initialized the NextJS project with MUI. Then I added the navigation app bar and drawer.

After initializing the project, I worked on the back end part of the project. First, I defined the data schema in model.ts. After defining the schema, I created a simple back end API route that returns random data. 

Then on the frontend, I made an API call on the page load. The data is stored using Zustand state management, so that the states can be used from any component without prop drilling, and to maintain the states past the lifetime of any component or page.

The data is then accessed with the various components that make up the front end, such as key metrics, charts, and data table.

- Optional features

I added a refresh button to the top right of the navigation. This makes an API request that fetches new data from the back end, and updates the states. The web app's components are then updated with this new data, without a full page re-render.

I added some simple tests with Jest and RTL. To test the re-render after API access, mocks are needed, which is beyond the scope of this assignment. To run the tests:

```bash
npm run test
```