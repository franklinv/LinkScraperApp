var request = require('request');
var cheerio = require('cheerio');

var baseurl=process.argv[2];
// validation to check if the user entered a proper URL
// in the second argument i.e args[2]
if (!IsValidUrl(baseurl))
	{
		console.log("Please enter a valid URL.");
		return;
	}


var linkCount=parseInt(process.argv[3]);
// validation to check if the user entered a number greater than 0
// in the third argument i.e args[3]
if (!(linkCount>0))
{
	console.log("Please enter a valid number greater than zero");
	return;
}


var linkindex=0;
getLinks(baseurl);


//main function which recursively loads the html of each page 
//and subpage url and retrieves the links
function getLinks(url)
{
	
request(url, function(err, resp, body){
  // the below check is to check if body is emoty
  if (body)  
  {
  $ = cheerio.load(body);
  
  links = $("a"); // get all hyperlinks
  $(links).each(function(i, link){
	   //if the number of links displayed is equal to the
	   // number of links to be displayed then exit
	   if (linkindex==linkCount)
	   {
		   return;
	   }
	 if ($(link).text().length>0)
	 {
			if ($(link).attr('href').indexOf("://")>=0)
			{
				console.log($(link).text() + '---->' + $(link).attr('href'));
			}
			else
			{
				console.log($(link).text() + '---->'+ baseurl + $(link).attr('href'));
			}
	  
	   linkindex++; 
	   getLinks(baseurl + $(link).attr('href'));
     }
  });
  }
});

}

//function which validates whether the
// Url is valid
function IsValidUrl(strUrl) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(strUrl);
}




