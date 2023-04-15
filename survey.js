document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var result = document.getElementById('result');
    var submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      var bodyVal = document.getElementById('body').value;
      var tanninsVal = document.getElementById('tannins').value;
      var sugarVal = document.getElementById('sugar').value;
      var acidVal = document.getElementById('acid').value;
  
      var bodyLetter = bodyVal < 43 ? 'L' : 'B';
      var tanninsLetter = tanninsVal < 43 ? 'V' : 'T';
      var sugarLetter = sugarVal < 43 ? 'D' : 'S';
      var acidLetter = acidVal < 43 ? 'M' : 'A';
  
      var buttonText = bodyLetter + tanninsLetter + sugarLetter + acidLetter;
      var buttonUrl;
  
      var urls = {
        BVSA: 'https://a-vinotype.vev.site/vinotype/results---bvsa/',
        BVDA: 'https://a-vinotype.vev.site/vinotype/results---bvda/',
        BVSM: 'https://a-vinotype.vev.site/vinotype/results---bvsm/',
        BVDM: 'https://a-vinotype.vev.site/vinotype/results---bvdm/',
        BTSA: 'https://a-vinotype.vev.site/vinotype/results---btsa/',
        BTDA: 'https://a-vinotype.vev.site/vinotype/results---btda/',
        BTSM: 'https://a-vinotype.vev.site/vinotype/results---btsm/',
        BTDM: 'https://a-vinotype.vev.site/vinotype/results---btdm/',
        LVSA: 'https://a-vinotype.vev.site/vinotype/results---lvsa/',
        LVDA: 'https://a-vinotype.vev.site/vinotype/results---lvda/',
        LVSM: 'https://a-vinotype.vev.site/vinotype/results---lvsm/',
        LVDM: 'https://a-vinotype.vev.site/vinotype/results---lvdm/',
        LTSA: 'https://a-vinotype.vev.site/vinotype/results---ltsa/',
        LTDA: 'https://a-vinotype.vev.site/vinotype/results---ltda/',
        LTSM: 'https://a-vinotype.vev.site/vinotype/results---ltsm/',
        LTDM: 'https://a-vinotype.vev.site/vinotype/results---ltdm/',
        default: 'https://a-vinotype.vev.site/vinotype/'
      };
      
      var buttonUrl = urls[buttonText] || urls.default;
      
  
      result.innerHTML = '';
      var button = document.createElement('button');
      button.innerText = buttonText;
      button.onclick = function() {
        window.location.href = buttonUrl;
      };
      button.style.display = 'block';
      button.style.margin = '0 auto';
      result.appendChild(button);
    });
  });


