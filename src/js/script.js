// JavaScript to handle the loader
document.addEventListener('DOMContentLoaded', function () {
  // Set a minimum delay of 8 seconds
  setTimeout(function () {
    // Ensure full content is loaded
    window.addEventListener('load', function () {
      // Hide the loader
      document.getElementById('loader').classList.add('hidden');
      // Show the actual content
      document.getElementById('content').classList.remove('hidden');

      // Show the skeleton loader for 8 seconds
    //   setTimeout(function () {
    //     document.getElementById('skeletonLoader').classList.add('hidden');
    //     document.getElementById('actualContent').classList.remove('hidden');
    //   }, 8000);
    });
  }, 8000);
});
