const allPosts = document.querySelectorAll('.post');
    const allMiniPosts = document.querySelectorAll('.mini-post');
    const postsPerPage = 5;
    const miniPostsPerPage = 5;

    const totalPostPages = Math.ceil(allPosts.length / postsPerPage);
    const totalMiniPostPages = Math.ceil(allMiniPosts.length / miniPostsPerPage);

    let currentPostPage = 1;
    let currentMiniPostPage = 1;

    function displayPosts(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;

        allPosts.forEach((post, index) => {
            if (index >= start && index < end) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    function displayMiniPosts(page) {
        const start = (page - 1) * miniPostsPerPage;
        const end = start + miniPostsPerPage;

        allMiniPosts.forEach((miniPost, index) => {
            if (index >= start && index < end) {
                miniPost.style.display = 'block';
            } else {
                miniPost.style.display = 'none';
            }
        });
    }

    function displayPostPagination() {
        const paginationContainer = document.getElementById('post-pagination-container');
        paginationContainer.innerHTML = '';

        for (let page = 1; page <= totalPostPages; page++) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = page;
            link.href = '#';

            link.addEventListener('click', (event) => {
                event.preventDefault();
                currentPostPage = page;
                displayPosts(currentPostPage);
                updatePostPaginationStyles();
            });

            li.appendChild(link);
            paginationContainer.appendChild(li);
        }

        updatePostPaginationStyles();
    }

    function displayMiniPostPagination() {
        const paginationContainer = document.getElementById('mini-post-pagination-container');
        paginationContainer.innerHTML = '';

        for (let page = 1; page <= totalMiniPostPages; page++) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = page;
            link.href = '#';

            link.addEventListener('click', (event) => {
                event.preventDefault();
                currentMiniPostPage = page;
                displayMiniPosts(currentMiniPostPage);
                updateMiniPostPaginationStyles();
            });

            li.appendChild(link);
            paginationContainer.appendChild(li);
        }

        updateMiniPostPaginationStyles();
    }

    function updatePostPaginationStyles() {
        const postPaginationLinks = document.querySelectorAll('#post-pagination-container a');
        postPaginationLinks.forEach(link => {
            if (parseInt(link.textContent) === currentPostPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function updateMiniPostPaginationStyles() {
        const miniPostPaginationLinks = document.querySelectorAll('#mini-post-pagination-container a');
        miniPostPaginationLinks.forEach(link => {
            if (parseInt(link.textContent) === currentMiniPostPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    displayPosts(currentPostPage);
    displayMiniPosts(currentMiniPostPage);
    displayPostPagination();
    displayMiniPostPagination();