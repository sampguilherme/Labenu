export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToProfilePage = (navigate, nome) => {
    navigate(`/profile/${nome}`)
}

export const goToLoginPage = (navigate) => {
    navigate(`/login`)
}