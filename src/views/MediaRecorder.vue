<template>
  <div class="record">
    <h1>Media Recorder POC</h1>

    <div class="controls">
      <button
        :disabled="startButtonDisabled"
        @click="startRecording"
      >
        Start Recording
      </button>

      <button
        :disabled="stopButtonDisabled"
        @click="stopRecording"
      >
        Stop Recording
      </button>
    </div>

    <div class="container">
      <div class="left">
        <h2>Preview</h2>

        <video
          id="preview"
          width="160"
          height="120"
          autoplay
          playsinline
          muted
        />
      </div>

      <div class="right">
        <h2>Recorded</h2>

        <video
          id="recording"
          width="160"
          height="120"
          controls
        />

        <a
          id="downloadButton"
          class="button"
        >
          Download
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const startButtonDisabled = ref(false)
const stopButtonDisabled = ref(true)

let downloadButton
let preview
let recording
let recordingTimeMS = 5000

onMounted(() => {
  preview = document.getElementById('preview')
  recording = document.getElementById('recording')
  downloadButton = document.getElementById("downloadButton")

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  }).then((stream) => {
    preview.srcObject = stream
  })
})

const wait = (delayInMS) => { return new Promise((resolve) => setTimeout(resolve, delayInMS)) }

const start = (stream, lengthInMS) => {
  let recorder = new MediaRecorder(stream)
  let data = []

  recorder.ondataavailable = (event) => data.push(event.data)
  recorder.start()

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve
    recorder.onerror = (event) => reject(event.name)
  })

  let recorded = wait(lengthInMS).then(() => {
    if (recorder.state === "recording") {
      recorder.stop()
    }
  })

  return Promise.all([stopped, recorded]).then(() => data)
}

const stop = (stream) => {
  stream.getTracks().forEach((track) => track.stop())
}

const startRecording = () => {
  startButtonDisabled.value = true
  stopButtonDisabled.value = false

  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      preview.srcObject = stream;
      downloadButton.href = stream
      preview.captureStream =
        preview.captureStream || preview.mozCaptureStream
      return new Promise((resolve) => (preview.onplaying = resolve))
    })
    .then(() => start(preview.captureStream(), recordingTimeMS))
    .then((recordedChunks) => {
      let recordedBlob = new Blob(recordedChunks, { type: "video/webm" })
      recording.src = URL.createObjectURL(recordedBlob)
      downloadButton.href = recording.src
      downloadButton.download = "RecordedVideo.webm"
    })
}

const stopRecording = () => {
  startButtonDisabled.value = false
  stopButtonDisabled.value = true

  stop(preview.srcObject)
}

</script>

<style lang="scss">
video {
  transform: scale(-1,1);

  &::-webkit-media-controls-panel {
    transform: scale(-1,1);
  }
}
</style>