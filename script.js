const D_LAND_WHATSAPP = "919087999172";

document.querySelectorAll(".menu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "×" : "☰";
  });
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.remove("open");
    document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
    const toggle = document.querySelector(".menu-toggle");
    if (toggle) toggle.textContent = "☰";
  });
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const quickSearch = document.getElementById("quickSearch");
if (quickSearch) {
  quickSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("quickType").value;
    const location = document.getElementById("quickLocation").value;
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (location !== "all") params.set("location", location);
    window.location.href = "properties/" + (params.toString() ? "?" + params.toString() : "");
  });
}
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(leadForm);
    const phone = String(form.get("phone") || "").trim();
    if (phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    const message = [
      "Hello D Land, I am enquiring through the website.",
      `Name: ${form.get("name")}`,
      `Mobile: ${phone}`,
      `Interest: ${form.get("interest")}`,
      `Budget: ${form.get("budget")}`,
      `Message: ${form.get("message") || "Not provided"}`
    ].join("\n");
    window.open(`https://wa.me/${D_LAND_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
