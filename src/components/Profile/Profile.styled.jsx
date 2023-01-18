import styled from '@emotion/styled'

export const ProfileCard = styled.div`
  width: 300px;
  margin: 10% auto;
  padding-top: 10px;
  border: 1.5px solid orange;
  border-radius: 5%;
  text-align: center;
  overflow: hidden;
`
export const Img = styled.img`
  height: 150px;
  border-radius: 50% 50%;
  background-color: orange;
`
export const Name = styled.p`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-align: center;
`
export const Tag = styled.p`
  color:gray;
  font-weight:600;
  font-size: 16px;
  letter-spacing: 0.05em;
`
export const Location = styled.p`
 letter-spacing: 0.04em;
 font-weight:600;
 color:gray;
`
export const StatisticsList = styled.ul`
  list-style:none;
  display: flex;
  gap: 10px;
  background-color: #f7f6f6;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 50px;
  align-items: basline;
`
export const StatisticsListItem = styled.li`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`
export const Label = styled.span`
  color: gray;
  font-weight: 500;
  letter-spacing: 0.03em;
`
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.03em;
`

