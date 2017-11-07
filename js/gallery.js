//JQUERY TO OPEN A SLIDESHOW MODAL OF THE PICTURES IN THE SCHOOL GALLERY

//WHEN A PICTURE IS CLICKED ON IT IS SHOWN IN A MODAL
$('img').click(function(){
    $thisPic = $(this); //the image clicked on is assigned to $thisPic
    $('#contentPic').attr('src', $thisPic.attr('src')); //the Modal Content img tag in the html file is   
                                                        //assigned the src attribute from the clicked image
    $('#slideshowModal').modal('show');//make the slideshowModal visable
});

// WHEN THE PREVIOUS ICON IS CLICKED THE PREVIOUS PICTURE IN THE GALLERY IS SHOWN
$('.glyphicon-chevron-left').click(function() {
    if( $thisPic.is( ':first-child' ) ){ //if the picture is the first picture in the gallery
      $thisPic = $("#pageGallery>img:last-child"); //go to the last picture in the gallery
    }
    else{
      $thisPic = $thisPic.prev(); //otherwise go to the previous picture in the gallery
    }   
    $('#contentPic').attr('src', $thisPic.attr('src')); //the Modal Content img tag in the html file is   
                                                        //assigned the src attribute from the clicked image
    $('#slideshowModal').modal('show'); //make the slideshowModal visable
});

// WHEN THE NEXT ICON IS CLICKED THE NEXT PICTURE IN THE GALLERY IS SHOWN
$('.glyphicon-chevron-right').click(function() {
    if( $thisPic.is( ':last-child' ) ) { //if it is the last picture in the gallery
      $thisPic = $("#pageGallery>img:first-child"); // set the slideshow back to the 1st picture
    }
    else{
      $thisPic = $thisPic.next(); // otherwise show the next picture in the gallery
    }
    $('#contentPic').attr('src', $thisPic.attr('src')); //the Modal Content img tag in the html file is   
                                                        //assigned the src attribute from the clicked image
    $('#slideshowModal').modal('show');  //make the slideshowModal visable
});

// WHEN THE X ICON IS ClICKED THE MODAL IS CLOSED
$('.closeGallery').click(function(){
    $('#slideshowModal').modal('hide');
});

// WHEN THE MOUSE IS MOVED OVER A PICTURE THE OPACITY & CURSOR ARE CHANGED TO 0.5 AND POINTER
$('.thumbnailPic').mouseover(function(){
    $('.thumbnailPic').css('cursor', 'pointer');
    $current = $(this);
    $current.addClass('opacity5');
});

// WHEN THE MOUSE IS MOVED OFF A PICTURE THE OPACITY GOES BACK TO DEFAULT
$('.thumbnailPic').mouseleave(function(){
    $('.thumbnailPic').removeClass('opacity5');
});
