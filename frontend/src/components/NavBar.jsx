import { Link } from "react-router-dom"
import { useUserStore } from "../store/store"

const NavBar = () => {
    const { jwt } = useUserStore()
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link className="navbar-link" to={"/"}>
                            Домой
                        </Link>
                    </li>
                    {jwt ? (
                        <>
                            <li>
                                <Link
                                    className="navbar-link"
                                    to={"/my-messages"}
                                >
                                    Мои сообщения
                                </Link>
                            </li>
                            <li>
                                <Link className="navbar-link" to={"/logout"}>
                                    Выйти
                                </Link>
                            </li>
                        </>
                    ) : (
                        <Link className="navbar-link" to={"/signin"}>
                            Войти
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar