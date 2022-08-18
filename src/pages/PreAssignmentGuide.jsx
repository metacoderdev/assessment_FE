import React from 'react';
import styled from 'styled-components';

const PreAssignmentGuide = () => {
  return (
    <Container>
      <Section>
        <Title>
        Hướng dẫn bài tập trước khóa Metacoders Assessment
        </Title>
      </Section>
      <Section>
        <OrderedList>
          <GuideList>
          Cài đặt&nbsp;
            <PointColorText textColor="coral">ESLint</PointColorText>
            &nbsp;extension của vscode.
          </GuideList>
          <GuideList>
          Cài đặt &nbsp;
            <PointColorText textColor="coral">Prettier</PointColorText>
            &nbsp;extension của vscode.
          </GuideList>
          <GuideList>
          Hãy sử dụng vscode settings.json cho <PointColorText>workspace</PointColorText>
          của bạn. Nhấn phím tắt [
            <PointColorText textColor="coral">command + ,</PointColorText>] 
            trong vscode để hiển thị cửa sổ cài đặt.
          </GuideList>
          <GuideList>
          styled-components không cung cấp chức năng tự động hoàn tất. Hãy cài và sử dụng&nbsp;
            <PointColorText textColor="coral">
              vscode-styled-components&nbsp;
            </PointColorText>
            extension.
          </GuideList>
          <GuideList>
          Hãy giải quyết&nbsp;
          <PointColorText textColor="coral">
          5 bài tập Assignment
            </PointColorText>
            &nbsp;có trong &nbsp;
            <PointColorText textColor="coral">
              Github Repository Issue
            </PointColorText>
      
          </GuideList>
          <GuideList>
          Không xóa file page và hãy xóa&nbsp;
            <PointColorText textColor="coral">
            import và component
            </PointColorText>
            trong App.js.
          </GuideList>
        </OrderedList>
      </Section>
    </Container>
  );
};

export default PreAssignmentGuide;

const Container = styled.div`
  min-height: 100vh;
  background-color: lightGray;
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex-direction: column;
`;
const Section = styled.section`
  padding-top: 20px;
`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
`;
const OrderedList = styled.ol`
  list-style-position: inside;
  list-style-type: decimal;
  text-align: center;
  font-size: 28px;
`;
const GuideList = styled.li`
  line-height: 70px;
`;
const PointColorText = styled.p`
  color: ${(props) => props.textColor};
  display: inline;
`;
