
export default function decorate(block) {
  // Add a class to the block for styling
  block.classList.add('tabs');

  // Get the list items within the block
  const listItems = block.querySelectorAll('li');

  // Add a class to each list item for individual styling
  listItems.forEach((item) => {
    item.classList.add('tab-item');
  });

  // Add a class to each anchor tag for individual styling
  const anchors = block.querySelectorAll('a');
  anchors.forEach((anchor) => {
    anchor.classList.add('tab-link');
  });
}
