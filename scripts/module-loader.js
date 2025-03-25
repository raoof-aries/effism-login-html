document.addEventListener("DOMContentLoaded", () => {
  const modules = [
    { id: "header-module", path: "modules/header.html" },
    { id: "login-hero-module", path: "modules/login-hero.html" },
    { id: "best-employee-module", path: "modules/best-employee.html" },
    { id: "fun-facts-module", path: "modules/fun-facts.html" },
    { id: "latest-news-module", path: "modules/latest-news.html" },
    { id: "footer-module", path: "modules/footer.html" },
  ];

  modules.forEach((module) => {
    fetch(module.path)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(module.id).innerHTML = html;

        // Load the corresponding script
        const scriptPath = `scripts/${module.path
          .split("/")
          .pop()
          .replace(".html", ".js")}`;
        const script = document.createElement("script");
        script.src = scriptPath;
        // When the module's script loads, call its init function if available.
        script.onload = () => {
          // For the login-hero module, we call loginHeroInit if it exists.
          if (
            module.id === "login-hero-module" &&
            typeof loginHeroInit === "function"
          ) {
            loginHeroInit();
          }
          // Add similar conditions for other modules if needed.
        };
        document.body.appendChild(script);
      })
      .catch((error) => console.error(`Error loading ${module.path}:`, error));
  });
});
