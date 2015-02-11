module.exports = function(grunt) {
	//project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
		autoprefixer: {
			options: {
				cascade: true,
				browsers: ['last 2 versions', '> 1%', 'Firefox >= 20']
			},
			single_file: {
				options: {
				},
				src: 'css/style.css',
				dest: 'css/style.css'	
			}
		},
		watch: {
			sass: {
			    files: ['css/style.scss'],
			    tasks: ['sass'],
			    options: {
			    	livereload: true
			    }
			},
			autoprefixer: {
				files: ['css/style.css'],
				tasks: ['autoprefixer']
			},
		}
	});
	//load the plugin
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//default tasks
	grunt.registerTask('default', ['sass','autoprefixer','watch']);
};