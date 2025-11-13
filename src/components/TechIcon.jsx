function TechIcon({ icon, size = 20 }) {
  if (!icon || !icon.hex || !icon.path) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${icon.hex}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '6px',
      }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export default TechIcon;