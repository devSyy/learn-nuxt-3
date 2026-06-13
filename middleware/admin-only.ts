export default defineNuxtRouteMiddleware(() => {
  // const { isAdmin, isAuthenticated } = useAuthUser();
  // const isAdmin = useAdmin();
  // const isAuthenticated = useAuthenticated();
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  console.log(" isAdmin, isAuthenticated ", isAdmin, isAuthenticated);

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});