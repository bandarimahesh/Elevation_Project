import React, { useState } from "react";
import axios from "axios";
import {
  ProfileFormSect,
  ProfileFormSection,
  ProfileFormWrapper,
  FormInner,
  Form,
  Field,
  Input,
  InputButton,
  FormLabel,
  FormSelect,
  FormOption,
  FormInputFile,
  FormAddress,
  FormFlexDiv,
} from "./ProfileFormElements";
const ProfileForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  // const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");
  const [formShow, setFormShow] = useState(false);

  const profileSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("users/profile/update", {
        username: username,
        email: email,
        mobile: mobile,
        dob: dob,
        address: address,
        experience: experience,
        graduate: graduate,
        profession: profession,
      });
      console.log(res.data);
      res && window.location.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const formShowHandler = (event) => {
    setFormShow((prevState) => {
      return !prevState;
    });
  };
  return (
    <React.Fragment>
      <ProfileFormSect>
        <ProfileFormSection>
          <ProfileFormWrapper>
            <FormInner>
              <Form onSubmit={profileSubmitHandler}>
                <Field>
                  <Input
                    required
                    type="text"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    required
                    type="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <FormFlexDiv>
                  <Field>
                    <Input
                      required
                      type="number"
                      placeholder="Enter your Mobile Number"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <Input
                      required
                      min="1-1-1970"
                      type="date"
                      placeholder="Enter your password"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </Field>
                </FormFlexDiv>

                <Field>
                  <Input
                    required
                    type="number"
                    placeholder="Enter your Experience in Years"
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </Field>
                <Field>
                  <FormLabel>Education:</FormLabel>
                  <FormSelect
                    required
                    value={graduate}
                    onChange={(e) => setGraduate(e.target.value)}
                  >
                    <FormOption>Choose a below option</FormOption>
                    <FormOption value="1">Pursing</FormOption>
                    <FormOption value="2">Graduate</FormOption>
                    <FormOption value="2">Under Graduate</FormOption>
                    <FormOption value="4">Post Graduate</FormOption>
                  </FormSelect>
                </Field>
                <Field>
                  <FormLabel> Profession:</FormLabel>
                  <FormSelect
                    required
                    value={graduate}
                    onChange={(e) => setProfession(e.target.value)}
                  >
                    <FormOption>Choose a below option</FormOption>
                    <FormOption value="graduation">
                      Completed the graduation
                    </FormOption>
                    <FormOption value="trainer">
                      Looking for a trainer
                    </FormOption>
                    <FormOption value="job">Seeking for a job</FormOption>
                    <FormOption value="skills">
                      Learning a new skills
                    </FormOption>
                  </FormSelect>
                </Field>
                <Field>
                  <FormAddress
                    placeholder="Enter your Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Field>
                <FormInputFile required type="file" />
                <Field>
                  <InputButton type="submit" value="Update Profile" />
                </Field>
              </Form>
            </FormInner>
          </ProfileFormWrapper>
        </ProfileFormSection>
      </ProfileFormSect>
    </React.Fragment>
  );
};

export default ProfileForm;
