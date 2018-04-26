describe('Star Wars application tests', function () {
	var $scope, $controller, $httpBackend, ssDataAccess;
	var person_1= { "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "https://swapi.co/api/planets/1/", "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/" ], "species": [ "https://swapi.co/api/species/1/" ], "vehicles": [ "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/" ], "starships": [ "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "url": "https://swapi.co/api/people/1/", "$$hashKey": "object:85", "selected": true, "number": "77" }; 
	var person_2= { "name": "Chewbacca", "height": "228", "mass": "112", "hair_color": "brown", "skin_color": "unknown", "eye_color": "blue", "birth_year": "200BBY", "gender": "male", "homeworld": "https://swapi.co/api/planets/14/", "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/" ], "species": [ "https://swapi.co/api/species/3/" ], "vehicles": [ "https://swapi.co/api/vehicles/19/" ], "starships": [ "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/22/" ], "created": "2014-12-10T16:42:45.066000Z", "edited": "2014-12-20T21:17:50.332000Z", "url": "https://swapi.co/api/people/13/", "$$hashKey": "object:107", "selected": true, "number": "112" };
	var starship_1={ "name": "Executor", "model": "Executor-class star dreadnought", "manufacturer": "Kuat Drive Yards, Fondor Shipyards", "cost_in_credits": "1143350000", "length": "19000", "max_atmosphering_speed": "n/a", "crew": "279144", "passengers": "38000", "cargo_capacity": "250000000", "consumables": "6 years", "hyperdrive_rating": "2.0", "MGLT": "40", "starship_class": "Star dreadnought", "pilots": [], "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/" ], "created": "2014-12-15T12:31:42.547000Z", "edited": "2017-04-19T10:56:06.685592Z", "url": "https://swapi.co/api/starships/15/", "$$hashKey": "object:125", "selected": true, "number": "279144" };
	var starship_2={ "name": "Trade Federation cruiser", "model": "Providence-class carrier/destroyer", "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.", "cost_in_credits": "125000000", "length": "1088", "max_atmosphering_speed": "1050", "crew": "600", "passengers": "48247", "cargo_capacity": "50000000", "consumables": "4 years", "hyperdrive_rating": "1.5", "MGLT": "unknown", "starship_class": "capital ship", "pilots": [ "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/" ], "films": [ "https://swapi.co/api/films/6/" ], "created": "2014-12-20T19:40:21.902000Z", "edited": "2014-12-22T17:35:45.195165Z", "url": "https://swapi.co/api/starships/59/", "$$hashKey": "object:167", "selected": false, "number": "600" };
	var shipCollection=[];
	var peopleCollection=[];
	var starship_page={"count":37,"next":"https://swapi.co/api/starships/?page=2","previous":null,"results":[{"name":"Executor","model":"Executor-class star dreadnought","manufacturer":"Kuat Drive Yards, Fondor Shipyards","cost_in_credits":"1143350000","length":"19000","max_atmosphering_speed":"n/a","crew":"279144","passengers":"38000","cargo_capacity":"250000000","consumables":"6 years","hyperdrive_rating":"2.0","MGLT":"40","starship_class":"Star dreadnought","pilots":[],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/3/"],"created":"2014-12-15T12:31:42.547000Z","edited":"2017-04-19T10:56:06.685592Z","url":"https://swapi.co/api/starships/15/"},{"name":"Sentinel-class landing craft","model":"Sentinel-class landing craft","manufacturer":"Sienar Fleet Systems, Cyngus Spaceworks","cost_in_credits":"240000","length":"38","max_atmosphering_speed":"1000","crew":"5","passengers":"75","cargo_capacity":"180000","consumables":"1 month","hyperdrive_rating":"1.0","MGLT":"70","starship_class":"landing craft","pilots":[],"films":["https://swapi.co/api/films/1/"],"created":"2014-12-10T15:48:00.586000Z","edited":"2014-12-22T17:35:44.431407Z","url":"https://swapi.co/api/starships/5/"},{"name":"Death Star","model":"DS-1 Orbital Battle Station","manufacturer":"Imperial Department of Military Research, Sienar Fleet Systems","cost_in_credits":"1000000000000","length":"120000","max_atmosphering_speed":"n/a","crew":"342953","passengers":"843342","cargo_capacity":"1000000000000","consumables":"3 years","hyperdrive_rating":"4.0","MGLT":"10","starship_class":"Deep Space Mobile Battlestation","pilots":[],"films":["https://swapi.co/api/films/1/"],"created":"2014-12-10T16:36:50.509000Z","edited":"2014-12-22T17:35:44.452589Z","url":"https://swapi.co/api/starships/9/"},{"name":"Millennium Falcon","model":"YT-1300 light freighter","manufacturer":"Corellian Engineering Corporation","cost_in_credits":"100000","length":"34.37","max_atmosphering_speed":"1050","crew":"4","passengers":"6","cargo_capacity":"100000","consumables":"2 months","hyperdrive_rating":"0.5","MGLT":"75","starship_class":"Light freighter","pilots":["https://swapi.co/api/people/13/","https://swapi.co/api/people/14/","https://swapi.co/api/people/25/","https://swapi.co/api/people/31/"],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/7/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"created":"2014-12-10T16:59:45.094000Z","edited":"2014-12-22T17:35:44.464156Z","url":"https://swapi.co/api/starships/10/"},{"name":"Y-wing","model":"BTL Y-wing","manufacturer":"Koensayr Manufacturing","cost_in_credits":"134999","length":"14","max_atmosphering_speed":"1000km","crew":"2","passengers":"0","cargo_capacity":"110","consumables":"1 week","hyperdrive_rating":"1.0","MGLT":"80","starship_class":"assault starfighter","pilots":[],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"created":"2014-12-12T11:00:39.817000Z","edited":"2014-12-22T17:35:44.479706Z","url":"https://swapi.co/api/starships/11/"},{"name":"X-wing","model":"T-65 X-wing","manufacturer":"Incom Corporation","cost_in_credits":"149999","length":"12.5","max_atmosphering_speed":"1050","crew":"1","passengers":"0","cargo_capacity":"110","consumables":"1 week","hyperdrive_rating":"1.0","MGLT":"100","starship_class":"Starfighter","pilots":["https://swapi.co/api/people/1/","https://swapi.co/api/people/9/","https://swapi.co/api/people/18/","https://swapi.co/api/people/19/"],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"created":"2014-12-12T11:19:05.340000Z","edited":"2014-12-22T17:35:44.491233Z","url":"https://swapi.co/api/starships/12/"},{"name":"TIE Advanced x1","model":"Twin Ion Engine Advanced x1","manufacturer":"Sienar Fleet Systems","cost_in_credits":"unknown","length":"9.2","max_atmosphering_speed":"1200","crew":"1","passengers":"0","cargo_capacity":"150","consumables":"5 days","hyperdrive_rating":"1.0","MGLT":"105","starship_class":"Starfighter","pilots":["https://swapi.co/api/people/4/"],"films":["https://swapi.co/api/films/1/"],"created":"2014-12-12T11:21:32.991000Z","edited":"2014-12-22T17:35:44.549047Z","url":"https://swapi.co/api/starships/13/"},{"name":"Slave 1","model":"Firespray-31-class patrol and attack","manufacturer":"Kuat Systems Engineering","cost_in_credits":"unknown","length":"21.5","max_atmosphering_speed":"1000","crew":"1","passengers":"6","cargo_capacity":"70000","consumables":"1 month","hyperdrive_rating":"3.0","MGLT":"70","starship_class":"Patrol craft","pilots":["https://swapi.co/api/people/22/"],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/"],"created":"2014-12-15T13:00:56.332000Z","edited":"2014-12-22T17:35:44.716273Z","url":"https://swapi.co/api/starships/21/"},{"name":"Imperial shuttle","model":"Lambda-class T-4a shuttle","manufacturer":"Sienar Fleet Systems","cost_in_credits":"240000","length":"20","max_atmosphering_speed":"850","crew":"6","passengers":"20","cargo_capacity":"80000","consumables":"2 months","hyperdrive_rating":"1.0","MGLT":"50","starship_class":"Armed government transport","pilots":["https://swapi.co/api/people/1/","https://swapi.co/api/people/13/","https://swapi.co/api/people/14/"],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/3/"],"created":"2014-12-15T13:04:47.235000Z","edited":"2014-12-22T17:35:44.795405Z","url":"https://swapi.co/api/starships/22/"},{"name":"EF76 Nebulon-B escort frigate","model":"EF76 Nebulon-B escort frigate","manufacturer":"Kuat Drive Yards","cost_in_credits":"8500000","length":"300","max_atmosphering_speed":"800","crew":"854","passengers":"75","cargo_capacity":"6000000","consumables":"2 years","hyperdrive_rating":"2.0","MGLT":"40","starship_class":"Escort ship","pilots":[],"films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/3/"],"created":"2014-12-15T13:06:30.813000Z","edited":"2014-12-22T17:35:44.848329Z","url":"https://swapi.co/api/starships/23/"}]};
	var people_page={"count":87,"next":"https://swapi.co/api/people/?page=2","previous":null,"results":[{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],"starships":["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.co/api/people/1/"},{"name":"C-3PO","height":"167","mass":"75","hair_color":"n/a","skin_color":"gold","eye_color":"yellow","birth_year":"112BBY","gender":"n/a","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:10:51.357000Z","edited":"2014-12-20T21:17:50.309000Z","url":"https://swapi.co/api/people/2/"},{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"https://swapi.co/api/planets/8/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"https://swapi.co/api/people/3/"},{"name":"Darth Vader","height":"202","mass":"136","hair_color":"none","skin_color":"white","eye_color":"yellow","birth_year":"41.9BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":["https://swapi.co/api/starships/13/"],"created":"2014-12-10T15:18:20.704000Z","edited":"2014-12-20T21:17:50.313000Z","url":"https://swapi.co/api/people/4/"},{"name":"Leia Organa","height":"150","mass":"49","hair_color":"brown","skin_color":"light","eye_color":"brown","birth_year":"19BBY","gender":"female","homeworld":"https://swapi.co/api/planets/2/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/30/"],"starships":[],"created":"2014-12-10T15:20:09.791000Z","edited":"2014-12-20T21:17:50.315000Z","url":"https://swapi.co/api/people/5/"},{"name":"Owen Lars","height":"178","mass":"120","hair_color":"brown, grey","skin_color":"light","eye_color":"blue","birth_year":"52BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/5/","https://swapi.co/api/films/6/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:52:14.024000Z","edited":"2014-12-20T21:17:50.317000Z","url":"https://swapi.co/api/people/6/"},{"name":"Beru Whitesun lars","height":"165","mass":"75","hair_color":"brown","skin_color":"light","eye_color":"blue","birth_year":"47BBY","gender":"female","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/5/","https://swapi.co/api/films/6/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:53:41.121000Z","edited":"2014-12-20T21:17:50.319000Z","url":"https://swapi.co/api/people/7/"},{"name":"R5-D4","height":"97","mass":"32","hair_color":"n/a","skin_color":"white, red","eye_color":"red","birth_year":"unknown","gender":"n/a","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:57:50.959000Z","edited":"2014-12-20T21:17:50.321000Z","url":"https://swapi.co/api/people/8/"},{"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light","eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":["https://swapi.co/api/starships/12/"],"created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"https://swapi.co/api/people/9/"},{"name":"Obi-Wan Kenobi","height":"182","mass":"77","hair_color":"auburn, white","skin_color":"fair","eye_color":"blue-gray","birth_year":"57BBY","gender":"male","homeworld":"https://swapi.co/api/planets/20/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/38/"],"starships":["https://swapi.co/api/starships/48/","https://swapi.co/api/starships/59/","https://swapi.co/api/starships/64/","https://swapi.co/api/starships/65/","https://swapi.co/api/starships/74/"],"created":"2014-12-10T16:16:29.192000Z","edited":"2014-12-20T21:17:50.325000Z","url":"https://swapi.co/api/people/10/"}]};
	
	beforeEach(() => {
		module('search');
	});
  
	beforeEach( inject( function( _$rootScope_, _$controller_ ) {
        $scope = _$rootScope_.$new();
		angular.mock.inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		});
		ssDataAccess = { id: 4 };  // Variable initialized above.

        $controller = _$controller_( 'maincontroller', {
            $scope: $scope,
            injectedThing: ssDataAccess
        } );
		
		
   }));

      describe( 'initialization', function() {

        it( 'initializes status on scope', function() {
            expect( $scope.state ).toBe( 'starships' );
            expect( $scope.collection ).toEqual( [] );
            expect( $scope.winner ).toEqual( {} );
            expect( $scope.loser ).toEqual( {} );
            expect( $scope.winnerStr ).toEqual( '' );
            expect( $scope.result ).toBe( false );
            expect( $scope.showDetail ).toBe( false );
        } );
	  });
	  
	  describe( 'compare', function() {
		beforeEach(() => {
			shipCollection.push(starship_1);
			shipCollection.push(starship_2);
			peopleCollection.push(person_1);
			peopleCollection.push(person_2);
			
		});
		it( 'Test to compare starships', function() {
			$scope.compare(shipCollection,"starships");
			expect($scope.winner.number).toEqual( "279144" );
		});
		it( 'Test to compare people', function() {
			$scope.compare(peopleCollection,"people");
			expect($scope.winner.number).toEqual( "112" );
		});
	  });

	  describe( 'Toggle', function() {
		beforeEach(() => {
		$scope.state="starships";
		})		
	  		it( 'Test toggling between "starships" and "people"', function() {
				$scope.toggleTypes();
				expect($scope.state).toEqual( "people" );
				});

		});
		describe( 'Destructure starship data', function() {
			beforeEach(() => {
				$scope.starshipData=starship_page;
				destructureData("Test on Starship de-structuring")
			})
			it( 'Test array length of data', function() {
				expect($scope.ssdata.length).toBe( 10 );
			});
			it( 'Test count of starships', function() {
				expect($scope.count).toBe( 37 );
			});
			it( 'Test the previous URL', function() {
				expect($scope.previous).toBeNull();
			});
			it( 'Test the next URL', function() {
				expect($scope.next).toEqual( "https://swapi.co/api/starships/?page=2" );
			});			
			it( 'Test the message', function() {
				expect($scope.message).toEqual( "Test on Starship de-structuring" );
			});
		});
		
		describe( 'Destructure people data', function() {
			beforeEach(() => {
				$scope.starshipData=people_page;
				destructureData("Test on people de-structuring")
			})
			it( 'Test array length of data', function() {
				expect($scope.ssdata.length).toBe( 10 );
			});
			it( 'Test count of starships', function() {
				expect($scope.count).toBe( 87 );
			});
			it( 'Test the previous URL', function() {
				expect($scope.previous).toBeNull();
			});
			it( 'Test the next URL', function() {
				expect($scope.next).toEqual( "https://swapi.co/api/people/?page=2" );
			});			
			it( 'Test the message', function() {
				expect($scope.message).toEqual( "Test on people de-structuring" );
			});
		});
	

		
		
		

	});


