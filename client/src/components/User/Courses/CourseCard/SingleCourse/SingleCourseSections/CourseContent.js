import React from "react";
import {
  CourseContSect,
  CourseContSection,
  CourseContSectWrapper,
  CourseContentTitle,
  UlMenuContent,
  LieMenuContent,
  CourseContSectWrapper2,
} from "./CourseContentElements";

const CourseContent = () => {
  return (
    <CourseContSect>
      <CourseContSection>
        <CourseContSectWrapper>
          <CourseContentTitle>Course Content</CourseContentTitle>
          <UlMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
          </UlMenuContent>
        </CourseContSectWrapper>
        <CourseContSectWrapper2>
          <CourseContentTitle>Requirements</CourseContentTitle>
          <UlMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
            <LieMenuContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consequatur!
            </LieMenuContent>
          </UlMenuContent>
        </CourseContSectWrapper2>
      </CourseContSection>
    </CourseContSect>
  );
};

export default CourseContent;
