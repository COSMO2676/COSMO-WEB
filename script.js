// Telegram Bot sozlamalari
const TELEGRAM_BOT_TOKEN = 'BOT_TOKENINI_SHUYERGA_YOZING';
const TELEGRAM_CHAT_ID = 'CHAT_IDNI_SHUYERGA_YOZING';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value;
            const phoneOrEmail = contactForm.querySelector('input[type="email"], input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;

            const text = 📥 *Yangi xabar (COSMO WEB)*:\n\n👤 *Ism:* ${name}\n📞 *Aloqa:* ${phoneOrEmail}\n💬 *Xabar:* ${message};

            try {
                const response = await fetch(https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: text,
                        parse_mode: 'Markdown'
                    })
                });

                if (response.ok) {
                    alert('Xabaringiz muvaffaqiyatli yuborildi!');
                    contactForm.reset();
                } else {
                    alert('Xabar yuborishda xatolik yuz berdi.');
                }
            } catch (error) {
                console.error(error);
                alert('Tarmoqda xatolik yuz berdi.');
            }
        });
    }
});
