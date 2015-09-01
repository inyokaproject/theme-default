/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: ' * <%= pkg.title %>\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * :copyright: (c) 2013-<%= grunt.template.today("yyyy") %> by the <%= pkg.author %>\n' +
            ' * :license: <%= pkg.license %>\n' +
            ' */\n',
    // Task configuration.
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({remove: false}), // add vendor prefixes (not remove deprecated ones)
        ]
      },
      dist: {
        src: ['inyoka_theme_default/static/style/*.css']
      }
    },
    uglify: {
      options: {
        banner: '/**\n<%= banner %>',
        compress: {},
      },
      dist: {
        expand: true,
        cwd: 'inyoka_theme_default/static/js/',
        src: 'complete.js',
        dest: 'inyoka_theme_default/static/js/',
        ext: '.min.js',
        extDot: 'last',
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        options: {
          undef: false,
        },
        src: 'Gruntfile.js'
      }
    },
    watch: {
      options: {
        atBegin: true,
      },
      initBower: {
        files: '!*', // always false → only run once at begin
        tasks: 'bowercopy',
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      style: {
        files: 'inyoka_theme_default/static/style/**/*.less',
        tasks: ['less:develop', 'postcss:dist'],
      },
      js: {
        files: ['inyoka_theme_default/static/js/**/*.js',
                '!inyoka_theme_default/static/js/complete.js',
                '!*.min.js',],
        tasks: ['concat'],
      }
    },
    less: {
      production: {
        options: {
          banner: '/*!\n<%= banner %>',
          compress: true
        },
        files: [
          {
            expand: true,
            src: [
              'inyoka_theme_default/static/style/*.less'
            ],
            ext: '.css',
          }
        ]
      },
      develop: {
        options: {
          compress: false
        },
        files: [
          {
            expand: true,
            src: [
              'inyoka_theme_default/static/style/*.less'
            ],
            ext: '.css',
          }
        ]
      }
    },
    bowercopy: {
      fontawesome_fonts: {
        src: 'fontawesome/fonts',
        dest: 'inyoka_theme_default/static/fonts'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      complete: {
        src: ['./bower_components/jquery/dist/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './inyoka_theme_default/static/js/smoothscrolling.js',
              './inyoka_theme_default/static/js/base.js',],
        dest: 'inyoka_theme_default/static/js/complete.js',
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task.
  grunt.registerTask('default', ['bowercopy', 'jshint', 'less:production', 'postcss:dist', 'concat', 'uglify']);
};
