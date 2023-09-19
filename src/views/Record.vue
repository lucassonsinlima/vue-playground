<template>
  <div class="record">
    <h1>Record RTC POC</h1>

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

    <main>
      <video
        ref="video"
        controls
        autoplay
        playsinline
      />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RecordRTC from 'recordrtc'

const startButtonDisabled = ref(false)
const stopButtonDisabled = ref(true)

const video = ref(null)
let recorder

const captureCamera = (callback) => {
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  }).then(function(camera) {
    callback(camera)
  }).catch(function(error) {
    console.error(error)
  })
}

const startRecording = () => {
  startButtonDisabled.value = true

  const record = (camera) => {
    video.value.muted = true
    video.value.volume = 0
    video.value.srcObject = camera

    recorder = RecordRTC(camera, { type: 'video' })

    recorder.startRecording()

    recorder.camera = camera

    stopButtonDisabled.value = false
  }

  captureCamera(record)
}

const stopRecordingCallback = () => {
  video.value.src = video.value.srcObject = null
  video.value.muted = false
  video.value.volume = 1
  video.value.src = URL.createObjectURL(recorder.getBlob())

  recorder.camera.stop()
  recorder.destroy()
  recorder = null
}

const stopRecording = () => {
  stopButtonDisabled.value = true

  recorder.stopRecording(stopRecordingCallback)
}
</script>