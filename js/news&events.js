// On most pages of the website on the right side of the page the news & events  are shown. This is the 
//JQuery file that appends the news onto each of these pages

//var news is an array of news and events, that holds the following for each news story
//- title is the heading/title for the news or event
//- image is the link to the image to be shown for the news piece
//- text is a small snippet of text explaining the news or event.
var news = [{title:"Cake Sale", image:'"pictures/news/cakesaleindex.jpg"',
text:"Cake sale will take place Jan 12th December at 12 am, please come along and support"},
{title:"School Mass", image:'"pictures/news/handsprayingindex.jpg"',
text:"Our School Mass will take place on 10th October at 10am, all parents are welcome"},
{title:"Credit Union", image:'"pictures/CREDITUNION/creditunionindex.jpg"',
text:"The school credit union is back running every Wednesday morning at 9.20am"}];

//Once the page is loaded the following function is called
$(document).ready(function(){
    var newsDiv=$("<article> </article>"); //the news piece will be put inside an article

	for(var i = 0; i<news.length; i++){ //do this function from the start to the end of the news array
		var item = news[i]; //The current news story selected in the array is assigned to var item
		$("#newsContainer").append(newsDiv); // add newsDiv to the newsContainer on the web page
											//and append all the news information to the newsDiv.
		newsDiv.append('<a href="NewsAndEvents.html" '+item.link+'><h3>'+item.title+'</h3><img class = "img-responsive" src='+item.image+' alt="News & Events"><h4>'+ item.text +'</h4></a><hr>');
	}
});