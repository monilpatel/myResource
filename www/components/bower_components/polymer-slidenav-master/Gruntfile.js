module.exports = function(grunt) {

  grunt.initConfig({
    'connect': {
      demo: {
        options: {
          open: true,
          keepalive: true
        }
      }
    },
    'gh-pages': {
      options: {
        base : ""
      },
      src: [
        'bower_components/**/*',
        'demos/*',
        'src/*',
        'index.html'
      ]
    },
    'replace': {
      example: {
        src: ['src/*'],
        dest: 'dist/',
        replacements: [{
          from: 'bower_components',
          to: '..'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('build',  ['replace']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);

};
