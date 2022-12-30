import { ROLE } from "../constants/user.constants";

export type CreateNewUserBodyDto = {
  name: string;
  email: string;
  password: string;
}
export type LoginUserBodyDto = {
  email: string;
  password: string;
}
export type CreateUserRequestBodyDto = {
  title: string;
  message: string;
}

export type ShortRequestDto = {
  id: number;
  title: string;
  isDone: boolean;
}
export type RequestDto = {
id: number;
isDone: boolean;
message: string;
title: string;
userId: 2
}

export type UsersForAdminDto = {
  total: number;
  name: string;
  password: string;
  email: string;
  requests: RequestDto[];
  role: ROLE;
  id: number;
}

export type CreateResponseBodyDto = {
  message: string;
}
