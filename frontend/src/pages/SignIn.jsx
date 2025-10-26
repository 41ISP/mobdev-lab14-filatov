import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import { useState } from "react"
import { loginUser } from "../api/api"
import { useUserStore } from "../store/store"

const SignIn = () => {
    const [error, setError] = useState("")
    const {setJWT} = useUserStore()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try {
            const json = await loginUser(user)
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
                <h1 className="auth-title">Вход</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input
                        placeholder="Имя пользователя"
                        required
                        name="username"
                    />
                    <Input
                        placeholder="Пароль"
                        required
                        name="password"
                        type="password"
                    />
                    <Button>Войти</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signup">Зарегистрироваться</Link>
                </footer>
            </div>
        </div>
    )
}

export default SignIn