const navigation = document.querySelector(".navbar");
if (navigation) {
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
    );
}