var bool = true;

function __hide__ () {
	document.getElementById("player").style.display = "none";
}

var Jukebox = {
	playlist: [],
	play: function(){	//	plays song
		bool = true;
	},
	stop: function(){	//	stops song
		bool = false;
	},
	load: function(){
		//	loads music
	},
	volUp: function(song){	//	increases volume
		song.volume += .1;
	},
	volDown: function(){	//	Decreases volue
		song.volume -= .1;
	},
	random: function(){	//	randomizes array
		var currentIndex = this.playlist.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {.
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    temporaryValue = this.playlist[currentIndex];
		    this.playlist[currentIndex] = this.playlist[randomIndex];
		    this.playlist[randomIndex] = temporaryValue;
		  }

		  return this.playlist;
	},
	__add__: function(song){
		this.playlist.push(song);
		return "Song added";
	}
};


