$(document).ready(function()
{
    let theme = document.querySelector("#theme");
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme)
    {
        theme.value = savedTheme;
        SetTheme(savedTheme);
    }
    else
    {
        theme.value = "light";
        SetTheme(theme.value);
    }
    theme.addEventListener("change", function()
    {
        SetTheme(theme.value);
        localStorage.setItem("theme", theme.value);
    });

    function SetTheme(Theme)
    {
        switch(Theme)
        {
            case "light":
                SetLightTheme("light");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-mono');
                $('.cor-clara').addClass('cor-clara-mono');
            break;
            case "dark":
                SetLightTheme("dark");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-mono');
                $('.cor-clara').addClass('cor-clara-mono');
            break;
            case "light-blue":
                SetLightTheme("light");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-azul');
                $('.cor-clara').addClass('cor-clara-azul');
            break;
            case "dark-blue":
                SetLightTheme("dark");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-azul');
                $('.cor-clara').addClass('cor-clara-azul');
            break;
            case "light-orange":
                SetLightTheme("light");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-laranja');
                $('.cor-clara').addClass('cor-clara-laranja');
            break;
            case "dark-orange":
                SetLightTheme("dark");
                RemoveColorTheme();

                $('.cor-prim').addClass('cor-prim-laranja');
                $('.cor-clara').addClass('cor-clara-laranja');
            break;
        }
    }
    function SetLightTheme(Light)
    {
        switch(Light)
        {
            case "light":
                $('.cor-tema').addClass('cor-tema-claro');
                $('.cor-text').addClass('cor-text-claro');
                $('.cor-tema').removeClass('cor-tema-escuro');
                $('.cor-text').removeClass('cor-text-escuro');
            break;
            case "dark":
                $('.cor-tema').addClass('cor-tema-escuro');
                $('.cor-text').addClass('cor-text-escuro');
                $('.cor-tema').removeClass('cor-tema-claro');
                $('.cor-text').removeClass('cor-text-claro');
            break;
        }
    }
    function RemoveColorTheme()
    {
        $('.cor-prim').removeClass('cor-prim-mono');
        $('.cor-clara').removeClass('cor-clara-mono');

        $('.cor-prim').removeClass('cor-prim-azul');
        $('.cor-clara').removeClass('cor-clara-azul');

        $('.cor-prim').removeClass('cor-prim-laranja');
        $('.cor-clara').removeClass('cor-clara-laranja');
    }
});

