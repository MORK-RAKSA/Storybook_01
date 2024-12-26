/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import TextField from '@/components/TextField/TextField'
import { Button } from '@/stories/Button'
import React from 'react'
import {useState} from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Form submitted:', formData);

    setFormData({
      name: ''
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField width='small' label='input name' value={formData.name} onChange={handleChange}/>
        <Button label={'Save'}></Button>
      </form>
    </div>
  ) 
}

export default page