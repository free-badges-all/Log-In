export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password need to have 6 or more characters"
    }

    return errors;
}