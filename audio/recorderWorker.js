function record(inputBuffer){
 recBuffersL.push(inputBuffer[0]);
 //recBuffersR.push(inputBuffer[1]);
 recLength += inputBuffer[0].length;
}


function exportWAV(type){
	 var bufferL = mergeBuffers(recBuffersL, recLength);
	 //var bufferR = mergeBuffers(recBuffersR, recLength);
	 //var interleaved = interleave(bufferL, bufferR);
	 //var dataview = encodeWAV(interleaved);
	 var dataview = encodeWAV(bufferL);
	 var audioBlob = new Blob([dataview], { type: type });
	 
	this.postMessage(audioBlob);
	}


function encodeWAV(samples){
	 var buffer = new ArrayBuffer(44 + samples.length * 2);
	 var view = new DataView(buffer);
	 
	/* RIFF identifier */
	 writeString(view, 0, 'RIFF');
	 /* file length */
	 view.setUint32(4, 32 + samples.length * 2, true);
	 /* RIFF type */
	 writeString(view, 8, 'WAVE');
	 /* format chunk identifier */
	 writeString(view, 12, 'fmt ');
	 /* format chunk length */
	 view.setUint32(16, 16, true);
	 /* sample format (raw) */
	 view.setUint16(20, 1, true);
	 /* channel count */
	 //view.setUint16(22, 2, true); /*STEREO*/
	 view.setUint16(22, 1, true); /*MONO*/
	 /* sample rate */
	 view.setUint32(24, sampleRate, true);
	 /* byte rate (sample rate * block align) */
	 //view.setUint32(28, sampleRate * 4, true); /*STEREO*/
	 view.setUint32(28, sampleRate * 2, true); /*MONO*/
	 /* block align (channel count * bytes per sample) */
	 //view.setUint16(32, 4, true); /*STEREO*/
	 view.setUint16(32, 2, true); /*MONO*/
	 /* bits per sample */
	 view.setUint16(34, 16, true);
	 /* data chunk identifier */
	 writeString(view, 36, 'data');
	 /* data chunk length */
	 view.setUint32(40, samples.length * 2, true);
	 
	floatTo16BitPCM(view, 44, samples);
	 
	return view;
	}