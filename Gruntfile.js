/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: ' * <%= pkg.title %>\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * :copyright: (c) 2007-<%= grunt.template.today("yyyy") %> by the <%= pkg.author %>\n' +
            ' * :license: <%= pkg.license %>\n' +
            ' */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '/**\n<%= banner %>',
        compress: {},
      },
      dist: {
        expand: true,
        cwd: 'inyoka_theme_default/static/js/',
        src: [
          '*.js',
          '!*.min.js',
          'bootstrap.js'
        ],
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
        src: 'Gruntfile.js'
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      style: {
        files: [
          'inyoka_theme_default/static/style/**/*.less'
        ],
        tasks: ['less'],
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
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'less', 'uglify']);

};
