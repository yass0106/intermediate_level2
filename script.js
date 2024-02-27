function RandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generate() {
    const captchaDiv = document.getElementById('captcha');
    const captchaText = RandomString(5); 
    captchaDiv.textContent = captchaText;
}

function check() {
    const userInput = document.getElementById('input').value;
    const captchaText = document.getElementById('captcha').textContent;

    if (userInput === captchaText) {
        alert('Captcha validation successful!'); 
        generate(); 
    } else {
        alert('Captcha validation failed. Please try again.');
        generate(); 
    }
}

generate();

function refresh() {
    generate();
    document.getElementById('input').value = ''; 
}

