
const progressContainer = document.querySelector('.progress-container');
const progress = Array.from(document.querySelectorAll('.progress'));
const status = document.querySelector('.status');  

const playNext = (e) => {
  const current = e && e.target;
  let next;

  if (current) {
    const currentIndex = progress.indexOf(current);
    if (currentIndex < progress.length) {
      next = progress[currentIndex+1];
    }
    current.classList.remove('active');
    current.classList.add('passed');
  } 
  
  if (!next) {
    progress.map((el) => {
      el.classList.remove('active');
      el.classList.remove('passed');
    })
    next = progress[0];
  } 
  next.classList.add('active'); 
  
  status.innerText = 'Current: ' + progress.indexOf(next);
}

const clickHandler = (e) => {
  const index = Math.floor(e.offsetX / (progressContainer.clientWidth/progress.length));
  status.innerText = "Clicked " + index;
}

progress.map(el => el.addEventListener("animationend", playNext, false));
progressContainer.addEventListener("click", clickHandler, false);

playNext();