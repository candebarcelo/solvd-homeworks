const toggle = document.getElementById('toggle');
const githubIcon = document.getElementById('github-icon');
const twitterIcon = document.getElementById('twitter-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const youtubeIcon = document.getElementById('youtube-icon');

let theme = 'light';

const setDarkIcons = () => {
  toggle.src = './images/icons/dark-mode.svg';
  githubIcon.src = './images/icons/dark-github-icon.svg';
  twitterIcon.src = './images/icons/dark-twitter-icon.svg';
  linkedinIcon.src = './images/icons/dark-linkedin-icon.svg';
  youtubeIcon.src = './images/icons/dark-youtube-icon.svg';
};

const setLightIcons = () => {
  toggle.src = './images/icons/light-dark-mode.svg';
  githubIcon.src = './images/icons/github-icon.svg';
  twitterIcon.src = './images/icons/twitter-icon.svg';
  linkedinIcon.src = './images/icons/linkedin-icon.svg';
  youtubeIcon.src = './images/icons/youtube-icon.svg';
};

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (theme === 'dark') {
    setLightIcons();
    theme = 'light';
  } else if (theme === 'light') {
    setDarkIcons();
    theme = 'dark';
  }
});
