import React from "react";

import "../styles/backgrounds.css";
import "../styles/pages/Projects_page.css";
import "../styles/icon.css";
import "../styles/button.css";
import "../styles/icon.css";
import "../styles/media-queries/Projects_page_query.css";

import projects from "../data/projects";
import icon from "../data/iconmap";

class ProjectsPage extends React.Component {
    state = {
        data: projects,
    }

    render() {
        return (
            <div className="back1" >
                <div className="projects-page">
                    <div className="left3">
                        {this.state.data.map(project => <div className="panel">
                            <div className="glass inner-block">
                                <h1 className="title2">{project.title}</h1>
                                <div className="stack">
                                    {project.technology.map(e => <img className="icon2" src={e.path} alt={e.alt} />)}
                                </div>
                                <div className="buttons">
                                    {
                                        project.code !== "" ? (
                                            <button className="btn3 inbtn2" onClick={() => window.open(project.code)}>
                                                See code
                                                <img className="icon3" src={icon.Code.path} alt={icon.Code.alt} />
                                            </button>
                                        ) : null
                                    }
                                    {
                                        project.link !== "" ? (
                                            <button className="btn3 inbtn2" onClick={() => window.open(project.link)}>
                                                Pay a visit
                                                <img className="icon3" src={icon.Web.path} alt={icon.Web.alt} />
                                            </button>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="right3">
                        {/* <img className="hand-img" src="/images/9_Hands_Snow_globe (3).png" alt="test" onLoad={() => { this.setState({ loaded: true }); console.log("loaded") }} /> */}
                        <img className="hand-img" src="/images/9_Hands_Snow_globe (3).png" alt="test" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;