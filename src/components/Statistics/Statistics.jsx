import PropTypes from "prop-types";
import { SectionCard, Title, List, ListItem, Label, Percentage } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  const elements = stats.map(({ id, label, percentage }) =>
 (
    <ListItem className="item" key={id}>
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>   
    </ListItem>));

    return (
    <SectionCard className="statistics">
      <Title className="title">{title}</Title>
       <List className="stat-list">
          {elements}
      </List>
    </SectionCard>  
    )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

    })
  ).isRequired
}