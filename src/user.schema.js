import * as Yup from "yup";

export const addUser = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().required(),
        city: Yup.string().required(),
        country: Yup.string().required(),
        email: Yup.string().email().required(),
      }),
    },
  },
};

export const updateUser = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        email: Yup.string().email(),
      }),
    },
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number(),
      }),
    },
  },
};

export const getUser = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number(),
      }),
    },
  },
};

export const deleteUser = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number(),
      }),
    },
  },
};
