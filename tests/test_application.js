describe('Star Wars application tests', function () {
	var $scope, $controller, ssDataAccess;
	var person_1= { "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "https://swapi.co/api/planets/1/", "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/" ], "species": [ "https://swapi.co/api/species/1/" ], "vehicles": [ "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/" ], "starships": [ "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "url": "https://swapi.co/api/people/1/", "$$hashKey": "object:85", "selected": true, "number": "77" }; 
	var person_2= { "name": "Chewbacca", "height": "228", "mass": "112", "hair_color": "brown", "skin_color": "unknown", "eye_color": "blue", "birth_year": "200BBY", "gender": "male", "homeworld": "https://swapi.co/api/planets/14/", "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/" ], "species": [ "https://swapi.co/api/species/3/" ], "vehicles": [ "https://swapi.co/api/vehicles/19/" ], "starships": [ "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/22/" ], "created": "2014-12-10T16:42:45.066000Z", "edited": "2014-12-20T21:17:50.332000Z", "url": "https://swapi.co/api/people/13/", "$$hashKey": "object:107", "selected": true, "number": "112" };
	var starship_1={ "name": "Executor", "model": "Executor-class star dreadnought", "manufacturer": "Kuat Drive Yards, Fondor Shipyards", "cost_in_credits": "1143350000", "length": "19000", "max_atmosphering_speed": "n/a", "crew": "279144", "passengers": "38000", "cargo_capacity": "250000000", "consumables": "6 years", "hyperdrive_rating": "2.0", "MGLT": "40", "starship_class": "Star dreadnought", "pilots": [], "films": [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/" ], "created": "2014-12-15T12:31:42.547000Z", "edited": "2017-04-19T10:56:06.685592Z", "url": "https://swapi.co/api/starships/15/", "$$hashKey": "object:125", "selected": true, "number": "279144" };
	var starship_2={ "name": "Trade Federation cruiser", "model": "Providence-class carrier/destroyer", "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.", "cost_in_credits": "125000000", "length": "1088", "max_atmosphering_speed": "1050", "crew": "600", "passengers": "48247", "cargo_capacity": "50000000", "consumables": "4 years", "hyperdrive_rating": "1.5", "MGLT": "unknown", "starship_class": "capital ship", "pilots": [ "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/" ], "films": [ "https://swapi.co/api/films/6/" ], "created": "2014-12-20T19:40:21.902000Z", "edited": "2014-12-22T17:35:45.195165Z", "url": "https://swapi.co/api/starships/59/", "$$hashKey": "object:167", "selected": false, "number": "600" };
	var shipCollection=[];
	var peopleCollection=[];
	beforeEach(() => {
		module('search');
	});
  
	beforeEach( inject( function( _$rootScope_, _$controller_ ) {
        $scope = _$rootScope_.$new();
		
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

});


