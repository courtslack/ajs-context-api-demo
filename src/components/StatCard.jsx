const StatCard = ({ number, label }) => {
  return (
    <div className="stat-card">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default StatCard
