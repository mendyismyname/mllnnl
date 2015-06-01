   (function () {

  var links = document.getElementsByClassName("links"),
  templateDiv = document.getElementById("template"),
  nav = document.querySelector('nav > ul'),
  clicked = false, viewCount = { home: 2, about: 1, contact: 1 };

  function clickHandler(e) {
    var target = event.target,
    templateName = this.getAttribute("data-template");
    if(clicked) {
      clicked.removeAttribute('class');
    }
    else {
      nav.querySelector('.active').removeAttribute('class');
    }
    target.parentElement.setAttribute('class','active');
    clicked = target.parentElement;

    dust.render(templateName, viewCount, function (err, out) {
      if(err) console.log('Error:',err);
      else {
        viewCount[templateName]++;
        templateDiv.innerHTML = out;
      }
    });
  };

  for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', clickHandler, false);
  }

})();
