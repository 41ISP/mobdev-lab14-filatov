import { create } from "zustand"
import { fetchMessages } from "../api/api"

export const useMessageStore = create((set, get)=> ({
    messages: undefined,
    getMessages: async () => {
        const data = await fetchMessages()
        set((oldStore) => ({...oldStore, messages: data}))
    }
}))