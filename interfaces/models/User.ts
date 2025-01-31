export interface IUser {
  id: number;
  name: string;
  raiting: number;
  reviews_count?: number;
  type: keyof typeof USER_TYPE;
  // type: "legal_entity" | "individual";
  created_at: Date;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
}
