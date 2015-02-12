window.onload = function init() {
 try {
	 // webkit shim
	 window.AudioContext = window.AudioContext || window.webkitAudioContext;
	 navigator.getUserMedia = ( navigator.getUserMedia ||
	 navigator.webkitGetUserMedia ||
	 navigator.mozGetUserMedia ||
	 navigator.msGetUserMedia);
	 window.URL = window.URL || window.webkitURL;
	 
	 audio_context = new AudioContext;
	 __log('Audio context set up.');
	 __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
 } catch (e) {
	 alert('No web audio support in this browser!');
 }
 
	 navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
		 __log('No live audio input: ' + e);
	 });
 };