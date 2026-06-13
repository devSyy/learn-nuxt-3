export default defineNuxtRouteMiddleware(() => {
  // const { isAuthenticated } = useAuthUser();
  // const isAuthenticated = useAuthenticated();
    const {isAuthenticated} = storeToRefs(useAuthStore());

  if (isAuthenticated.value) {
    return abortNavigation();
  }
});