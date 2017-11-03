# CODE INSTITUTE - STREAM 1 PROJECT

## ABOUT THIS PROJECT

#### I am currently a student at the [Code Institute](https://www.codeinstitute.net/) doing a Full Stack Diploma in Software Development. This is the first of three projects which I must complete in order to be awarded the globally recognised Diploma from Edinburgh Napier University. This project will cover the Front End Development section of the course.
#### The project is based on the primary school in my local area. On completion this will be the schools new website.

## THE NEEDS THIS PROJECT FULFILLS

#### As a 1st time parent of a school going child 3 years ago & not from the locality, I looked to the Internet to find out more about the local school. However, the information was out of date and minimal and after meeting other parents it turned out that many of them too had tried to do the same, so it was decided that I would develop a website to provide this service. 
#### This website is needed by both parents of pupils in the local school and by parents of children who have an interest in sending their child to this school.
- For the parents of pupils already in the school it provides news and information on upcoming events, documents such as school policies, guidelines, WSE report, contact information, the school calendar, parent’s association information, photos and videos from the year etc.
- For parents interested in sending their child to the school it provides general and background information about the school, about activities they take part in, policy documents, general & beginning junior infant’s guidelines, contact details, staff & board of management information and gives information about the many things the school is involved with during the year.

## FUNCTIONALITY

#### The projects home page has an easy to use navigation bar, photos and minimal information. From the navigation bar which remains affixed to the top of the screen you can navigate to any of the 25 other pages in the project. This easy to see & use navigation bar is on every page.

- About Us - This is a dropdown menu with links to pages that provide information to a person looking to find out about the school. On each of the pages under the About Us heading there is relevant information along with 2 sidebars one with links to all the other About Us pages and one with news and events information.

- Parents - This is another dropdown menu with links to extra information that a parent of a school going child might need and a parent’s association page. On each of the pages under the Parents heading there is relevant information along with 2 sidebars one with links to all the other Parent pages and one with news and events information.

- News & Events - this is a page which provides news and upcoming events in relation to the school.

- Calendar - provides the most current calendar for future school holidays

- Contact Us - provides contact details, a google map location, and a contact us form.

## TECHNOLOGIES USED

#### Sublime text 3 - The editor I used to write my html, CSS, JavaScript, jQuery and README files
#### Bootstrap - A framework for developing responsive, mobile 1st websites
#### Google APIs - for the font-family atma and google maps for the school location map.
#### Canva - to create the Motto picture on the index.html page
#### Languages & Libraries used - HTML, CSS, JavaScript & jQuery.
#### YouTube - to upload the video on the ActiveSchools.html page.
#### TinyPNG - to compress photos.
#### JS Hint - to validate the JavaScript files
#### W3C - to validate the HTML and CSS files

## HOW THE PROJECT WAS TESTED

#### I did cross browser testing using 
- Chrome 
- Internet Explorer
- Microsoft Edge
- Firefox. 

#### I tested each page visually to make sure
- everything loaded properly
- each link opened correctly.
- The page was responsive to window minimising and maximising.

#### I tested the picture galleries to make sure that:
- when I clicked on a picture, that that exact picture opened up in the modal.
- when the next button on the modal was clicked that the next picture in gallery was shown in the modal
- when the gallery came to the end of pictures on the page and the next button was clicked that the picture shown was re-routed back the first picture in the gallery.
- when the previous button on the modal was clicked that the previous picture in gallery was shown in the modal
- when the gallery came to the first picture on the page and the previous button was clicked that the picture shown was re-routed to the last picture in the gallery.

#### In the developer tools I tested that the website was responsive in mobile mode.

#### I tested the form to make sure that the form was not passed unless:
- The required fields were filled in
- The correct format for email was used
- If a phone number was supplied that it only excepted numbers in this field.

#### I ran all my files through a validation test using
- [W3C](https://validator.w3.org/) for HTML.
- [W3C](https://jigsaw.w3.org/css-validator/) for CSS.
- [JS Hint](http://jshint.com/) for JavaScript.

## Some problems that arose and how I resolved them
#### I had a video on the ActiveSchools.html page embedded. When I tried to push this video to GitHub it caused me a lot of problems, it was taking 10 minutes trying to push, followed by an error to say the video was too large and the max GitHub would receive was 100KB, it advised Git LFS, so I followed the instructions for this, it let me push the video to GitHub once but after that with every push I was trying to make, it was taking 10minutes followed by errors in relation to the video. I finally resolved this by uploading the video to YouTube and embedding a link to the YouTube video instead.

#### I originally had all my photos on the Gallery.html page. However, when I clicked on this page, it was taking a long time to load each picture, too long for anyone to want to wait to see them. I resolved this by creating different pages for different events and just showing a few pictures on each page. I also resized every picture and compressed every picture using TingPNG.com this reduced the size of the pictures by up to 74%, many pictures were over 5MB and after reducing the size and compressing I was able to reduce the size to a couple of hundred KB's. This in turn made the downloading much faster.

#### All my links were working perfectly during cross border testing but when I uploaded to GitHub pages, the links were not working. I found out that GitHub pages was case sensitive so I resolved this by going through my code and making sure every link was spelt with proper cases.

## WORK BASED OFF OTHER CODE
#### I found help for the bootstrap carousel on index.html from [w3schools](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
- I kept the general layout for the carousel and inputted my own pictures. I also used the same next and previous button design. I decided not to have captions on my pictures so I eliminated captions. I changed the default timing interval to 7.5seconds. I changed height, width and margin bottom values and I changed the image to object-fit: cover.

## THE FUTURE
#### I hope to develop on this project in the future when I have completed Stream 2 & Stream 3 it is my aim to:
- have the Contact Form on the ContactUs.html page working fully, sending an email to the school with all the information provided.
- have an administration section on the site where the teachers or an assigned person can edit pages, add pictures, add news and events etc. so that the site can be independent to the school and I would not have the sole responsibility of it.
- be able to share news & events on the schools Facebook group.
- have a blackboard/noticeboard page for each teacher, so they can put up notes, homework etc, saving the school sending home notes and homework sheets each week. 

## HOW THE PROJECT WAS DEPLOYED

#### I created a repository in GitHub and pushed my project to this repository. I Then deployed the repository on GitHub pages and a demo can viewed [here]( https://sarahbarron.github.io/Stream-1-Project/).
