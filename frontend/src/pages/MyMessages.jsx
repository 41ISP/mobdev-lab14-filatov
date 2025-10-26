import Feed from "../components/Feed"

const MyMessages = () => {
    return (
        <>
            <h1>Messages</h1>
            <Feed myOwn={true}/>
        </>
    )
}

export default MyMessages