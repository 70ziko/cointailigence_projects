const handleLoading = setLoading => {
    const onPageLoad = () => {
        try {
            setLoading(false);
        } catch (error) {
            console.error("Failed to update loading state:", error);
        }
    }

    if (document.readyState === "complete") {
        onPageLoad();
    } else {
        window.addEventListener("load", onPageLoad);
        return () => {
            try {
                window.removeEventListener("load", onPageLoad);
            } catch (error) {
                console.error("Failed to remove load event listener:", error);
            }
        }
    }
}

export default handleLoading;
