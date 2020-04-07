class Name {
    nameDisplayCheck() {
        if(localStorage.getItem('firstName')) {
            let firstName = localStorage.getItem('firstName');
            let lastName = localStorage.getItem('lastName');

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;

        }
    }
}