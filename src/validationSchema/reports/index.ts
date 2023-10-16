import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
