$(document).ready(function(){
  console.log('access v.15');

  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;

      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');

      console.log(`window.location.href ${window.location.href}`);
      console.log(`sURLVariables ${sURLVariables}`);

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          console.log(`sParameterName[0] ${sParameterName[0]}`);
          console.log(`sParam ${sParam}`);
          console.log(`sParameterName[0] === sParam ${sParameterName[0] === sParam}`);
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  const accessToken = getUrlParameter('access_token');
  console.log(accessToken);

  // $.ajax({
  //     url: 'https://api.spotify.com/v1/search?q=macklemore&type=artist',
  //     type: 'GET',
  //     headers: {
  //         'Authorization' : 'Bearer ' + accessToken
  //     },
  //     success: function(data) {
  //       console.log('Success');
  //       console.log(data);
  //     }
  // });

})
