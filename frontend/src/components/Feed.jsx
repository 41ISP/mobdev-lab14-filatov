import { useEffect } from "react"
import MessageCard from "./MessageCard"
import { useUserStore } from "../store/store"
import { useMessageStore } from "../store/useMessageStore"

const Feed = ({ myOwn = false }) => {
    const { messages, getMessages } = useMessageStore()
    const { jwt } = useUserStore()

    useEffect(() => {
        const handleFetch = async () => {
            try {
                getMessages()
            } catch (err) {
                console.error(err)
            }
        }
        handleFetch()
    }, [])

 
    const uniqueMessages = Array.from(
        new Map(
            (messages || [])
                .filter(m => m && m.id !== undefined && m.userId !== undefined)
                .map(m => [m.id, m])
        ).values()
    )

   
    const displayedMessages = myOwn
        ? uniqueMessages.filter(message => message.userId == jwt.userId)
        : uniqueMessages

    return (
        <div className="messages-section">
            <div className="container">
                <h2 className="section-title">Последние сообщения</h2>
                <div className="messages-grid">
                    {displayedMessages.length > 0 ? (
                        displayedMessages.map(message => (
                            <MessageCard key={message.id} {...message} />
                        ))
                    ) : (
                        <p>Сообщений пока нет.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Feed
