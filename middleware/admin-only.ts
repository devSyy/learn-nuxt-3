export default defineNuxtRouteMiddleware(() => {
  // const { isAdmin, isAuthenticated } = useAuthUser();
  const isAdmin = useAdmin();
  const isAuthenticated = useAuthenticated();

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});