import { useUserStore } from "../store/store"

export const registerUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/feedback/api/auth/register",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const loginUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/feedback/api/auth/login",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const fetchMessages = async () => {
    try {
        const req = await fetch("https://kitek.ktkv.dev/feedback/api/messages")
        const json = await req.json()
        return json
    } catch (err) {
        console.error(err)
    }
}

export const sendMessage = async (message) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(
            "https://kitek.ktkv.dev/feedback/api/messages",
            {
                method: "POST",
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + jwt.token,
                },
            }
        )
        console.log(await req.json())
    } catch (err) {
        console.error(err)
    }
}

export const deleteMessage = async (id) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(
            `https://kitek.ktkv.dev/feedback/api/messages/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + jwt.token,
                },
            }
        )
        console.log(await req.json())
    } catch (err) {
        console.error(err)
    }
}

export const reportMessage = async (id) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(
            `https://kitek.ktkv.dev/feedback/api/messages/${id}/report`,
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + jwt.token,
                },
            }
        )
        console.log(await req.json())
    } catch (err) {
        console.error(err)
    }
}

export const likeMessage = async (id) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(
            `https://kitek.ktkv.dev/feedback/api/messages/${id}/like`,
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + jwt.token,
                },
            }
        )
        console.log(await req.json())
    } catch (err) {
        console.error(err)
    }
}