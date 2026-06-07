import type { UserWithoutPassword } from '~/types/user';

// 전역으로 상태관리하기 위해 임시로 위치 이동 공식 상태 lib 또는 useState 사용
	// const authUser = ref<Maybe<UserWithoutPassword>>(null);

  export const useAuthUser = () => useState<Maybe<UserWithoutPassword>>('user', () => null);

// export const useAuthUser = () => {
// 	// const authUser = ref<Maybe<UserWithoutPassword>>(null);
//   const isAuthenticated = computed(() => !!authUser.value);
//   const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));
//   return { authUser, isAuthenticated, isAdmin };
// };