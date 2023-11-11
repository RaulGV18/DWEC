document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('username').onchange = function (){
        var username = document.getElementById('username').value;
      
        var lowercaseRegex = /[a-z]/;
        var uppercaseRegex = /[A-Z]/;
        var minLengthRegex = /[A-Za-z0-9]{6,}/;
      
        var lowercaseTest = lowercaseRegex.test(username);
        var uppercaseTest = uppercaseRegex.test(username);
        var minLengthTest = minLengthRegex.test(username);
      
        document.getElementById('lowercase').className = lowercaseTest ? '' : 'error';
        document.getElementById('uppercase').className = uppercaseTest ? '' : 'error';
        document.getElementById('minLength').className = minLengthTest ? '' : 'error';
      
        document.querySelector('input[type="submit"]').disabled = !(lowercaseTest && uppercaseTest && minLengthTest);
    };
});