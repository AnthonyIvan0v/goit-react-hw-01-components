
export default function Statistics({ title, stats }) {
  const elements = stats.map(({ id, label, percentage }) =>
 (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>));

    return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
       <ul className="stat-list">
      {elements}
      </ul>
    </section>  
    )
}