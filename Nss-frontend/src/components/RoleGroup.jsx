import PropTypes from 'prop-types';

const RoleGroup = ({ icon: Icon, title, subtitle, accent }) => (
  <div className="role-group-header" style={{ '--accent': accent }}>
    <div className="role-group-icon">
      <Icon />
    </div>
    <div className="role-group-text">
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

RoleGroup.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  accent: PropTypes.string.isRequired,
};

export default RoleGroup;
