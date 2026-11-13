(function () {
  "use strict";
  var BP = 900;
  var root = document.documentElement;
  var ham = document.querySelector(".hamburger");
  var drawer = document.getElementById("mob-drawer");
  function setOpen(open) {
    if (!drawer || !ham) { return; }
    root.classList.toggle("drawer-open", open);
    root.style.overflow = open ? "hidden" : "";
    ham.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) { var c = drawer.querySelector(".drawer-close"); if (c) { c.focus(); } } else { ham.focus(); }
  }
  if (ham) { ham.addEventListener("click", function () { setOpen(!root.classList.contains("drawer-open")); }); }
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-close]")) { setOpen(false); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("drawer-open")) { setOpen(false); }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP && root.classList.contains("drawer-open")) { setOpen(false); }
  });
})();
