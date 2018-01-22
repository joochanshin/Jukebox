var bool = true;

function __hide__ () {
	document.getElementById("player").style.display = "none";
}

var song = document.getElementById("player");

var Jukebox = {
	playlist: [],
	play: function(){	//	plays song
		bool = true;
		song.play();
	},
	pause: function(){	//	pauses song
		bool = false;
		song.pause();
	},
	load: function(){	//	loads music
		var new_song = "audio/" + prompt("Enter song name") + ".mp3";
		this.playlist.push(new_song);
		console.log(new_song);
	},
	volUp: function(){	//	increases volume
		if(song.volume < 1)
			song.volume += .1;
	},
	volDown: function(){	//	Decreases volue
		if(song.volume > 0)
			song.volume -= .1;
	},
	random: function(){	//	randomizes array
		var currentIndex = this.playlist.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    temporaryValue = this.playlist[currentIndex];
		    this.playlist[currentIndex] = this.playlist[randomIndex];
		    this.playlist[randomIndex] = temporaryValue;
		  }

		  return this.playlist;
	},
	__add__: function(song){	//	adds song from songs to playlist
		this.playlist.push(song);
		return "Song added";
	}
};

//Jukebox.load();


