import { Link } from "react-router-dom"

function Error() {

    const TextError = "Oups! La page que \n vous demandez n'existe pas."

    return (
    <main className='error'>
        <h1 className='error_title'>404</h1>
        <p className='error_text' ErrorText>{TextError}</p>
        <Link className='error_link' to="/">
            Retourner sur la page d’accueil
        </Link>
    </main>
)
}

export default Error
