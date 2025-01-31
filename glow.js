const glowElement = document.body;

glowElement.addEventListener("pointermove", ({ x, y }) => {
    glowElement.style.setProperty("--x", `${x}px`)
    glowElement.style.setProperty("--y", `${y}px`)
})