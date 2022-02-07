const styles = {
  borderRadius: "50px",
  display: "inline-block",
  margin: 0,
  overflow: "hidden",
  padding: 0,
};

type PaperProps = {
  children: any;
  color: string;
  diameter: number;
  style: object;
};

const Paper = ({
  children,
  color,
  diameter,
  style: styleOverrides,
}: PaperProps) => (
  <div
    className="paper"
    style={{
      ...styles,
      backgroundColor: color,
      height: diameter,
      width: diameter,
      ...styleOverrides,
    }}
  >
    {children}
  </div>
);

export default Paper;
