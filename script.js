window.addEventListener('load', () => {
  const videoElement = document.getElementById('video');

  // تلاش برای دسترسی به دوربین به صورت خودکار
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      videoElement.srcObject = stream;
    })
    .catch(err => {
      console.error('خطا در دسترسی به دوربین:', err);
    });
});
