import type { UserWithoutPassword } from "~/types/user"

export const useAuth = () => {
  // const authUser = ref<Maybe<UserWithoutPassword>>(null);
  const { authUser } = useAuthUser();


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
 
  console.log(authUser);

  const signOut = () => setUser(null);

  return {
    signIn, signOut
  }


}