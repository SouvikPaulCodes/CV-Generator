import { useRef } from "react";
import '../styles/Resume.css'

export function Resume({clBack, change, data}) {
    const resumeRef = useRef();

    const handleDownload = () => {
        window.scrollTo(0, 0);
      
        setTimeout(() => {
          const element = resumeRef.current;
          const opt = {
            margin: 0.5,
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
          };
      
          if (element && window.html2pdf) {
            element.classList.add('pdf-mode');
      
            window.html2pdf()
              .set(opt)
              .from(element)
              .save()
              .then(() => {
                element.classList.remove('pdf-mode');
              });
          } else {
            console.error("html2pdf not available on window");
          }
        }, 100);
    };
      

    const personal = data.personal;
    const education = data.education;
    const experience = data.experience;
    const projects = data.projects;
    const achievements = data.achievements;

    return (
        <div className={clBack + " resOverall"}>
            <main className="resume" ref={resumeRef}>
                <div className="resPerson">
                    <h1 className="resName">{personal.name}</h1>
                    <div className="socials">
                        <div className="resPhone">{personal.phone}</div>
                        <div className="resEmail">{personal.email}</div>
                    </div>
                </div>
                <div className="resEdu">
                    <h2 className="resEduHead">Education</h2>
                    <ul className="eduList">
                        <li className="resDegCol">{education.degree + ', ' + education.college}</li>
                        <li className="resSchool">{education.school}</li>
                    </ul>
                </div>
                {experience.length>0 && (
                    <div className="resExp">
                        <h2 className="resExpHead">Experience</h2>
                        <ol className="expList">
                            {experience.map(exp => {
                                return (
                                    <li key={exp.id} className="resExpBlock">
                                        <h3 className="resJob">{exp.job + ", " + exp.company}</h3>
                                        <div className="resDesc">{exp.desc}</div>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )}
                {projects.length>0 && (
                    <div className="resPro">
                        <h2 className="resProHead">Projects</h2>
                        <ol className="proList">
                            {projects.map(pro => {
                                return (
                                    <li key={pro.id} className="resProBlock">
                                        <h3 className="resProjName">{pro.projName}
                                            <ul className="proDetList">
                                                <li className="resStack">Tech Stack: {pro.stack}</li>
                                                { pro.det.length>0 && <li className="resDet">{pro.det}</li>}
                                            </ul>
                                        </h3>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )}
                {achievements.length>0 && (
                    <div className="resAch">
                        <h2 className="resAchHead">Achievements</h2>
                        <ul className="AchList">
                            {achievements.map(ach => {
                                return (
                                    <li key={ach.id} className="resAchBlock">{ach.ab}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </main>
            <div className="resBut">
                <button className="edit" onClick={change}>Edit</button>
                <button className="download" onClick={handleDownload}>Download Resume</button>
            </div>
        </div>
    )
}