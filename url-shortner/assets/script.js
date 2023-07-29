document.getElementById('shorten-btn').addEventListener('click', function () {
    const longUrl = document.getElementById('long-url').value;
    const shortUrl = generateShortUrl(longUrl);
    displayShortUrl(shortUrl);
});

function generateShortUrl(longUrl) {
     // For simplicity, I'll just append a random string to the domain
    const domain = 'https://short.url/';
    const randomString = Math.random().toString(36).substring(7);
    return domain + randomString;
}

function displayShortUrl(shortUrl) {
    const shortLink = document.getElementById('short-link');
    shortLink.href = shortUrl;
    shortLink.textContent = shortUrl;
    document.getElementById('short-url-container').style.display = 'block';
}
