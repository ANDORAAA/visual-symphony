import { signup } from '../fbServices/fbAuth';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CiMail, CiLock } from 'react-icons/ci';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const psw = formData.get('psw');
    signup(email, psw)
      .then((res) => {
        console.log('User registered:', res);
      })
      .catch((error) => {
        console.error('Signup error:', error.code, error.message);
      });
  };

  return (
    <div className='authentication'>
      <Form className='p-3' onSubmit={handleSubmit}>
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
              placeholder='Create password'
              required
            />
          </InputGroup>
        </Form.Group>

        <Button variant='outline-secondary' type='submit' className='w-100'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
