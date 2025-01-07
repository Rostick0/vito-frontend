import type { RouteLocationRaw } from "vue-router";
// import { NavigateToOptions } from "vue-router";
import auth from "~/api/auth";
import type IUser from "~/interfaces/models/User";

interface IUserserGenerateToken {
  access_token: string;
  expires_in: number;
  token_type: "bearer";
  user: IUser;
}

export default async () => {
  const accessToken = useCookie<string | null>("accessToken", {
    maxAge: 60 * 60 * 24 * 7,
  });
  const user = useState<IUser | null>("user", () => null);

  const setUser = (resp: IUserserGenerateToken) => {
    user.value = resp?.user;
    accessToken.value = resp?.access_token;
  };

  const login = async (data: any, isRedirect = true) => {
    try {
      const resp = await auth.login(data);
      // if (resp?.error) resp?.popup();
      if (resp?.error) {
        return resp?.errorResponse?.data;
      }

      setUser(resp?.data);

      if (isRedirect) {
        navigateTo(ROUTES_NAMES.profile);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (data: any, isRedirect = true) => {
    try {
      const resp = await auth.register(data);
      // if (resp?.error) resp?.popup();
      if (resp?.error) {
        return resp?.errorResponse?.data;
      }

      setUser(resp?.data);
      if (isRedirect) {
        navigateTo(ROUTES_NAMES.profile);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      await auth
        .me(
          //   {
          //     // extends:
          //     //   "contacts,country,image,flat_owners.user,alert,collection_relats.collection",
          //   },
          {},
          { Authorization: `Bearer ${accessToken.value}` }
        )
        .then((resp) => {
          if (!resp?.error && resp?.data) {
            user.value = resp?.data;
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = (
    params?: RouteLocationRaw | null | undefined
    // options?: NavigateToOptions | undefined
  ) => {
    accessToken.value = null;
    user.value = null;

    if (params) {
      navigateTo(params);
    } else {
      navigateTo(ROUTES_NAMES.login);
    }
  };

  // if (accessToken.value && !user.value) {
  //   await getUser();
  // }

  return {
    accessToken,
    user,
    login,
    register,
    getUser,
    logout,
  };
};
