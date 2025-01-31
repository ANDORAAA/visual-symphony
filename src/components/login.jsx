import { login, resetPassword } from '../fbServices/fbAuth';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CiMail, CiLock } from 'react-icons/ci';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const psw = formData.get('psw');

    login(email, psw)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgetPsw = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    resetPassword(email);
  };

  return (
    <div className='authentication' onSubmit={handleSubmit}>
      <Form className='p-3'>
        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <CiMail />
            </InputGroup.Text>
            <Form.Control type='email' placeholder='Enter email' required />
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <CiLock />
            </InputGroup.Text>
            <Form.Control
              type='password'
              placeholder='Enter password'
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3 d-flex justify-content-end'>
          <Button variant='outline-secondary btn-sm' onClick={handleForgetPsw}>
            Forgot password?
          </Button>
        </Form.Group>

        <Button variant='outline-secondary' type='submit' className='w-100'>
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
