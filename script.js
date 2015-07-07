$(function() {

	var $spotifySearch = $('#spotify-search');
	var $track = $('#track');

	var resultsTemplate=_.template($('#resultsTemplate').html());

		var Songs = function(songNames){
		  	this.songNames = songNames;
		 	 }

		Songs.prototype.render = function(){
			var $list = $('#search_results');
			var $searchResults = $(resultsTemplate(this));
			$list.append($searchResults);
			}


 	$spotifySearch.on("submit",function(event){
  	event.preventDefault();
  		var $searchTrack = $track.val();
  		console.log($searchTrack);
  	$.get(
  	'https://api.spotify.com/v1/search?type=track&q=' + $searchTrack,
  		function (data){
  			var songsArray = data.tracks.items;
  			console.log(songsArray);
		_.each(songsArray, function(song, index){
			var songNames = song.name;
			console.log(song.name);
			var artistArray = song.artists;
					_.each(artistArray, function(artist, index){
						console.log(artist.name);
					});
			var results = new Songs(songNames);
			(results).append($("<dt></dt>"))
				});
			});
		});
	});