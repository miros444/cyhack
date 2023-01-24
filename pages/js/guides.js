const container = document.querySelector('.guides');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/guide';

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts)

    let template = ''
    posts.forEach(post => {
        template += `
            <div class="post">
                <h1>${post.title}</h1>
                <p>${post.content}</p>
            </div>
        `
    });

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => renderPosts());