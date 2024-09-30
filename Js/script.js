document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for your message!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Load More Button functionality
  document.getElementById('load-more').addEventListener('click', function() {
    const newPosts = `
      <article class="post">
        <h3>The Mysterious Owls</h3>
        <p>Dive into the world of nocturnal hunters - the owls...</p>
        <p class="date">Published on: Oct 10, 2024</p>
        <a href="posts/post3.html">Read More</a>
      </article>
  
      <article class="post">
        <h3>Saving the Tigers</h3>
        <p>An in-depth look at the conservation efforts to protect tigers...</p>
        <p class="date">Published on: Oct 15, 2024</p>
        <a href="posts/post4.html">Read More</a>
      </article>
    `;
  
    const postList = document.getElementById('post-list');
    postList.insertAdjacentHTML('beforeend', newPosts);
  
    // Optionally hide the button after loading more content
    this.style.display = 'none';
  });
  