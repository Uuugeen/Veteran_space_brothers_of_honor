const PAGE_ID = '406148552576817';
const ACCESS_TOKEN = 'EAAdYBGCUjsABO13MyYGWOGOaXlCTAVUjvwsp6GpYy6Ggh2NWhSxApBCy4Sgb4wW5C8Ati2MZBpRJUtTCZCZB90IgwGyuWZBSjKB3ZCMO3IJKo8e1ZAk6fsmJQ97MoiCOHPSrUHOiwINBsZAeZBC5ev3YZAJqkc6R4JAGAzNeWbXQN84ZCby5RnPuBCZBfnaPGOozUFXs63CeZAcG'; 
const LIMIT = 3;

async function fetchFacebookPosts() {
    try {
        const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=message,created_time,permalink_url,attachments{media,type,url,subattachments}&limit=${LIMIT}&access_token=${ACCESS_TOKEN}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error('Помилка Facebook API:', data.error.message);
            document.getElementById('news-feed').innerHTML = `<p style="color:red;">${data.error.message}</p>`;
            return;
        }

        displayPosts(data.data);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
        document.getElementById('news-feed').innerHTML = `<p style="color:red;">Помилка підключення до Facebook API</p>`;
    }
}

function displayPosts(posts) {
    const container = document.getElementById('news-feed');
    container.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('news__card');

        let mediaContent = '';
        let mediaItems = [];

        const processAttachment = (attachment) => {
            const type = attachment.type;
            const media = attachment.media;
            const url = attachment.url;

            if (type === 'photo' && media?.image?.src) {
                mediaItems.push(`<img src="${media.image.src}" alt="Зображення">`);
            } else if (type.startsWith('video') && url) {
                mediaItems.push(`
                    <iframe 
                        src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=false" 
                        style="border:none;overflow:hidden;"
                        scrolling="no" frameborder="0" allowfullscreen allow="autoplay; encrypted-media">
                    </iframe>
                `);
            }
        };

        if (post.attachments?.data?.length > 0) {
            post.attachments.data.forEach(attachment => {
                processAttachment(attachment);

                if (attachment.subattachments?.data?.length > 0) {
                    attachment.subattachments.data.forEach(sub => processAttachment(sub));
                }
            });
        }

        if (mediaItems.length > 1) {
            const sliderId = `slider-${index}`;
            mediaContent = `
                <div class="slider" id="${sliderId}">
                    ${mediaItems.map((item) => `
                        <div class="slide">
                            ${item}
                        </div>
                    `).join('')}
                </div>
            `;

            
            setTimeout(() => autoSlide(sliderId), 500);
        } else {
            mediaContent = `
                <div class="slider">
                    <div class="slide show">
                        ${mediaItems[0]}
                    </div>
                </div>
            `;
        }

        postElement.innerHTML = `
            <div class="news__item">
                ${mediaContent}
                <p><a href="${post.permalink_url}" target="_blank" class="news__link">Переглянути пост</a></p>
            </div>
        `;
        container.appendChild(postElement);
    });
}

function autoSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.getElementsByClassName('slide');
    let currentIndex = 0;

    slides[currentIndex].classList.add('show');

    setInterval(() => {
        slides[currentIndex].classList.remove('show');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('show');
    }, 5000); // кожні 5 секунд
}


fetchFacebookPosts();
