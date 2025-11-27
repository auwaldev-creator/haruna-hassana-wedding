document.getElementById('download-btn').addEventListener('click', function() {
    const cardElement = document.getElementById('download-card');
    
    // An amfani da html2canvas don mayar da HTML zuwa Hoto
    html2canvas(cardElement, { scale: 2 }).then(function(canvas) {
        // Mayar da canvas zuwa Data URL (PNG format)
        const image = canvas.toDataURL("image/png");
        
        // Ƙirƙirar wani <a> element don download
        const link = document.createElement('a');
        link.href = image;
        link.download = 'Haruna_Hassana_Wedding_Card.png';
        
        // Danna link ɗin a ɓoye don fara downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
