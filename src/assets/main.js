const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC57lj_QEP3dF0gZrPbF0deA&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd8daab7f55msh8e1a2a51959f9e4p194c9bjsn22b29acbf528',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;

}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `<div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
    </div>`).slice(0, 4).join('')}
        `;

        content.innerHTML = view;

    }
    catch (error) {
        alert(error);
        console.log(error);
    }

})();


