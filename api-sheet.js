
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwurY-Rog4N199nWcB4xmerNKFbkgga9t9IFedQPY2XofrOpSd0vyTzhhJ-90XWfKKu/exec'
  // const form = document.forms['laporIT'];
  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');


  form.addEventListener('submit', e => {
    e.preventDefault()
    //ketika tombol submit diklik
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        myAlert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })
