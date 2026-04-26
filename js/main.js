 document.addEventListener('DOMContentLoaded', () => {
            initMobileNav();
            initGallery();
            initForm();
        });

        function initMobileNav() {
            const toggle= document.getElementById('mobileToggle');
            const nav = document.getElementById('navLinks');
            if (!toggle) return;

        
             toggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });

          const currentPage = location.pathname.split('/').pop()|| 'index.html';
          document.querySelectorAll('.nav-link').forEach(link =>{
            if(link.getAttribute('href') === currentPage){
                link.classList.add('active');
            }
        });
    }

        function initGallery() {
            const track = document.getElementById('track');
            const images = [
                'Images/Gk3PFQdWEAA03c_.jpg',
                '/Images/645051518_17943155427136534_935543487606393372_n.jpg',
                '/Images/670794605_17949497943136534_3053266089435366084_n.jpg',
                '/Images/671168687_17949815883136534_3149545247903108460_n.jpg'
            ];

            images.forEach(src => {
                const div = document.createElement('div');
                div.className = 'gallery-slide';
                const img = document.createElement('img');
                img.src = src;
                div.appendChild(img);
                track.appendChild(div);
            });

            let idx = 0;
            const moveSlide = () => {
                track.style.transform = `translateX(-${idx * 100}%)`;
            };

            document.getElementById('nextBtn').onclick = () => {
                idx = (idx + 1) % images.length;
                moveSlide();
            };
            document.getElementById('prevBtn').onclick = () => {
                idx = (idx - 1 + images.length) % images.length;
                moveSlide();
            };
        }

        function initForm() {
            const form = document.getElementById('contactForm');
            if(!form) return;
            const toast = document.getElementById('toast');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending...';
                
                setTimeout(() => {
                    toast.style.transform = 'translateY(0)';
                    form.reset();
                    btn.innerHTML = originalText;
                    setTimeout(() => toast.style.transform = 'translateY(150%)', 3000);
                }, 1000);
            });
        }