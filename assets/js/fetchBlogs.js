document.addEventListener("DOMContentLoaded", function () {
  fetch("./blogs/blog-posts.json")
    .then((response) => response.json())
    .then((blogPosts) => {
      const blogPostsList = document.getElementById("blog-posts-id");
      blogPosts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.className = "blog-post-item";

        const link = document.createElement("a");
        link.href = "#";

        const figure = document.createElement("figure");
        figure.className = "blog-banner-box";

        const img = document.createElement("img");
        img.src = post.imgSrc;
        img.alt = post.alt;
        img.loading = post.loading;

        figure.appendChild(img);

        const blogContent = document.createElement("div");
        blogContent.className = "blog-content";

        const blogMeta = document.createElement("div");
        blogMeta.className = "blog-meta";

        const category = document.createElement("p");
        category.className = "blog-category";
        category.textContent = post.category;

        const dot = document.createElement("span");
        dot.className = "dot";

        const time = document.createElement("time");
        time.datetime = post.date;
        time.textContent = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        blogMeta.appendChild(category);
        blogMeta.appendChild(dot);
        blogMeta.appendChild(time);

        const title = document.createElement("h3");
        title.className = "h3 blog-item-title";
        title.textContent = post.title;

        const text = document.createElement("p");
        text.className = "blog-text";
        text.textContent = post.text;

        blogContent.appendChild(blogMeta);
        blogContent.appendChild(title);
        blogContent.appendChild(text);

        link.appendChild(figure);
        link.appendChild(blogContent);

        listItem.appendChild(link);

        blogPostsList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching blog posts:", error));
});


