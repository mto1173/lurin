
const drawer = document.querySelector("aside.drawer-menu");
const overlay = document.querySelector("#drawer-overlay");
const openButton = document.querySelector("#drawer-open");
const closeButton = drawer?.querySelector(".drawer-close");

function openDrawer() {
  if (!drawer || !overlay || !openButton || !closeButton) return;

  drawer.classList.add("is-open");
  overlay.classList.add("is-open");
  closeButton.classList.add("is-open");

  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");
  openButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-active");
}

function closeDrawer() {
  if (!drawer || !overlay || !openButton || !closeButton) return;

  drawer.classList.remove("is-open");
  overlay.classList.remove("is-open");
  closeButton.classList.remove("is-open");

  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-active");
}

openButton?.addEventListener("click", openDrawer);
closeButton?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);

drawer?.querySelectorAll(".drawer-nav a").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
  }
});

// 初期状態
if (drawer && overlay && openButton && closeButton) {
  drawer.classList.remove("is-open");
  overlay.classList.remove("is-open");
  closeButton.classList.remove("is-open");

  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-expanded", "false");
}
