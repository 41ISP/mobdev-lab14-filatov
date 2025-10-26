import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../api/api"
import { useUserStore } from "../store/store"

const SignUp = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setJWT } = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value != e.target.password2.value) {
            setError("Пароли не совпадают")
            return
        }

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        try {
            const json = await registerUser(user)
            if (!json.success) throw new Error(json.error)
            setJWT(json.token)
            navigate("/")
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input required placeholder="Имя пользователя" name="username" />
                    <Input required placeholder="Email" name="email" type="email" />
                    <Input required placeholder="Пароль" name="password" type="password" />
                    <Input required placeholder="Повторите пароль" name="password2" type="password" />
                    <Button>Зарегистрироваться</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signin">Войти</Link>
                </footer>
            </div>
        </div>
    )
}

export default SignUp