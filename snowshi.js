const comingSoonDate = new Date(2024, 3, 10, 0, 0, 0).getTime();


const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = comingSoonDate - now;


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById('countdown').innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "스노우시 재오픈!";
  }
}, 1000);