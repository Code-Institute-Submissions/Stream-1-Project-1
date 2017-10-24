var picNum = 1; 

// opens the modal & call the slideshow
function openGallery(num) {
  document.getElementById('slideshowModal').style.display = "block";
  picNum=num;
  createSlideshow(picNum);
}

// closes the modal
function closeGallery() {
  document.getElementById('slideshowModal').style.display = "none";
}


// creates the slide show
function createSlideshow(n) {

  var i; //iterator

  // gets all pics that have a class slideshow
  var gallery = document.getElementsByClassName("slideshow");

  //if you are at the last picture set picNum back to the 1st picture
  if (n > gallery.length) 
    {
      picNum = 1
    }

  //if you are at picture 1 set picNum to the last picture 
  if (n < 1) 
    {
      picNum = gallery.length;
    }

  //iterate through the gallery & hide the pictures but keep them in the normal flow
  for (i = 0; i < gallery.length; i++)
    {
      gallery[i].style.display = "none";
    }

  //displays the current picture as a block element
  gallery[picNum-1].style.display = "block";
}


//when the previous or next buttons are clicked
//picNum is changed by + or -1 and passed back to the createSlideshow function
//i.e showing the next or prev picture
function plusSlides(n) 
{
  createSlideshow(picNum += n); 
}
