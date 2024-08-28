## Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or go to [https://main.d1xxgqedw9nzyo.amplifyapp.com/]

## Development Notes

- Design decisions

Design systems typically have support for pre-fabricated data visualization components. I'm familiar with using Material UI, so that is the design system used for this assignment. The data visualization for the line chart, pie chart, bar chart, and data table already come pre-packaged with the user interaction features required for this assignment.

Even though this assignment calls for a SPA, I've been using NextJS as the primary framework of choice to build MPA. So I used NextJS for this assignment. The web app is deployed using AWS Amplify Hosting. This works well with NextJS, since backend code is automatically deployed as serverless compute processes. 

- Design process

First, I initialized the NextJS project with MUI. Then I added the navigation app bar and drawer.

After initializing the project, I worked on the backend part of the project. First, I defined the data schema in lib/shared/model.ts. After defining the schema, I created a simple backend API route that returns random data. 
