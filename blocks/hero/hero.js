
export default function decorate(block) {
  // Add a class to the block
  block.classList.add('hero');

  // Create a wrapper div for the text content
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-content');
  
  // Move all inner elements of block to contentWrapper
  while (block.firstChild) {
    contentWrapper.appendChild(block.firstChild);
  }
  
  // Add the contentWrapper back to the block
  block.appendChild(contentWrapper);
  
  // Create a new div for the image and append the image to it
  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('hero-image');
  const img = contentWrapper.querySelector('img');
  if (img) {
    imgWrapper.appendChild(img);
  }

  // Insert the imgWrapper before the contentWrapper
  block.insertBefore(imgWrapper, contentWrapper);
}
