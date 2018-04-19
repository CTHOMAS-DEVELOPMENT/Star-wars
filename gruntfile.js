module.exports = function (grunt) {
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
    uglify: {
		build: {
                        src: ['*.js','javascript/*.js', 'javascript/controllers/*.js', 'javascript/directives/*.js', 'javascript/filters/*.js', 'javascript/services/*.js'],
                        dest: 'dist/bulk.min.js'
        }
		
	},
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
    watch: {
      files: ['<%= jshint.files %>','javascript/css/search.scss'],
      tasks: ['jshint','sass','uglify']
    }
});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch', 'uglify','jshint']);
};