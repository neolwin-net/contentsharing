/* =========================================================
   SP Networking Guide — site interactions
   ========================================================= */

"use strict";

const root = document.documentElement;
const themeButton = document.getElementById("themeBtn");
const menuButton = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const searchInput = document.getElementById("searchInput");

/**
 * Switch between dark and light themes.
 */
themeButton?.addEventListener("click", () => {
    root.classList.toggle("light");

    const isLight = root.classList.contains("light");
    const themeColor = document.querySelector('meta[name="theme-color"]');

    if (themeColor) {
        themeColor.content = isLight ? "#f5f7fb" : "#10151f";
    }

    themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
});

/**
 * Open and close the sidebar on small screens.
 */
menuButton?.addEventListener("click", () => {
    const isOpen = sidebar?.classList.toggle("open") ?? false;

    menuButton.setAttribute("aria-expanded", String(isOpen));
});

/**
 * Expand or collapse a navigation group.
 */
document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
        const panelId = button.dataset.toggle;
        const panel = panelId ? document.getElementById(panelId) : null;

        if (!panel) {
            return;
        }

        panel.hidden = !panel.hidden;

        const indicator = button.querySelector("span");

        if (indicator) {
            indicator.textContent = panel.hidden ? "›" : "⌄";
        }

        button.setAttribute("aria-expanded", String(!panel.hidden));
    });
});

/**
 * Copy a code example to the clipboard.
 */
document.querySelectorAll(".copy").forEach((button) => {
    button.addEventListener("click", async () => {
        const code = button
            .closest(".codebox")
            ?.querySelector("code")
            ?.innerText;

        if (!code) {
            return;
        }

        try {
            await navigator.clipboard.writeText(code);
            button.textContent = "Copied!";
        } catch (error) {
            // Clipboard access may be blocked on insecure origins.
            button.textContent = "Copy unavailable";
        }

        window.setTimeout(() => {
            button.textContent = "Copy";
        }, 1600);
    });
});

/**
 * Filter sidebar links and topic cards as the user types.
 * A blank query restores all items.
 */
searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    document.querySelectorAll(".navitems a").forEach((link) => {
        const targetSelector = link.getAttribute("href");
        const target = targetSelector
            ? document.querySelector(targetSelector)
            : null;

        const searchableText = [
            link.innerText,
            target?.innerText ?? ""
        ].join(" ").toLowerCase();

        link.hidden = query.length > 0 && !searchableText.includes(query);
    });

    document.querySelectorAll(".topiccard").forEach((card) => {
        const searchableText = card.innerText.toLowerCase();

        card.hidden = query.length > 0 && !searchableText.includes(query);
    });

    // Keep navigation groups visible only when they contain a matching link.
    document.querySelectorAll(".navgroup").forEach((group) => {
        const links = group.querySelectorAll(".navitems a");
        const hasVisibleLink = Array.from(links).some((link) => !link.hidden);

        group.hidden = query.length > 0 && !hasVisibleLink;
    });
});

/**
 * Mark the selected sidebar link and close the mobile sidebar.
 */
document.querySelectorAll(".navitems a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".navitems a").forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
        sidebar?.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
});

/**
 * Close the mobile sidebar when Escape is pressed.
 */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sidebar?.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");
    }
});
