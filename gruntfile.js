module.exports = function (grunt) {
	require("load-grunt-tasks")(grunt);
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {                            // Target
			options: {                       // Target options
			style: 'expanded'
			},
			files: {                         // Dictionary of files
			'css/style.css': 'css/style.scss'
			}	
		}
	},
	concat: {
		options: {
			// define a string to put between each file in the concatenated output
			separator: ';'
		},
		dist: {
			// the files to concatenate
			src: ['*.js','javascript/*.js', 'javascript/controllers/*.js', 'javascript/directives/*.js', 'javascript/filters/*.js', 'javascript/services/*.js'],
			// the location of the resulting JS file
			dest: 'dist/<%= pkg.name %>.js'
		}
	},
    // define source files and their destinations
	/**/
    uglify: {
		build: {
                        src: ['*.js','javascript/*.js', 'javascript/controllers/*.js', 'javascript/directives/*.js', 'javascript/filters/*.js', 'javascript/services/*.js'],
                        dest: 'dist/bulk.min.js'
        }
		
	},
	/**/
	jshint: {
		// define the files to lintfiles: ['gruntfile.js', 'javascript/**/*.js', 'test/**/*.js'],
		files: ['*.js', 'javascript/*.js', 'javascript/controllers/*.js', 'javascript/directives/*.js', 'javascript/filters/*.js', 'javascript/services/*.js'],
		// configure JSHint (documented at http://www.jshint.com/docs/)
		options: {
			// more options here if you want to override JSHint defaults
			globals: {
			jQuery: true,
			console: true,
			module: true,
			asi: true
			}
		}
		
	},
	/**
	"babel": {
		options: {
			sourceMap: true
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js"
      }
    }
	},
	**/
    watch: {
      files: ['<%= jshint.files %>','css/style.css'],
      //tasks: ['jshint','sass']
      //tasks: ['babel','jshint','sass','uglify']
      tasks: ['jshint','sass','uglify']
    }
});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default', ['watch','babel','jshint', 'uglify']);
	grunt.registerTask('default', ['watch','jshint', 'uglify']);
	//grunt.registerTask('default', ['watch', 'jshint']);
};