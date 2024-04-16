# Project 3 - What I've Accomplished and Learned

## What I've Accomplished

### Project Setup and Layout

- I began by setting up a new react project. I installed the necessary react-router-dom to allow for proper routing.

- I researched a good setup for css and running the React enviornment. I saw that there was a good amount of hype around Vite and TailwindCSS. I watched tutorials to help me install and setup both in my new React App. This was my starting point. Tailwind is especially new for me. I did my best to implement it. I'm sure it's not perfect, but I gave it my best attempt to learn and implement it.

### Static Pages and Simple Website Functionality

- To begin my web application I built out all the static content of my website. This included building a home page, about the company page, a privacy policy page, basic layout including a footer, header, top bar, and navigation bar.

### User Experience and Design

- I created a logo for this company and use it throughout the webiste. It is set as the favicon, and can be found in various places around the website.

- Using the colors from the logo I created a color pallete that I use throughout my website. For reusability I've configured this color pallete in my tailwind.config file to reference the various colors in my website.

### Reusability and Componentization

- Where possible I created custom components for various elements that I reused. I could have further created more components. I balanced what felt realistic with what I was resuing in multiple areas. Some of these components include a custom reference to a stylized company name, specific hyperlinks, and icon buttons.

### Data Generation, Storage, and Dynamic Content Rendering

- I was given real data from a family member for this project. This data is rendered and can be found in the past projects page. The data was given to me in paper tables. I used an online service to convert images of these papers to excel sheets and then used Chat GPT to convert the sheets into json. This was a fun side project in digitizing the real data I wanted in my website.

- To solve the data storage issue I researched and found JSON server a package that I installed into my web application. This solution to storing data simply stores json data in one db.json file. It acts as a database with a custom route for each "table". It supports HTTP requests to get and post data. I then configured my package.json file to start up the json server at port 3001 along with my react app.

- The Past Projects page has a table that displays all the past project data I converted and store in json server. Using the http://localhost:3001/past-projects path I was able to fetch all the data with a simple http get request. I then render all the data in the table.

- With the help of Chat GPT I set up so that the Headers of the table act as ascending/descending sorts when each header is clicked. There's a custom function that resorts the data for the table upon clicking any one of the headers.

- Using the json server, I have two more tables to store job applications and service requests. When either form is submitted I make a post request to the custom route for that table and add it to the data stored in my json database.

### Login, Admin, and Custom Context

- I added login functionality for any admin of the company to login and view the form submissions for job applications and service requests. There is a login form that sends a request to the accounts json server table to verify that the username and password input in the login information exists as an admin username/password. Using a custom context I set a global isLogged in to be true allowing access to the various pages at the admin route.

### Responsive Design

- I've ensure that all pages are responsive and look clean on both mobile, desktop, tablet, and all views.

- The topbar and navigation changes for small devices changing to a hamburger menu. This makes for a much simpler naviagation while on a small device.

- The table generated in the past projects uses css styling to change the table rows into row-cards. This presents the data in a more mobile friendly way. There's no more table that trails off the page and is more mobile intuitive.

- I made the assumption that the admin page is primarily going to be accessed from desktop devices. The navigation and top bar go to the hamburger mode when in mobile, but the tables and pages are not responsive based on this assumption.

### Animations/Transitions

- I decided to focus less on the transitions of my website and instead focused on the overal look and feel of the website along with building out business functionality. This means there are no page transitions. With that said I did implement the following smaller animations that I believe add to the overall website:

- Whenever the route changes, there is a soft scroll to top of the page. This combats the default page change, but staying at the arbitrary height of the previous page.

- The Social media bubbles in the footer animate to expand on hover. This makes them inviting to click and is a fun addition.

- If one of the pages displayed in the Nav bar are active, it is dynamically underlined. When the user hovers over the active (underlined) page in the nav bar, the underline animates bouncing up. This was a fun addition that I feel adds much to the nav bar. The other nav bar items (non active) animate a color and underline fade in on the hover.

## What I've Learned
