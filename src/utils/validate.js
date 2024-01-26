 export const checkValidate= (email,password,name)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName = /[a-zA-Z]+\.?/.test(name);

    if(!isValidName) return "Full Name is not valid!";
    if(!isEmailValid) return "Email is not valid!";
    if(!isValidPassword) return "Password is not valid!";

    return null;
}