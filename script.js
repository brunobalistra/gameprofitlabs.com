// Language buttons (placeholder for future i18n enhancements)
document.addEventListener("click", e => {
  const b = e.target.closest(".lang-btn");
  if(!b) return;
  alert("Multilingual static copy coming next (EN/PT/ES). For now, content is in EN.");
});
