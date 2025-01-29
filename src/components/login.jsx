import { Form, Button, InputGroup } from 'react-bootstrap';
import { CiMail, CiLock } from 'react-icons/ci';

const Login = () => {
  return (
    <div className='authentication'>
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

        <Form.Group className='mb-3 d-flex justify-content-between'>
          <Form.Check type='checkbox' label='Remember me' />
          <a href='#' style={{ color: '#333' }}>
            Forgot password?
          </a>
        </Form.Group>

        <Button variant='outline-secondary' type='submit' className='w-100'>
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
