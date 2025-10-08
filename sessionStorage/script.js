const KEY = 'app.formDraft';

const nameEl  = document.getElementById('name');
const emailEl = document.getElementById('email');
const resetEl = document.getElementById('resetBtn');

let draft = {};
try { draft = JSON.parse(sessionStorage.getItem(KEY) || '{}'); } catch {}
nameEl.value  = draft.name  || '';
emailEl.value = draft.email || '';

function save() {
  sessionStorage.setItem(KEY, JSON.stringify({
    name:  nameEl.value,
    email: emailEl.value
  }));
}
nameEl.addEventListener('input', save);
emailEl.addEventListener('input', save);

resetEl.addEventListener('click', () => {
  sessionStorage.removeItem(KEY);
  nameEl.value = '';
  emailEl.value = '';
});
