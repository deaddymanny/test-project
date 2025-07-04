import type { User, UserFromDb } from "~/types/user.interface";



export const useAuth = () => {
  const user = useState<User>("user", () => {
    return {
      email: "",
      password: "",
      _id: ""
    }
  })

  async function login(email: string, password: string) {
    let userFromDb = await $fetch<UserFromDb>("http://localhost:3444/users/login",
      {
        method: "POST",
        body: {
          email,
          password
        } // { ...user.value } === user.value
      }
    )

    user.value._id = userFromDb?._id;
    user.value.email = userFromDb?.email;
    user.value.password = userFromDb?.password;
  }


  async function registration(email: string, password: string) {
    let userFromDb = await $fetch<UserFromDb>("http://localhost:3444/users/create",
      {
        method: "POST",
        body: {
          email,
          password
        } // { ...user.value } === user.value
      }
    )

    user.value._id = userFromDb?._id;
    user.value.email = userFromDb?.email;
    user.value.password = userFromDb?.password;


    console.log(userFromDb);
  }

  return {
    user: readonly(user),
    login,
    registration,
  }
}