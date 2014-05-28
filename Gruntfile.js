module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'assets/app.css' : '_sass/app.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default',['sass']);
}
