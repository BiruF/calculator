var btn = document.getElementById("theme-button");
var wrapper = document.getElementById("calc");

btn.addEventListener("click", function () { ChangeTheme(); });
function ChangeTheme()
{

    if (wrapper.classList.contains("calculator--light")){
        wrapper.classList.remove("calculator--light");
        wrapper.classList.add("calculator--dark");
    }
    else {
        wrapper.classList.remove("calculator--dark");
        wrapper.classList.add("calculator--light");
    }
}

