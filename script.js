document.getElementById('mybutton1').addEventListener('click', function() {
  document.getElementById('output').textContent='button clicked!';
});

document.getElementById('submitbutton').addEventListener('click', function() {
  const textInputValue=documemt.getElementById('textInput').value;
document.getElementById('output1').textContent= textInputValue;
});
document.getElementById('search').addEventListener('click', function() {
  const textInputValue =documemt.getElementById('textInput1').value;
document.getElementById('output3').textContent= textInputValue;
});