import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { jwtDecode } from "jwt-decode"

export const useUserStore = create()(
    persist(
        (set, get) => ({
            jwt: undefined,
            setJWT: (jwt) =>
                set((state) => ({
                    ...state,
                    jwt: { token: jwt, ...jwtDecode(jwt) },
                })),
            clearJWT: () => set((state) => ({ ...state, jwt: undefined })),
        }),
        {
            name: "user",
            storage: createJSONStorage(() => localStorage),
        }
    )
)