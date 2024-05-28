// Scroll to the bottom of the page when it loads
// window.onload = function() {
//     document.getElementById('bottom').scrollIntoView();
// };

document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to the bottom of the main div
    function scrollToBottom() {
        var mainDiv = document.querySelector("main");
        mainDiv.scrollTop = mainDiv.scrollHeight;
    }

    // Call the scrollToBottom function when the page loads
    scrollToBottom();
});

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea');

    // Adjust the height of the textarea automatically
    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = `${this.scrollHeight}px`;
    });
  });