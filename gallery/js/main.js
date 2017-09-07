//alert('main.js is linked');

//reveal() will show/hide the caption for each image
function reveal(id) {
        var caption = document.getElementById(id);
        var captionStyle = window.getComputedStyle(caption);
        switch (captionStyle.display) {
            case 'none':
                caption.style.display = 'block';
                break;
            case 'block':
                caption.style.display = 'none';
                break;
        }
}
