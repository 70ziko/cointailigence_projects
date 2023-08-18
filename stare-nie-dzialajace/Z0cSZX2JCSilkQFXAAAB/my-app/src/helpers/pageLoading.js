function showLoadingScreen() {
    // Get the loading screen element
    let loadingScreen = document.getElementById('loading-screen');

    // Show the loading screen
    if (loadingScreen) loadingScreen.style.display = 'block';
}

function hideLoadingScreen() {
    // Get the loading screen element
    let loadingScreen = document.getElementById('loading-screen');

    // Hide the loading screen
    if (loadingScreen) loadingScreen.style.display = 'none';
}

function handlePageLoading() {
    // Show the loading screen
    showLoadingScreen();

    // Check the loading status of the document
    if (document.readyState === 'complete') {
        // If the document has finished loading, hide the loading screen
        hideLoadingScreen();
    } else {
        // If the document is still loading, set up an event listener to hide the loading screen once the page has finished loading
        window.onload = hideLoadingScreen;
    }
}

export default handlePageLoading;
