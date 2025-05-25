document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi di halaman yang sama
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contoh: Efek kecil saat halaman dimuat (opsional)
    // Anda bisa menambahkan animasi fade-in atau sejenisnya
    const heroTitle = document.querySelector('.hero h1');
    const heroTagline = document.querySelector('.hero .tagline');
    const heroButton = document.querySelector('.hero .btn');

    if (heroTitle) {
        heroTitle.style.opacity = 0;
        heroTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroTitle.style.opacity = 1;
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    if (heroTagline) {
        heroTagline.style.opacity = 0;
        heroTagline.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTagline.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroTagline.style.opacity = 1;
            heroTagline.style.transform = 'translateY(0)';
        }, 500);
    }
    if (heroButton) {
        heroButton.style.opacity = 0;
        heroButton.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroButton.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroButton.style.opacity = 1;
            heroButton.style.transform = 'translateY(0)';
        }, 700);
    }

    // Anda bisa menambahkan JavaScript lain di sini untuk:
    // - Validasi form kontak (jika ada)
    // - Filter portofolio
    // - Toggle menu navigasi (jika ada mobile menu)
});