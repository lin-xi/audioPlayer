var Meaudio = (function(){
    var _guid = 0;
    function Meaudio(){
        this.id = ++_guid;
        this.loop = 1;
        this._init();

        this._callback = {};
    }

    Meaudio.prototype = {
        constructor: Meaudio,

        _init: function(){
            var self = this, doc = document, body = doc.body, id = self.id;
            var wrap = doc.createElement('div'),
                audio_temple = '<audio id="me-audio{#id}" preload loop></audio>';

            body.appendChild(wrap);
            wrap.innerHTML = audio_temple.replace(/\{#id\}/g, id);
            var mep = this.mep = doc.getElementById('me-audio'+id);

            var events = {
                'loadstart': function(){},
                'progress': function(e){
                    console.log('progress', e);
                },
                'suspend': function(){}, 
                'abort': function(){}, 
                'error': function(){}, 
                'emptied': function(){}, 
                'stalled': function(){}, 
                'loadedmetadata': function(e){
                   console.log('loadedmetadata', e);
                }, 
                'loadeddata': function(e){
                    console.log('loadeddata', e);
                }, 
                'canplay': function(e){
                    console.log('canplay', e);
                }, 
                'canplaythrough': function(){}, 
                'playing': function(e){
                    console.log('playing', e);
                    var fn = self._callback;
                    if(fn && fn.play){ fn.play(e); }
                }, 
                'waiting': function(){}, 
                'seeking': function(){}, 
                'seeked': function(){}, 
                'ended': function(){}, 
                'durationchange': function(e){
                }, 
                'timeupdate': function(e){
                    //console.log('timeupdate', e);
                }, 
                'play': function(e){
                    console.log('play', e);
                }, 
                'pause': function(e){
                    console.log('pause', e);
                }, 
                'ratechange': function(){}, 
                'volumechange': function(){}
            };

            for(var key in events){
                mep.addEventListener(key, events[key]);
            }
        },

        play: function(url, func){
            if(!url || url == '') return
            var self = this, mep = self.mep, fn = self._callback;
            func && (fn.play = func)
            mep.src = url;
            mep.play();
        },

        resume: function(){
            var self = this, mep = self.mep;
            mep.play();
        },

        pause: function(){
            var self = this, mep = self.mep;
            mep.pause();
        },

        prev: function(){

        },

        next: function(){

        },

        setVolume: function(){

        },

        onStateEvent: function(fn){
            this._callback = fn;
        },

        /*
         * 1: playing
         * 2: paused
         * 3: ended
         * 4: stoped
         */
        getState: function(){
            var self = this, mep = self.mep;
            if(mep.paused){
                if(mep.ended){
                    return 3;
                }else if(mep.currentTime > 0){
                    return 2;
                }else{
                    return 4;
                }
            }else{
                return 1;
            }
        }
    };

    return Meaudio;
})();