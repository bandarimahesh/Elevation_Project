import React, { useState } from "react";
import Skills from "./Skills";
import ExpYears from "./ExpYears";
import {
  Field,
  Form,
  NextButton,
  PrevButton,
  RegisterFormSect,
  RegisterFormSection,
  RegisterFormWrapper,
} from "./JoinNowFormElements";
import NoOfHrs from "./NoOfHrs";
import Certifications from "./Certifications";

const JoinNowForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    email: "",
    experience: 0,
  });
  console.log(data);
  const showDiffForm = () => {
    if (page === 0) {
      return <Skills data={data} setData={setData} />;
    } else if (page === 1) {
      return <ExpYears data={data} setData={setData} />;
    } else if (page === 2) {
      return <NoOfHrs data={data} setData={setData} />;
    } else if (page === 3) {
      return <Certifications data={data} setData={setData} />;
    }
  };
  const joinNowFormHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <RegisterFormSect>
      <RegisterFormSection>
        <RegisterFormWrapper>
          <Form onSubmit={joinNowFormHandler}>
            <div>{showDiffForm()}</div>
            <Field>
              <PrevButton
                disabled={page === 0}
                onClick={() => setPage((currPage) => currPage - 1)}
              >
                Previous
              </PrevButton>
              {page === 3 ? (
                <NextButton>Submit</NextButton>
              ) : (
                <NextButton onClick={() => setPage((currPage) => currPage + 1)}>
                  Next
                </NextButton>
              )}
            </Field>
          </Form>
        </RegisterFormWrapper>
      </RegisterFormSection>
    </RegisterFormSect>
  );
};

export default JoinNowForm;
