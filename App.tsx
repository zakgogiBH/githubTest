import { StatusBar } from 'expo-status-bar';
import { useForm, Controller } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


interface FormInput {
  email: string, 
  password: string;
}

export default function App(){
  const { control, register, handleSubmit, formState: { errors} } = useForm();
  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <View style={styles.container}>
      <Text>Input your email</Text>
      <Controller 
        control={control}
        rules={{
          required: true,
        }}
        render={({field: { onChange, value }}) => (
          <TextInput
            style={styles.textInput} 
            {...register('email')}
            onChangeText={onChange}
            value={value} 
          />
        )}
        name="email"
        defaultValue="" 
      />
      {errors.email && <Text>This is required.</Text>}
      <Text>Input your password</Text>
      <Controller 
        control={control}
        rules={{
          required: true,
        }}
        render={({field: { onChange, value }}) => (
          <TextInput
            style={styles.textInput}  
            {...register('password')}
            onChangeText={onChange}
            value={value} 
          />
        )}
        name="password"
        defaultValue="" 
      />
      {errors.password && <Text>This is required.</Text>}
      <Button title="submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}


// export default function App() {

//   const [open, setOpen] = useState(false);
//   const [currentValue, setCurrentValue] = useState(null);
//   const [items, setItems] = useState([{}]);
//   const { register, setValue, handleSubmit } = useForm<FormInput>();

//   const RegisterForm = () => {
//     return (
//       <View style={styles.container}>
//         <Text>Email</Text>
//         <TextInput {...register('email')} />
//         <Text>Password</Text>
//         <TextInput {...register('password', { required: true})} />
//         <DropDownPicker 
//           items={items}
//           open={open}
//           value={currentValue}
//           setOpen={setOpen}
//           setValue={setCurrentValue}
//           setItems={setItems}
//         />
//       </View>
//     )
//   }

//   return (
//     <View style={styles.container}>
//       <RegisterForm />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#d3d3d3',
    margin: 10,
    paddingLeft: 5,
  }
});
