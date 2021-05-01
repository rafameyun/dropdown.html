function adjust() {
    const wrapper = document.querySelector(".wrapper");
    const top = wrapper.getBoundingClientRect().top;
    const content = document.querySelector(".content");
    const dropdownHeight = content.getBoundingClientRect().height;
    

    if (top < dropdownHeight) {
        content.classList.add("down");
    }
    else {
        content.classList.remove("down");
    }
}