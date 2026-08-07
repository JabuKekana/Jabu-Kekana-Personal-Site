export default function SkillGroup({ group, open, onToggle }) {
  return (
    <div className={`skills__content ${open ? "skills__open" : "skills__close"}`}>
      <div className="skills__header" onClick={onToggle}>
        <i className={`${group.icon} skills__icon`}></i>
        <div>
          <h1 className="skills__title">{group.title}</h1>
          <span className="skills__subtitle">{group.subtitle}</span>
        </div>
        <i className="uil uil-angle-down skills__arrow"></i>
      </div>
      <div className="skills__list grid">
        {group.skills.map(([name, percentage, className]) => (
          <div className="skills__data" key={name}>
            <div className="skills__titles">
              <h3 className="skills__name">{name}</h3>
              <span className="skills__number">{percentage}</span>
            </div>
            <div className="skills__bar">
              <span className={`skills__percentage ${className}`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
