document.getElementById("updateBtn").addEventListener("click", () => {
  const input = document.getElementById("nameInput").value;

  if (input.trim() === "") {
    alert("Enter a valid name");
  } else {
    document.getElementById("name").textContent = input;
  }
});

// Followers Counter using Closure
function followerCounter() {
  let count = 1000;
  return () => {
    count++;
    document.getElementById("followers").textContent = "Followers: " + count;
  };
}

const follow = followerCounter();

document.getElementById("followBtn").addEventListener("click", () => {
  follow();
});

// Random Achievement (Array)
const achievements = [
  "Reached 10K Followers 🎉",
  "Collaboration with Brand 🤝",
  "Top Travel Creator 🌍",
  "Viral Post 🚀"
];

document.getElementById("achievementBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * achievements.length);
  document.getElementById("achievement").textContent = achievements[random];
});
