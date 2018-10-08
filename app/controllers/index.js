const YouTubePlayerView = require('com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayerView');
const AbstractYouTubePlayerListener = require('com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.AbstractYouTubePlayerListener');
const YouTubePlayerInitListener = require('com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.YouTubePlayerInitListener');
const YouTubePlayer = require('com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayer');
const Activity = require('android.app.Activity');
const activity = new Activity(Ti.Android.currentActivity);
const youTubePlayerView = new YouTubePlayerView(activity);

var yplayer = null;

var absListener = AbstractYouTubePlayerListener.extend({
	onReady: function() {
		console.log("is ready");
		if (yplayer) {
			console.log("got yplayer");
			yplayer.loadVideo("6JYIGclVQdw", 0);
		}
	}
});

var ypi = new YouTubePlayerInitListener({
	onInitSuccess: function(player) {
		yplayer = player;
		player.addListener(new absListener());
	}
});

youTubePlayerView.initialize(ypi, true);

$.index.add(youTubePlayerView);
$.index.open();
