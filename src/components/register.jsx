import { Form, Button, InputGroup } from 'react-bootstrap';
import { CiMail, CiLock } from 'react-icons/ci';

const Register = () => {
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
              placeholder='Create password'
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check type='checkbox' label='Remember me' />
        </Form.Group>

        <Button variant='outline-secondary' type='submit' className='w-100'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
