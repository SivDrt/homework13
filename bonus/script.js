const KEY = "loggedUser";

function loadUser() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

function saveUser(username) {
  localStorage.setItem(KEY, JSON.stringify({ username }));
}

function clearUser() {
  localStorage.removeItem(KEY);
}

const greeting = document.getElementById("greeting");
const form     = document.getElementById("loginForm");
const userEl   = document.getElementById("username");
const passEl   = document.getElementById("password");
const logoutEl = document.getElementById("logoutBtn");

function showLoggedIn(user) {
  greeting.textContent = `שלום ${user.username}, אתה מחובר`;
  form.style.display = "none";
  logoutEl.style.display = "inline-block";
}

function showLoggedOut() {
  greeting.textContent = "";
  form.style.display = "block";
  logoutEl.style.display = "none";
  form.reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = userEl.value.trim();
  const p = passEl.value;

  if (u === "ADMIN" && p === "123456") {
    saveUser(u);
    showLoggedIn({ username: u });
  } else {
    alert("שם משתמש או סיסמה שגויים (נסה: ADMIN / 123456)");
  }
});

logoutEl.addEventListener("click", () => {
  clearUser();
  showLoggedOut();
});

const existing = loadUser();
existing ? showLoggedIn(existing) : showLoggedOut();
