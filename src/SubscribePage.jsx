import React from 'react';
import { useForm } from 'react-hook-form';

export default function SubscribePage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Підписка:", data);
    alert(`Дякуємо за підписку, ${data.name}!`);
    reset();
  };

  return (
    <div style={containerStyle}>
      <h2>Підписка на новини</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <input
          type="text"
          placeholder="Ваше ім'я"
          {...register('name', { required: "Ім'я обов'язкове" })}
          style={inputStyle}
        />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Ваш Email"
          {...register('email', {
            required: "Email обов'язковий",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Невірний формат email"
            }
          })}
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}

        <button type="submit" style={buttonStyle}>Підписатися</button>
      </form>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '300px',
  margin: '0 auto',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const errorStyle = {
  color: 'red',
  fontSize: '14px'
};
