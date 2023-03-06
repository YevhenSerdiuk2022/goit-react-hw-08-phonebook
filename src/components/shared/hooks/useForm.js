import { useState } from "react";

const useForm =({initialState, onSubmit}) => {

    const [state, setState] = useState({...initialState});

 const handleChange = ({target}) => {
    const {name, value, type, checked} = target;
    const newValue =( type === "checkbox") ? checked : value;
    console.log(value);
    console.log(checked);
    setState(prevState => {
        return{...prevState, [name]: newValue}
    })
 }
 const handleSubmit = e => {
    e.preventDefault();
    onSubmit({...state});
    setState({...initialState});
 }
 return {state, setState, handleChange, handleSubmit}
}
export default useForm;