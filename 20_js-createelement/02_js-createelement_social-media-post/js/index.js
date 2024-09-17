console.clear();

function handleLikeButtonClick(event) {
	const buttonElement = event.target;
	buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
article.classList.add("post");

const p = document.createElement("p");
p.classList.add("post__content");
p.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
article.append(p);

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.innerHTML = "@username";
footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button-2");
button.innerHTML = "♥ Like";
footer.append(button);

article.append(footer);

document.body.append(article);

const newLikeButton = document.querySelector('[data-js="like-button-2"]');
newLikeButton.addEventListener("click", handleLikeButtonClick);
