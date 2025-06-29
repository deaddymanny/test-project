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


  function registration(email: string, password: string) {
    $fetch("http://localhost:3444/users/create",
      {
        method: "POST",
        body: {
          email,
          password
        } // { ...user.value } === user.value
      }
    )
  }

  return {
    user: readonly(user),
    login,
    registration,
  }
}