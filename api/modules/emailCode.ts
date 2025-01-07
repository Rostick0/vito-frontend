import type { EmailCodeType } from "~/interfaces/models/User";
import useFetcher from "../../utils/fetch";

export interface IEmailCodesMethods {
  create: ({
    data,
  }: {
    data: {
      email: string;
      type: EmailCodeType;
    };
  }) => Promise<any>;
}

export default <IEmailCodesMethods>{
  create: async ({ data }) => useFetcher().post(`/email-code/`, data),
};
