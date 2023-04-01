import styled from '@emotion/styled'

const ContactsList = styled.li`
padding-bottom: 10px;
//  display: flex;
align-items: center;
text-content: center:
 gap: 15px;
 `;

const FeedbackButton = styled.button`
  
width: 60px;
  border-radius: 4px;
  font-size: 14px;
  padding: 2px 0;
  border: 1px solid gray;
    &:hover {
    background-color: #bbe4e9;
    font-weight: 700;
    color: #f95959;
  }
`;

export { ContactsList, FeedbackButton };
