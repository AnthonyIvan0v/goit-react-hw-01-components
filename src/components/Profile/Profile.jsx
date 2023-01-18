import PropTypes from "prop-types";
import { ProfileCard, Img, Name, Tag, Location, StatisticsList, StatisticsListItem, Quantity, Label } from './Profile.styled'

export default function Profile({ avatar, username, tag, location,stats }) {
    return (<ProfileCard className="profile">
  <div className="description">
    <Img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
      <Name className="name">{username}</Name>
      <Tag className="tag">@{tag}</Tag>
    <Location className="location">{location}</Location>
  </div>

  <StatisticsList className="stats">
    <StatisticsListItem>
      <Label className="label">Followers</Label>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </StatisticsListItem>
    <StatisticsListItem>
      <Label className="label">Views</Label>
      <Quantity className="quantity">{stats.views}</Quantity>
    </StatisticsListItem>
    <StatisticsListItem>
      <Label className="label">Likes</Label>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </StatisticsListItem>
  </StatisticsList>
</ProfileCard>)
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      
    }
  ).isRequired
}













