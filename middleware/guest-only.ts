export default defineNuxtRouteMiddleware(() => {
  // const { isAuthenticated } = useAuthUser();
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated.value) {
    return abortNavigation();
  }
});