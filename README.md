# STREAM 1 PROJECT

## WHAT THIS PROJECT DOES

### My Stream 1 project is a frontend website I developed for the primary school in my local area. It provides information about this local school.

## THE NEEDS THIS PROJECT FULFILLS

### As a 1st time parent of a school going child 3 years ago & not from the locality, I looked to the Internet to find out more about the local school. However the information was out of date and minimal and after meeting other parents it turned out that many of them too had tried to do the same, so it was decided that I would develop a website to provide this service. 
### This website is needed by both parents of pupils in the local school and by parents of children who have an interest in sending their child to this school.
- For the parents of pupils already in the school it provides news and information on upcoming events, documents such as school policies, guidlines, WSE report, contact information, the school calander, parents association information, photos and videos from the year etc.
- For parents interested in sending their child to the school it provides general and background information about the school, about activities they take part in, policy documents, general & beginning junior infants guidelines, contact details, staff & board of management information and gives information about the many things the school is involved with during the year.

## FUNCTIONALITY

### The projects home page has an easy to use navigation bar, photos and minimal information. From the navigation bar which remains affixed to the top of the screen you can navigate to any of the 18 other pages in the project. This navigation bar is on every page.

- About Us - This is a dropdown menu with links to pages that provide information to a person looking to find out about the school. On each of the pages under the About Us heading there is relevant information along with 2 sidebars 1 with links to all the other About Us pages and 1 with news and events information.

- Parents - This is another dropdown menu with links to extra information that a parent of a school going child might need and a parents association page. On each of the pages under the Parents heading there is relevant information along with 2 sidebars 1 with links to all the other Parent pages and 1 with news and events information.

- News & Events - this is a page which provides news and upcoming events in relation to the school.

- Calander - provides the most current calander for future school holidays

- Contact Us - provides contact details, a google map location, and a contact us form.

## TECHNOLOGIES USED

### Sublime text 3 - The editor I used to write my html, css, JavaScript, JQuery and README files
### Bootstrap - A framework for developing responsive, mobile 1st websites
### Jasmine - A framework used to test javaScript
### Google APIs - for the font-family atma and google maps for the school location map.
### Canva - to create the Motto picture on the index.html page
### Languages & Libraries used - HTML, CSS, JavaScript & Jquery.

## HOW THE PROJECT WAS TESTED

### I used Jasmine to test the javaScript
- This tested the gallery.js file to make sure that when the gallery came to the end and next was hit it would restart at the 1st picture and vice versa when the project arrived at the beginning and previous is pressed it would go to the last picture. 
- It also tested that when a picture was clicked that the correct picture was selected. 
- I also tested this in browser visually to make sure the gallery slideshow opened the correct photo when clicked on an when next and previous was clicked that the correct photo was pointed to.

### I did cross browser testing using 
- Chrome 
- Internet Explorer
- Microsoft Edge
- Firefox.

### I tested each page visually to make sure
- everything loaded properly
- each link opened correctly.
- The page was responsive to window minimising and maximising.

### In the developer tools i tested that the website was reponsive in mobile mode.

### I tested the form to make sure that the form was not passed unless:
- The required fields were filled in
- The correct format for email was used
- If a phone number was supplied that it only excepted numbers in this field.

## Work based off other code
### I found help for the bootstrap carousel on index.html from [w3schools](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
- I kept the general layout for the carousel and inputted my own pictures. I also used the same next and previous button design. I decided not to have captions on my pictures so i eliminated captions. I changed the default timing interval to 7.5seconds. I changed height, width and margin bottom values and i changed the image to object-fit: cover.
### I found help for the bootstrap gallery modal slideshow on gallery.html from [w3schools](https://www.w3schools.com/howto/howto_js_lightbox.asp)
- I kept the general layout of the code. I put each image into a thumbnail. I changed the onclick to call one function. 
- The opening, closeing, next and previous funtionality of the modal remained the same. I removed the numbers on each slide.
- I minimised the javaScript by taking out the mini slideshow underneath the current picture, and the picture captions.

## HOW THE PROJECT WAS DEPLOYED

### I created a repository in GitHub and pushed my project to this repository. I Then depolyed the repository on GitHub pages and a demo can viewed [here](https://sarahbarron.github.io/Stream1Project/index.html).
