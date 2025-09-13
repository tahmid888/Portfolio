form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { Accept: "application/json" },
  });
  if (response.ok) {
    /* show success message */
  }
});
