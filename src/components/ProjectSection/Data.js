export const projectDataObj = {
  id: "projects",
  currentProjects: {
    [0]: {
      name: "Bucky (Simulation)",
      description:
        "A continuation of the Bucky project where physical prosthetics are no longer used. Instead, everything is tested and demonstrated purely through computer simulations.",
    },
    [1]: {
      name: "Xavier (EEG-Driven VR Motor Rehabilitation)",
      description:
        "This project uses a standard brain-wave headset and virtual reality to let patients control a digital 3D avatar using only their thoughts. By decoding brain signals and mapping them onto the avatar, it helps keep the brain's movement center active for stroke or paralysis patients. It also offers an immersive way to help patients with missing limbs manage phantom pain through a virtual reality environment.",
    },
    [2]: {
      name: "Research (Project SeriLOAD)",
      description:
        "This project focuses on developing special gel-like materials made of polymers and silk proteins to deliver healing molecules directly to human cells. By testing different formulas and analyzing how the material releases these healing factors, the team aims to find the best combination to support tissue repair and blood vessel growth.",
    },
  },
  previousProjects: {
    [0]: {
      name: "Xavier",
      image: require("../../images/projects/Xavier.png"),
      description:
        "An electric wheelchair, which can be controlled by the brain. The user would complete the steering and driving tasks using only brain signal measured by an EEG headset.",
    },
    [1]: {
      name: "Brain Dream",
      image: require("../../images/projects/BrainDream.png"),
      description:
        "Computer games designed to be played with the brain as additional input.",
    },
    [2]: {
      name: "Bucky",
      image: require("../../images/projects/Bucky.png"),
      description:
        "A 3D printed prosthetic arm controlled by EMG signals from muscles. The signals are classified by using machine learning and then sent to the prosthetic to perform a gesture.",
    },
  },
  redBgPoint: require("../../images/square.png"),
};
