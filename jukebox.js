var bool = true;
var index = 0;

function __hide__ () {
	document.getElementById("player").style.display = "none";
}

var song = document.getElementById("player");

song.addEventListener("ended",function(){
	index++;
	if(index === Jukebox.playlist.length-1){
		index = 0;
	}
	song.setAttribute("src", Jukebox.playlist[index]);
	document.getElementById("current").innerHTML = Jukebox.playlist[index];
});

var lines = document.getElementsByClassName("lines");
var smlines = document.getElementsByClassName("smlines");
var speaker = document.getElementsByClassName("speaker");

var Jukebox = {
	playlist: ["audio/birds.mp3", "audio/humble.mp3", "audio/dead-wrong.mp3", "audio/go-to-sleep.mp3", "audio/hail-mary.mp3"],//next.mp3 is to check if it works
	play: function(){	//	plays song
		bool = true;
		song.play();
		for(let i = 0; i < lines.length; i++){
			lines[i].style.display = "inline";
			smlines[i].style.display = "inline";
		}
		speaker[0].style.animation = "pump .5s ease-in infinite";
		speaker[1].style.animation = "pump .5s ease-in infinite";
		gradient(bool);

	},
	pause: function(){	//	pauses song
		bool = false;
		song.pause();
		for(let i = 0; i < lines.length; i++){
			lines[i].style.display = "none";
			smlines[i].style.display = "none";
		}
		speaker[0].style.animation = "none";
		speaker[1].style.animation = "none";
		gradient(bool);
	},
	next: function(){
		if(index === Jukebox.playlist.length-1){
			index = 0;
			song.setAttribute("src", this.playlist[index]);
		}else{
			index++;
			song.setAttribute("src", this.playlist[index]);
		}
		console.log(index);
		song.play();
		document.getElementById("current").innerHTML = this.playlist[index];
		gradient(bool);
	},
	previous: function(){
		if(index === 0){
			song.setAttribute("src", this.playlist[index]);
		} else {
			index--;
			song.setAttribute("src", this.playlist[index]);
		}
		song.play();
		document.getElementById("current").innerHTML = this.playlist[index];
		gradient(bool);
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
	random: function(){		//	randomizes array
		var currentIndex = this.playlist.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    temporaryValue = this.playlist[currentIndex];
		    this.playlist[currentIndex] = this.playlist[randomIndex];
		    this.playlist[randomIndex] = temporaryValue;
		}
		console.log("Randomized");
		if(index === this.playlist.length-1){
			index = 0;
		}
		else{
			index++;
		}
		song.setAttribute("src", Jukebox.playlist[index]);
		document.getElementById("current").innerHTML = this.playlist[index];
		return this.playlist;
	},
	__add__: function(song){	//	adds song from songs to playlist
		this.playlist.push(song);
		return "Song added";
	}
};

//Jukebox.load();
document.getElementById("current").innerHTML = Jukebox.playlist[index];

function gradient(bool){
	var body = document.getElementById("body");
	var _1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var _2 = '#'+(Math.random()*0xFFFFFE<<0).toString(16);

	if(bool){
		body.style.background = "linear-gradient(-45deg,"+_1+","+_2+")";
		body.style.backgroundSize = "400% 1000%";
		body.style.animation = "Gradient 1s ease infinite"
	}
	else{
		body.style.background = "white";
		body.style.animation = "none";
	}
}














 
