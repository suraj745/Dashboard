const isLoggedIn = () => {
    let token = localStorage.getItem('token');
    return token
}

export default isLoggedIn()