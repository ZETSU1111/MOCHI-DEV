document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => {
                item.classList.remove("active");
            });
            link.classList.add("active");
        });
    });

    const sections = document.querySelectorAll("section");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    sections.forEach(section => {
        section.classList.add("hidden");
        revealObserver.observe(section);
    });

    const projectLinks = document.querySelectorAll("#projects article a");
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.getAttribute("href") === "#") {
                event.preventDefault();
                alert("Project link coming soon!");
            }
        });
    });

    const footer = document.querySelector("footer");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(
            "2026",
            year
        );
    }
});
