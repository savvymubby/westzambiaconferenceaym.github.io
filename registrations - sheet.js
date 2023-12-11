 const scriptURL = 'https://script.google.com/macros/s/AKfycbwILH-NV_9WgxBdDkgmO-D4rT3lMYbfsGXzOnH_xGpgn-YOD_cmoP7WliUOO2mAduk2tA/exec'

 const form = document.forms['registrations']

 form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {  method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! Your registration details have been submitted successfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
}
 )
