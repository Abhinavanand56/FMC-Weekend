
import Classes from "./Section.module.css";

function Section() {
  return (
    <div className={Classes.section}>
    <div className={Classes.row}>
      <div className={Classes.column}>
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <div className={Classes.column}>
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
    </div>
    </div>
  );


}
export default Section;