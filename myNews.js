function getNews(){
	news = window.open("http://www.huffingtonpost.com/", "width=500, height=400");
	newsTimer = setTimeout("news.close()", "20000");
}