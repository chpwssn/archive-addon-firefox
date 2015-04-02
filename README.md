# archive-addon-firefox
Playing with an add-on that will allow a user to report the urls they visit to a central location for archiving.

This Firefox extension will send the URLs a user visits to a central location for archiving. As your page finishes 
loading, the add-on sends a notification to the central location (https://wasson.io/archive-addon/) adding the URL you 
visited to a database. 
Archivists can query the database and send the URL data to archive bots for preservation of the webpage. Also, 
querying the database for URLs of interest can help with future projects and saving dying websites. Users provide a 
valuable indication of what needs to be saved. 

## Privacy
The only information that is saved in the database is the time the URL reported to the central location and the URL. 
No information is actively recorded for user tracking. However, raw Apache access logs can yeild information about 
the visitors IP address and browser, similar to visiting any other website. We do not share information with third 
parties and the information collected is only used for archiving purposes.

## Use
There are two ways to use the package: as a user and an archivist.
### As a user
Users are very important, users tell the archivists what pages need to be saved. When you visit a page, this tool 
alerts archivists that the pages you visit should be archived. To get started:

1. Clone this git repository or download the archiveadd-on.xpi
2. Install the .xpi add-on file to Firefox (Open the XPI file in Firefox)
3. When you want to send URL data: click the add-on button
4. When you want to stop/pause sending URL data: click the add-on button again
5. Rinse and Repeat

### As an archivist
Currently the central server reports the URLs collected and the time they were collected, once per hour in an IRC 
channel. An interface is in the works.

## Wish List
* Allow users to create an ignore set
* Allow users to enable anchor tag reporting
* Archivist interface with sanitized data
* Handle direct file links
* Feed directly into archivebot

## Contributing
If you would like to contribute, read the [Mozilla SDK Tutorials] (https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials)
and modify the code, pull requests are welcome.

Vault icon made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).

