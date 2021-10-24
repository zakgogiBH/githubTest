import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


interface FormInput {
  email: string, 
  password: string;
}

export default function App() {

  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [items, setItems] = useState([{}]);
  const { register, setValue, handleSubmit } = useForm<FormInput>();

  const RegisterForm = () => {
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput {...register('email')} />
        <Text>Password</Text>
        <TextInput {...register('password', { required: true})} />
        <DropDownPicker 
          items={items}
          open={open}
          value={currentValue}
          setOpen={setOpen}
          setValue={setCurrentValue}
          setItems={setItems}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
