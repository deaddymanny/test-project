import type { User } from "~/types/user.interface";

export const useAuth = () => {
  const user = useState<User>("user", () => {
    return {
      email: "",
      password: ""
    }
  })


  function login(email: string, password: string) {
    user.value.email = email;
    user.value.password = password;
  }


  return {
    user: readonly(user),
    login,
  }
}