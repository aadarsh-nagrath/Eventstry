// WebView.js
window.addEventListener('popstate', function(event) {
    // Send a message to React Native app indicating a back navigation event
    window.ReactNativeWebView.postMessage('popstate');
  });
  