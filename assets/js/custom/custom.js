  $("#btn-print-version").click(function(){
  			
  		  $("#btn-website-version").show();
  		  $(this).hide();

  		  changeCSS('./assets/css/custom/custom-print-style.css', 0);

  });

  $("#btn-website-version").click(function(){

  		  $("#btn-print-version").show();
  		  $(this).hide();

  		  changeCSS('./assets/css/custom/custom-style.css', 0);

  });



  function changeCSS(cssFile, cssLinkIndex) {

      var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

      var newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute("type", "text/css");
      newlink.setAttribute("href", cssFile);

      document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }  

