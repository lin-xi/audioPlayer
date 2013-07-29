module.exports = function(grunt) {
    // ����
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            js : {
                src: ['meaudio.js', 'meplayer.js'],
                dest: 'dest/mePlayer.js'
            },
			css : {
				src: ['*.css'],
                dest: 'dest/all.css'
			}
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/*.js',
                dest : 'dest/*.min.js'
            }
        },
		cssmin: {
            css: {
                src: 'dest/all.css',
                dest: 'dest/all-min.css'
            }
        }
    });
    // ����concat��uglify������ֱ���ںϲ���ѹ��
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // ע������
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}; 