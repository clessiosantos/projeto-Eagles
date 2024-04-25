
import './index.css'
import {Formik, Form, Field, ErrorMessage  } from "formik";
import * as yup from "yup";
import Logo from "../../Pages/image/Logo.png";


function Login() {

  const handleClickLogin = (values) => console.log(values);
  
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("este campo é obrigatório"),
    password: yup.string().min(8, "A Senha deve conter 8 caracteres").required("este campo é obrigatório"),
  });

  

  return (
    <div>
    <div className="Esquerdo">
       <img className='Img' src={Logo} alt="Logo do Site" title="Logo do Site"/>
    </div>
    <div className="App">
       <div className="Esquerdo">
       <img className='Img' src={Logo} alt="Logo do Site" title="Logo do Site"/>
    </div>
   
     <h1> Seja Bem Vindo </h1>
     <Formik initialValues={{}} onSubmit={handleClickLogin}
     validationSchema={validationLogin}>
     <Form className="login-form">
     <div className="login-form-group">
     <Field name="email" className="form-field" placeHolder="Email"/>

     <ErrorMessage 
     Component="span"
     name="email"
     className="form-error"
     />
     </div>
     <div className="login-form-group">
     <Field name="password" className="form-field" placeHolder="Senha"/>

     <ErrorMessage 
     Component="span"
     name="password"
     className="form-error"
     />
     </div>
     <button className="button" type="submit">Login</button>
     <button className="button" type="submit">Voltar</button>


     </Form>
     </Formik>
    </div>
    </div>

    
  );
}

export default Login;
