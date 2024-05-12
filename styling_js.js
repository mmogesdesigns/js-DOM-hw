function changeColor(){
    const box = document.getElementById('box');
    const currentColor = box.style.backgroundColor;
    box.style.backgroundColor = currentColor === 'blue' ? 'red' : 'blue';

} 
document.getElementById('buttonHover').addEventListener('mouseover', function (){
    this.style.backgroundColor = 'yellow';
});
document.getElementById('buttonHover').addEventListener('mouseout', function (){
    this.style.backgroundColor = '';
});
document.getElementById('hoverText').addEventListener('mouseover', function (){
    this.style.fontSize = '24px';
});
document.getElementById('hoverText').addEventListener('mouseout', function (){
    this.style.fontSize = "20px";
});

function toggleVisibility(){
    const elem = document.getElementById('resizeBox');
    const isVisible = elem.style.visibility !== 'hidden';
    elem.style.visibility = isVisible ? 'hidden' : 'visible';
}

function resizeBox() {
  const resizeDiv = document.getElementById("resizeBox");
  resizeDiv.style.width = "200px";
  resizeDiv.style.height = "200px";
  resizeDiv.removeEventListener("mouseover", resizeBox);
}