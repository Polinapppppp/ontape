document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.filter_tab');
    const contents = document.querySelectorAll('.cases--content');

    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
            });
        });
    }

    const cardGroups = document.querySelectorAll('.text_block__v12--cards');
    cardGroups.forEach(group => {
        const cards = group.querySelectorAll('.stack_card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                group.classList.toggle('active');
            });
        });
    });

    if (typeof Swiper !== 'undefined') {
        const forwardSlider = document.querySelector('.partners_slider--forward');
        const reverseSlider = document.querySelector('.partners_slider--reverse');

        const config = {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: true,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            },
            allowTouchMove: false,
            watchSlidesProgress: true,
        };

        if (forwardSlider) {
            new Swiper(forwardSlider, { ...config });
        }

        if (reverseSlider) {
            new Swiper(reverseSlider, {
                ...config,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: false,
                }
            });
        }
    }

    const cookieModal = document.getElementById('cookieModal');
    if (cookieModal) {
        const cookieClose = cookieModal.querySelector('.cookie-modal__close');
        const cookieAcceptBtn = cookieModal.querySelector('.js-cookie-accept');
        const isCookieAccepted = localStorage.getItem('cookieAccepted');

        if (!isCookieAccepted) {
            setTimeout(() => {
                cookieModal.classList.add('active');
            }, 1000);
        }

        function acceptCookies() {
            cookieModal.classList.remove('active');
            localStorage.setItem('cookieAccepted', 'true');
        }

        if (cookieAcceptBtn) cookieAcceptBtn.addEventListener('click', acceptCookies);
        if (cookieClose) cookieClose.addEventListener('click', acceptCookies);
    }

    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const headerInner = document.querySelector('.header__inner');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                if(headerInner) headerInner.style.background = '#131B1FB2';
                document.body.style.overflow = 'hidden';
            } else {
                if(headerInner) headerInner.style.background = '#00000025';
                document.body.style.overflow = '';
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('.nav__link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                if(headerInner) headerInner.style.background = '#00000025';
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                if(headerInner) headerInner.style.background = '#00000025';
                document.body.style.overflow = '';
            }
        });
    }

    const modal = document.getElementById('popupModal');
    const closeBtn = document.getElementById('closePopupBtn');
    const openButtons = document.querySelectorAll('.js-open-modal');

    if (modal) {
        function openModal(e) {
            if (e) e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (openButtons.length > 0) {
            openButtons.forEach(btn => {
                btn.addEventListener('click', openModal);
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});