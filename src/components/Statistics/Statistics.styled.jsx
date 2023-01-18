import styled from "@emotion/styled";

export const SectionCard =  styled.section`
    width: 300px;
    height: 150px;
    border: 1px solid orange;
    border-radius: 10% 10%;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
`
export const Title = styled.h2`
    text-transform: uppercase;
    letter-spacing: 0.09;
    font-weight: 800;
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 55%;
`
export const ListItem = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    border: 1px solid orange;
   
`
export const Label = styled.span`
    font-size: 14px;
    font-weight:500 ;
    letter-spacing: 0.09;
    color: gray;
    
`
export const Percentage = styled.span`
    font-size: 22px;
    font-weight:700 ;
    letter-spacing: 0.09;
   
`