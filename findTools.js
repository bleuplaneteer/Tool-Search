var tools = [
  {
    name: "Rise",
    type: "Writing/Editing",
    spice: "Hard"
  },
  {
    name: "Vyond",
    type: "Animation, Video",
    spice: "Medium"
  },
  {
    name: "Hemmingway",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "H5P",
    type: "Video",
    spice: "Medium"
  },
  {
    name: "Screencast-o-matic",
    type: "Video",
    spice: "Medium"
  },
  {
    name: "Padlet",
    type: "Project Planning, Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Hypothes.is",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Twine",
    type: "Storytelling",
    spice: "Medium"
  }
];

function findTools() {
  var mediaTypeSel = document.getElementById("mediaType");
  var difficultySel = document.getElementById("difficultyLevel");
  
  for (let i=0; i<tools.length; i++) {
    if (tools[i].type.includes(mediaTypeSel.value) && difficultySel.value === tools[i].spice) {
    document.getElementById(tools[i].name).style.display = 'block';
  } else {
    document.getElementById(tools[i].name).style.display = 'none';
  }
  
  }
  }
