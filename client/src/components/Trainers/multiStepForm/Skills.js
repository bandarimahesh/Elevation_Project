import React from "react";
import { Field, Input } from "./JoinNowFormElements";

const Skills = ({ data, setData }) => {
  return (
    <>
      <h1>Title</h1>
      <Field>
        <Input
          type="email"
          placeholder="Enter your email"
          data={data.email}
          onChange={(event) => (setData.email = event.target.email)}
        />
      </Field>
    </>
  );
};

export default Skills;
