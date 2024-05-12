document.getElementById('userForm').addEventListener('submit',function(event){
    event.preventDefault

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        
    };
    console.log(formData);
    alert('Form submitted successfully!')
})