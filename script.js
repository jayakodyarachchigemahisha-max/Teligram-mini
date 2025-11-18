// Telegram WebApp init + behavior for official Monetag Mini-App method
(function(){
  // If loaded inside Telegram WebApp, Telegram object exists
  try {
    if (window.Telegram && Telegram.WebApp) {
      Telegram.WebApp.ready();
      // Optional: set main button or header
      Telegram.WebApp.MainButton.setText("Open Offer");
      Telegram.WebApp.MainButton.show();
      Telegram.WebApp.MainButton.onClick(function(){
        // Try to open the offer same as button
        openOffer();
      });
    }
  } catch (e) {
    console.log("Telegram WebApp not available:", e);
  }

  // Replace this with your Monetag direct link or landing URL.
  // For official Monetag Telegram Mini-App, you will provide a deep link like:
  // https://t.me/YourBot?startapp=yourapp  (Monetag might accept this format or the hosted URL)
  var MONETAG_LINK = "https://example-monetag-link.com/replace_me";

  function openOffer(){
    // Open in a new tab/window to avoid navigation issues in some WebViews
    var w = window.open(MONETAG_LINK, '_blank', 'noopener');
    if (!w) {
      // fallback: set location
      window.location.href = MONETAG_LINK;
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('open-offer');
    btn.addEventListener('click', function(e){
      e.preventDefault();
      openOffer();
    });

    var copyBtn = document.getElementById('copy-link');
    copyBtn.addEventListener('click', function(){
      // Construct the deep link for sharing (example)
      var botUsername = "YourBot"; // REPLACE with your bot username WITHOUT @
      var appName = "yourapp";     // REPLACE with your chosen app name
      var deep = "https://t.me/" + botUsername + "?startapp=" + appName;
      navigator.clipboard && navigator.clipboard.writeText(deep).then(function(){
        alert("Mini-App link copied:\n" + deep);
      }, function(){
        prompt("Copy this link:", deep);
      });
    });
  });
})();
