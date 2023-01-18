import styled from "@emotion/styled";

export const Item = styled.li`
    width: 200px;
    height: 60px;
    border: 1px solid orange;
    border-radius : 5px ;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;
    padding: 8px;
`
export const List = styled.ul`
    margin:25px auto;
    padding:0;
    flex-direction: column;
    display:flex;
    gap: 15px;
    width: 200px;
    height: auto;
`
export const Status = styled.span`
    margin:auto 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'orange')};
`

export const Name = styled.p`
    font-size: 18px;
    font-weight:700 ;
    letter-spacing: 0.15em;
`