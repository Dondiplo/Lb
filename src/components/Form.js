"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Container,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };
export const Form = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };
  
  const [formState, handleSubmit] = useForm("xleykzgj");
  const toast = useToast();
  const resetForm = () => {
    setState(initState);
    setTouched({});
  };

  return (
    <Container className="w-[20rem] pb-6 pt-12 md:pt-12">
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired
          isInvalid={touched.name && !values.name}
          style={{ borderColor: "#64748b" }}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          style={{ borderColor: "#64748b" }}
          paddingTop={4}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          style={{ borderColor: "#64748b" }}
          paddingTop={4}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            errorBorderColor="red.300"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          style={{ borderColor: "#64748b" }}
          paddingTop={4}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            rows={5}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>


        <Button 
        mt={10}
        variant="outline"
        colorScheme="purple" type="submit" 

  isLoading={isLoading || formState.submitting}
        disabled={!values.name || !values.email || !values.subject || !values.message}
        onClick={() => {
          
          toast({
            title: "Message sent.",
            description: "Your message has been successfully sent.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setTimeout(() => {
            resetForm();
          }, 1000);
        
        }}
        _hover={{
          bgColor: 'purple.900', 
          color: 'white', 
          border:"black"
        }}>
        Submit
      </Button>
        {/* <Button
  mt={10}
  variant="outline"
  colorScheme="purple"
  isLoading={isLoading || formState.submitting}
  disabled={!values.name || !values.email || !values.subject || !values.message}
  type="submit"
  onClick={() => {
    toast({
      title: "Message sent.",
      description: "Your message has been successfully sent.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    resetForm(); 
  }}
  _hover={{
    bgColor: 'purple.900', 
    color: 'white', 
    border:"black"
  }}
>
  Send
</Button> */}

      </form>



      {/* <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form> */}
    </Container>
  );
};


// xleykzgj