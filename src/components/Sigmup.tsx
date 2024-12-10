import axios from "axios";

type Props = {
    id: string;
    labelText: string;
    inputType: 'user' | 'email' | 'password'; 
    value: string;
    onChange: (value: string) => void;
  };
  
  function LabelWithInput({ id, labelText, inputType, value, onChange }: Props) {
    return (
      <div>
        <label htmlFor={id}>{labelText}</label>
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }
  
  export default LabelWithInput;
  
  async function loginUser(email: string, password: string) {
    try {
      const response = await axios.post('https://dogs.kobernyk.com/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }