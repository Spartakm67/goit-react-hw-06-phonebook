import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 50px;   
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #8b00ff;
   `;

export const IfEmpty = styled.p`
   color: green;
   font-size: 25px;
   font-weight: 500;
`;

export const DefaultButton = styled.button`
  width: 150px;
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