import { sendMessage } from "../api/api"
import { useMessageStore } from "../store/useMessageStore"
import Button from "./Button"
import TextArea from "./TextArea"

const MessageField = () => {
    const { getMessages } = useMessageStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const message = { content: e.target.content.value }
            await sendMessage(message)
            getMessages()
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Создать сообщение</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="create-message-form"
                    >
                        <TextArea
                            placeholder="Поделитесь мнением"
                            name="content"
                        />
                        <Button>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageField