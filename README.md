Angular (1.6.x) This application was built using SWAPI (https://swapi.co/documentation) as the back end API.

(1)Select random people or starships and render their details to see who would win based on a common attribute.
(a)A person with greater mass wins.
(b)a starship with more crew wins.

(2)Once two selections are displayed the application allows you to compare the two types and a winner is discovered.

(3)There is an option to display the winner in complete detail.

(4)Play as many times as you like by updating the compare of either starships or people.

(5)The winning and losing attributes of either starships or people are shown after playing.

(6)This application has to fetch date from the remote planet. After which that page of data moves at warp factor 5.

*A css framework and a single page application building framework was used.

Install: 
	Go to the root directory after cloning from the master repository and type 'npm install'. (Ensure a reasonable version of Node is installed universally)

Work flow: 
	(1)Open a command window. Go to the root directory after cloning from the master repository and type 'grunt'. (Ensure a reasonable version of Grunt is installed universally)
	(2)Open a 2nd command window. Go to the root directory and type "npm run build". 
	(3)Change any file in the src directory and code in ES6. 
	(4)When your ready type "npm run build" again in the 2nd command window
	(5)As long as grunt is watching (As specified from (1)), the ES5 files are pushed into the javascript folder and this causes the grunt tasks to run
	(6)Make changes to the scss file to change the css file.

Run tests: 
	Go to the root directory after cloning from the master repository and type 'karma start'. 
