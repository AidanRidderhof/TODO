export function tabLogic() {
    const tabs = document.querySelector("#content");
    tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.tab;
    if (id) {
        // remove selected from other buttons
        const btns = document.querySelectorAll(".button");
        const contents = document.querySelectorAll(".content");

        btns.forEach(function (btn) {
        btn.classList.remove("live");
        });
        e.target.classList.add("live");
        // hide other pages
        contents.forEach(function (c) {
        c.classList.remove("live");
        });
        const element = document.getElementById(`tab-${id}`);
        element.classList.add("live");
    }
    });
}