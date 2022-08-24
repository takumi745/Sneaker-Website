$(function() {
  $('.toggle_btn').on('click', function() {
  
    if ($('#header').hasClass('open')) {
    
      $('#header').removeClass('open');
    
    } else {
    
      $('#header').addClass('open');
    }
  });
      
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      // 監視対象から外す
      obs.unobserve(entry.target);
    })
  }

  const options = {
      threshold: 0.2,
  };

  // Intersection Observer APIのインスタンスを取得する
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
      observer.observe(target);
  });
});