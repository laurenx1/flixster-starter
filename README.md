# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Flixster

Submitted by: Lauren Pryor

Estimated time spent:30 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE) -> tried doing, definitely need help deploying this

### Application Features

#### CORE FEATURES


- [ x] **Display Movies**
  - [x ] Users can view a list of current movies from The Movie Database API.
  - [x ] For each movie displayed, users can see its title, poster image, and votes.
  - [ x] Users can load more current movies by clicking a button at the bottom of the list (page should not be reloaded).
- [x ] **Search Functionality**
  - [x ] Users can search for movies and view the results in a grid.
  - [ x] Users can clear results and view previous current movies displayed.
- [x ] **Accessibility Features**
  - [x ] Website implements accessibility features (semantic HTML, color contrast, font sizing, alt text for images).
- [ x] **Responsive Design**
  - [x ] Website implements responsive web design.
- [ x] **Movie Details**
  - [x ] Users can view more details about a movie in a popup, such as runtime in minutes, backdrop poster, release date, genres, and/or an overview.
- [x ] **Sorting Options**
  - [ x] Users can click on a filter by drop down to sort product by type (alphabetic, release date, rating).
- [x ] **Layout**
  - [ x] Website displays header, banner, search, movie grid, about, contact, and footer section.

#### STRETCH FEATURES

- [ x] **Deployment**
  - [x ] Website is deployed via Render.
- [ x] **Embedded Movie Trailers**
  - [x ] Within the popup displaying a movie's details, users can play the movie trailer.
- [x ] **Watched Checkbox**
  - [ x] For each movie displayed, users can mark the movie as watched.
- [ x] **Favorite Button**
  - [x ] For each movie displayed, users can favorite the movie.
- [ ] **Sidebar**
  - [ ] Users can open a sidebar
  - [ ] The sidebar displays the user's favorited and watched movies

### Walkthrough Video

`ADD_EMBEDDED_CODE_HERE`
https://youtu.be/5P_zH-VkIlU 

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, I feel as though the API lectures truely helped me understand the calls I needed to make, especially useState and useEffect

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have added the site to render and done the sidebar. I also would have added more stylistic/ animation / css throughout the website. Although mine has a theme and some cool stuff, 
I feel like I didn't make everything with as much finesse as I wanted to 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I was able to add my own twist to the stretch features! Specficially, with the embedded video in the modal. In my code, the embedded video is the modal, and starts playing immediatly when
you click on the card to open the modal. All text was laid on top of this. I wanted to take features I saw from real websites, specifically Netflix in this way which has a similar thing 
happen when you hover over a card. 

I want to think ahead in project planning and code design, so that all my tasks are broken down into even smaller tasks before I start working on them. I had a hard time focusing this week and
having specificity in what I was doing. I think I could take from my peers in this way, who used websites they liked and followed along, s.t. they had an idea of their final vision BEFORE 
they started implementing their project. I did this with the modal, but not the entire project. 


### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

The CodePath instructor Thomas helped me a lot this week, and explained concepts in a way that made me understand them better. Additionally, helped me implemenet better debugging practices, 
so that I was capable of achieving more on my own. 

Additionally, shout out to Emmanuel, who sat with me and helped me debug my code for a SUPER long time on one of the most non-obvious and logically crazy bugs I have ever seen. 
