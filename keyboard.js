const display = document.querySelector("html");

display.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") {
        deleteFunction();
    }
    if(e.code === "Numpad1" || e.code === "Numpad2" || e.code === "Numpad3" ||
        e.code === "Numpad4" || e.code === "Numpad5" || e.code === "Numpad6" ||
        e.code === "Numpad7" || e.code === "Numpad8" || e.code === "Numpad9" ||
        e.code === "Numpad0") {
        writeNumbers(e.key);
    }
    if(e.code === "NumpadEnter") {
        equal();
    }
    if(e.code === "NumpadAdd" || e.code === "NumpadSubtract" || e.code === "NumpadDivide" || e.code === "NumpadMultiply") {
        operator(e.key);

        if(e.code === "NumpadDivide") {
            operator("÷");
        }
    }
    if(e.code == "NumpadDecimal") {
        addFloat();
    }
});