async function fetchPosts() {
	const data = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10')

	// Your async/await code here
    .then((response) => response.json())
    .then((json) => console.log('PROMISES:', json))
    .catch((err) => console.log('err:', err));

}

// Call the function to fetch posts
fetchPosts();