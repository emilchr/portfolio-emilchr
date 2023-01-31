const toggleMode = () => {
    const toggle = document.body.getElementsByClassName("slider");
    const style = document.getElementById("mode");

        toggle.addEventListener('click', function{
            style.href = './resources/style_dark.css';
        })

}