import React from "react";

import {
  NewsLetterSect,
  NewsLetterSection,
  NewsLetterTitle,
  NewsLetterWrapper,
  LineAfter,
  NewsLetterForm,
  Form,
  Input,
  SubscribeBtn,
  Text,
} from "./NewsLetterElements";

const NewsLetter = () => {
  return (
    <NewsLetterSect>
      <NewsLetterSection>
        <NewsLetterWrapper>
          <NewsLetterTitle>Subscribe to our newsletter</NewsLetterTitle>
          <LineAfter />
        </NewsLetterWrapper>
        <NewsLetterForm>
          <Form>
            <Input placeholder="Please enter your email address" />
            <br />
            <SubscribeBtn>Subscribe</SubscribeBtn>
          </Form>
          <Text>Subscribe to our newsletter get all courses updates!</Text>
        </NewsLetterForm>
      </NewsLetterSection>
    </NewsLetterSect>
  );
};

export default NewsLetter;
