# LinkScraperApp
A Nodejs script that parses a given url and prints only the internal hyperlinks of a web page and subpages.
Uses request module to load the pages and cheerio module to load the html pages and traverse the links.

Steps to execute the Node.js program:

1.Copy index.js to a folder.

2.Install the modules chherio and request in the same path.

3.Execute the program at the command line as follows:
  "node index Url CountOfLnksToBeDisplayed"
  
  The Url is passed as the 2nd parameter as above.
  
  The amount of links to be gathered is passed as the 3rd parameter to the script.
  
4.Validation has been done so that the user enters a valid URL and a valid number greate than 0.

5.Appropriate error message is displayed if the User enter an invalid Url or number.

Comments have been added appropriately.

Test Data:
  node index https://www.rediff.com 25
