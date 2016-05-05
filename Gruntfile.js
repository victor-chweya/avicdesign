module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			options: {
				sourceMap:true
			},
			dist: {
				files: {
					'assets/stylesheets/style.css': 'assets/stylesheets/style.scss'
				}
			}
		},
		autoprefixer: {
			compile: {
				files: {
					'assets/stylesheets/style.css': 'assets/stylesheets/style.css'
				},
			},
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.php': './index.html'
				}
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/stylesheets',
		      src: ['*.css', '!*.min.css'],
		      dest: 'assets/stylesheets',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify: {
			javascript: {
				options: {
					mangle:true
				},
				files: {
					'assets/javascript/js.min.js': [
					'assets/javascript/fancybox/jquery.fancybox.js',
					'assets/javascript/app.js',
					'assets/javascript/inline.svg.js',
					'assets/javascript/scroll.js'
					]
				}
			}
		},
		imagemin: {
			dynamic: {                        
		      files: [{
		        expand: true,                    // Enable dynamic expansion 
		        cwd: 'assets/images',           // Src matches are relative to this path 
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
		        dest: 'assets/images'    // Destination path prefix 
		      }]
		    }
		},
		watch: {
			sass: {
				files: ['assets/stylesheets/*.scss', 'assets/stylesheets/sass/*.scss'],
				tasks: ['sass', 'autoprefixer', 'cssmin']
			}
		},
		browserSync: {
		  bsFiles: {
		      src : ['assets/stylesheets/*.css','./*']
		    },
		    options: {
		      notify: false,
		      watchTask: true,
		      // server: {
		      //   baseDir: "./" used when not running on a server
		      // }
		      proxy:"localhost/avic",
		      
		    }
		}

	})

	//load grunt plugins.
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-newer');
	//register grunt tasks
	grunt.registerTask('default', ['sass', 'autoprefixer', 'htmlmin', 'cssmin', 'uglify', 'imagemin']);
	grunt.registerTask('start', ['browserSync', 'watch']);

};