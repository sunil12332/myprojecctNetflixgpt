export const checkValidaData=(email,password,name)=>{
    
 const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isnamevalid=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
 

 if(!isEmailValid) return "Email ID is not valid";
 if(!isPasswordValid) return "Password is not valid";
 //if(!isnamevalid) return "Name is not valid";

 return null;
}