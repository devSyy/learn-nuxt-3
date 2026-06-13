import { createPersistedState } from "pinia-plugin-persistedstate";
import { getUser } from "~/composables/auth/userData";
import type { UserWithoutPassword } from "~/types/user"

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<Maybe<UserWithoutPassword>>();

  const signIn = (email: string, password: string) => {
  
      console.log(email);
      console.log(password);
  
      const foundUser = getUser(email, password);
  
      console.log(foundUser);
  
      if(!foundUser){
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      };
  
      setUser(foundUser);
    };

    const setUser = (user: Maybe<UserWithoutPassword>) => (authUser.value = user);
 
    console.log("authUser", authUser);

    const signOut = () => setUser(null);

    return {
      user: authUser,
      isAuthenticated: computed(() => authUser.value),
      isAdmin: computed(() => !authUser.value ? false : authUser.value.roles.includes('ADMIN')),
      signIn,
      signOut,
    };    
  },
  {
      // persist: true,
      persist: {
        storage: piniaPluginPersistedstate.localStorage(),
      },
  },
)