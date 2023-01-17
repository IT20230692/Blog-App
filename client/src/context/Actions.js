export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    pauload: user,
});

export const LoginFailure = () => {
    type: "LOGIN_FAILURE"
}