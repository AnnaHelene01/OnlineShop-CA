import * as yup from 'yup';

export const contactSchema = yup
.object({
    fullName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .required('Please enter your first name.'),

    email: yup
      .string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email not validated correctly')
      .required('Please enter your email.'),

    subject: yup
    .string()
    .min(3, 'Your subject should be at least 3 characters.')
    .required('Please enter your subject.'),

    body: yup
    .string()
    .min(3, 'Your body should be at least 3 characters.')
    .required('Please write a body.'),
})
  .required();