document.getElementById('languageToggle').addEventListener('click', function() {
    document.querySelectorAll('.en').forEach(el => el.style.display = 
        el.style.display === 'none' ? 'block' : 'none');
    document.querySelectorAll('.pt').forEach(el => el.style.display = 
        el.style.display === 'none' ? 'block' : 'none');
});