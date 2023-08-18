const handleLoading = setLoading => {
    const onPageLoad = () => setLoading(false)

    if (document.readyState === "complete") {
        onPageLoad();
    } else {
        window.addEventListener("load", onPageLoad);
        return () => window.removeEventListener("load", onPageLoad);
    }
}

export default handleLoading;