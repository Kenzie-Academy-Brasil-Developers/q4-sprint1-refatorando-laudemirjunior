import * as yup from "yup";

export const companySchemaShape = yup.object().shape({
  name: yup
    .string("Formato de nome invalido")
    .required("Campo de name obrigatório"),
  cnpj: yup
    .string("Formato de cnpj invalido")
    .matches(/^[0-9]{14}$/)
    .required("Campo de cnpj obrigatório"),
  password: yup
    .string("Formato de senha invalido")
    .required("Campo de senha obrigatório"),
  cep: yup
    .string("Formato de cep invalido")
    .required("Campo de cep obrigatório"),
  address: yup
    .string("Formato de endereço invalido")
    .required("Campo de endereço obrigatório"),
  number: yup
    .number("Formato de número invalido")
    .required("Campo de número obrigatório")
    .positive("Formato de número invalido")
    .integer("Formato de número invalido"),
  state: yup
    .string("Formato de estado invalido")
    .matches(/^[A-Z]{2}$/)
    .required("Campo de estado obrigatório"),
  city: yup
    .string("Formato de cidade invalido")
    .required("Campo de cidade obrigatório"),
});
