document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});

const loadVideos = () => {
    const imgs = document.getElementsByClassName('image-wrapper');
    for (item of imgs) {
        const imgItem = document.getElementById(item.id);
        (imgItem).addEventListener(
            "click",
            () => {
                playVideo(imgItem.id);
            })
    }
}

async function fetchContent(url) {
    const result = await new Promise(async(resolve) => {
        const data = fetch(url).then((res) => res.json());
        resolve(data);
    })
    return result;
};

const loadContent = async() => {
    const content = await fetchContent("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist");
    const side = document.getElementsByClassName('right-side')[0];
    content.forEach((item) => {
        const item_div = document.createElement('div');
        item_div.classList.add('image-wrapper');
        item_div.id = item.id;
        const imgTag = document.createElement('img');
        imgTag.src = item.thumbnail;
        const title = document.createElement('h4');
        title.innerText = item.title;
        item_div.appendChild(imgTag);
        item_div.appendChild(title);
        side.appendChild(item_div);
    })
    loadVideos();
};

const playVideo = async(id) => {
    const video = await fetchContent(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${id}`);
    let videoWrapper = document.getElementById('video_player');
    videoWrapper.src = `https://player.vimeo.com/video/${video.vimeoId}`;

    let views = document.getElementsByClassName('video-views')[0];
    views.innerText = `${(video.views/1000).toFixed(1)} K Views`;

    let vName = document.getElementsByClassName('video-name')[0];
    vName.innerText = `${video.title}`;

    let content = document.getElementsByClassName('content')[0];
    content.innerText = `${video.description}`;
};