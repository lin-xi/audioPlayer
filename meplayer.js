var Meplayer = (function(undefined){
    var _guid = 0;
    function Meplayer(node){
        this.id = ++_guid;
        this.audio = new Meaudio();
        this.node = document.getElementById(node);

        this.playlist = [];
        this.current = -1;
        this.controls = {};

        this._init();
    }

    Meplayer.prototype = {
        constructor: Meplayer,

        _init: function(){
            var self = this, doc = document, node = self.node, id = self.id;
            var wrap = doc.createElement('div'),
                ui_temple = '<div id="ui{#id}" class="me-audio"><div id="cover{#id}" class="album-cover"></div><div class="audio-control"><div class="button-wrap"><div for="playerControl" class="control-btn"><div id="control{#id}" class="play-btn icon-play-2"><div></div><span id="processBar{#id}"></span></div></div></div>';
            node.appendChild(wrap);
            wrap.innerHTML = ui_temple.replace(/\{#id\}/g, id);

            var cover = doc.getElementById('cover'+id),
                control = doc.getElementById('control'+id),
                process = doc.getElementById('processBar'+id);

            var controls = self.controls;
            controls.cover = cover;
            controls.control = control;
            controls.process = process;

            control.addEventListener('click', function(){
                self._control();
            });

             this.current = 0;
        },
        _control: function(){
            var self = this, audio = self.audio;
            var state = audio.getState();
            switch(state){
                case 4:
                    self._play();
                break;
                case 3:
                    self._play();
                break;
                case 2:
                    self._resume();
                break;
                case 1:
                    self._pause();
                break;
            }
        },
        _play: function(){
            var self = this, audio = self.audio, controls = self.controls;
            var track = self.playlist[self.current];
            if(track){
                audio.play(track.url, function(){
                    self.addClass(controls.cover, 'play');
                    self.removeClass(controls.control, 'icon-play-2');
                    self.addClass(controls.control, 'icon-pause-2');
                });
            }
        },
        _pause: function(){
            var self = this, audio = self.audio, controls = self.controls;
            audio.pause();

            self.removeClass(controls.cover, 'resume');
            self.addClass(controls.cover, 'pause');
            self.removeClass(controls.control, 'icon-pause-2');
            self.addClass(controls.control, 'icon-play-2');
        },
        _resume: function(){
            var self = this, audio = self.audio, controls = self.controls;
            audio.resume();
            self.removeClass(controls.cover, 'pause');
            self.addClass(controls.cover, 'resume');
        },

        setPlayList: function(list){
            if(Object.prototype.toString.call(list) == '[object Array]'){
                this.playlist = list;
            }
        },

        play: function(index){
            var self = this, list = self.playlist;
            if(index && index < list.length){
                self.current = index;
                self.__play();
            }else{
                self.__play();
            }
        },

        addClass: function(ele, cname){
            var self = this;
            var cn = ele.className;
            if(cn.indexOf(cname) == -1){
                var regex = new RegExp(cname, 'g');
                ele.className = self.trim(cn) + ' ' + cname;
            }
        },
        removeClass: function(ele, cname){
            var self = this;
            var cn = ele.className;
            var regex = new RegExp(cname, 'g');
            ele.className = self.trim(cn.replace(regex, ''));
        },
        trim: function(str){
            return str.replace(/^\s+$/g, '');
        }
    };
    return Meplayer;
})();