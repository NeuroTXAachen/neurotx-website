export const homeDataObj = {
  id: "home",
  bgLine1: "thinking",
  bgLine2: "the",
  bgLine3: "next",
  bgLine4: "move",
  description:
    "We are NeuroTX,  a student team from Aachen, Germany aiming to cultivate a learning environment and  hands-on experience in the field of neurotechnology",
  waveImage: require("../../images/waves.png"),
  smallWaveImg: require("../../images/image 3.png"),
  backgroundPhilipp: require("../../images/DSC08470-2 1.png"),
  redBgPoint: require("../../images/square.png"),
  cpuImage: require("../../images/cpu.png"),
  brainImage: require("../../images/brain.png"),
  vectorImage: require("../../images/vectors.png"),
  coverphoto: require("../../images/coverphoto.png"),
  projectdescription1:
    "Our projects involve mainly brain signal processing from EEG, and its translation into real-world applications by a brain-computer interface.",
  projectdescription2:
    "Having the benefit of the disabled in mind, we are developing Xavier, a prototype electric wheelchair controlled by brain signals.",
  projectdescription3: "But that’s not all. Discover More of our projects!",
  vidJSOptions: {
    autoplay: false,
    fluid: true,
    responsive: true,
    controls: true,
    muted: true,
    sources: [
      {
        src: require("../../videos/ef84a11d-884e-4c27-b777-aa1b489ab79a.mp4"),
        type: "video/mp4",
      },
    ],
    controlBar: {
      playToggle: false,
      pictureInPictureToggle: false,
      volumePanel: false,
      volumeControl: false,
      DurationDisplay: false,
      captionsButton: false,
      chaptersButton: false,
      subtitlesButton: false,
      remainingTimeDisplay: false,
      progressControl: {
        seekBar: false,
      },
      fullscreenToggle: false,
      playbackRateMenuButton: false,
    },
  },
  partnersImgs: {
    asta: require("../../images/asta.png"),
    collectiveInc: require("../../images/collectiveIncubator.png"),
    techAachen: require("../../images/techAachen_Logo 2.png"),
  },
};
