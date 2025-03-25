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

        // If there's a corresponding script for the module, load it
        const scriptPath = `scripts/${module.path
          .split("/")
          .pop()
          .replace(".html", ".js")}`;
        const script = document.createElement("script");
        script.src = scriptPath;
        document.body.appendChild(script);
      })
      .catch((error) => console.error(`Error loading ${module.path}:`, error));
  });
});
