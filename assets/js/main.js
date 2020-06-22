
class PlayGame {

    buildCards 
}

function begin() {
    const overlay = Array.from(document.getElementsByClassName('overlay-text'));
    const newGame = new PlayGame(); 

  overlay.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      newGame.buildCards();
    });
  });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', begin());
} else {
    begin();
}