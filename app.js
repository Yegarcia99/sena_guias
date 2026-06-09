const roleButtons = document.querySelectorAll("[data-role-target]");
const roleGuides = document.querySelectorAll(".role-guide");
const guideSearch = document.querySelector("#guideSearch");
const searchableCards = document.querySelectorAll("[data-guide-card]");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.roleTarget;

    roleButtons.forEach((item) => item.classList.toggle("active", item === button));
    roleGuides.forEach((guide) => {
      guide.classList.toggle("active", guide.id === `role-${target}`);
    });
  });
});

guideSearch?.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  searchableCards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    card.classList.toggle("is-hidden", query.length > 0 && !content.includes(query));
  });
});

document.querySelectorAll(".role-gallery").forEach((gallery) => {
  const shots = Array.from(gallery.querySelectorAll(".role-shot"));

  shots.forEach((shot, index) => {
    if (index === 0) return;

    shot.setAttribute("tabindex", "0");
    shot.setAttribute("role", "button");
    shot.setAttribute("aria-label", `Ver captura principal: ${shot.textContent.trim()}`);

    const promoteShot = () => {
      const main = shots[0];
      const mainImage = main.querySelector("img");
      const mainCaption = main.querySelector("figcaption");
      const shotImage = shot.querySelector("img");
      const shotCaption = shot.querySelector("figcaption");

      const current = {
        src: mainImage.getAttribute("src"),
        alt: mainImage.getAttribute("alt"),
        caption: mainCaption.textContent,
      };

      mainImage.setAttribute("src", shotImage.getAttribute("src"));
      mainImage.setAttribute("alt", shotImage.getAttribute("alt"));
      mainCaption.textContent = shotCaption.textContent;

      shotImage.setAttribute("src", current.src);
      shotImage.setAttribute("alt", current.alt);
      shotCaption.textContent = current.caption;
    };

    shot.addEventListener("click", promoteShot);
    shot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        promoteShot();
      }
    });
  });
});
