export default {
  name: 'twitch-status',
  initialize() {
    console.log("TWITCH STATUS LOADED");
    $(document).ready(function() {
      var userLogin = Discourse.SiteSettings.twitch_username;
      var apiUrl = "https://api.twitch.tv/helix/streams?user_login=" + userLogin;
      var clientId = Discourse.SiteSettings.twitch_client_id;

      $.ajax({
        url: apiUrl,
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Client-ID', clientId);},
        success: function(result) {
          if(result.data.length > 0) {
            $('a#twitch-status-link').show();
          }
        }
      });
    });
  }
};
