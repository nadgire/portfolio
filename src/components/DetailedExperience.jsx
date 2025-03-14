import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";

const DetailedExperience = () => {

    const expArray = [
        {
            company: "Billennium India Pvt. Ltd.",
            designation: "PEGA Application Specialist",
            duration: "May 2024 – Aug 2024",
            responsibilities: [
                "Led the management of major incidents affecting critical PEGA-based applications, ensuring swift resolution within defined SLAs.",
                "Coordinated cross-functional teams including Developers and QA to diagnose and mitigate incidents, minimizing business impact.",
                "Collaborated closely with Developers and QA teams to process change requests and service requests, ensuring adherence to established procedures and timelines.",
                "Collaborated with technical teams to resolve critical P0/P1 issues, restoring application functionality within stringent SLAs.",
                "Fostered effective communication channels to enhance stakeholder satisfaction and facilitate prompt issue resolution."
            ]
        },
        {
            company: "TSYS, A Global Payments Inc.",
            designation: "Operations Analyst II",
            duration: "Aug 2019 to May 2024",
            responsibilities: [
                "Troubleshooting incidents that occurred.",
                "Monitoring organization’s digital platforms including Database, file transfer, network, and datacenter with the help of monitoring tools.",
                "Participating in change management and supporting various changes across multiple segments including datacenter migration, performing disaster recovery activities, Windows patching, etc.",
                "Knowledge of RAID configuration, file system management, file permissions, user and group management, file swap utilization, Orchestration on Unix environment.",
                "Performed monthly Unix/Linux patching and upgraded Unix/Linux servers from old version to latest version.",
                "Using proper ITIL process to handle events and severity issues.",
                "Running incident/issue bridge calls.",
                "Well-versed with Jira ticketing tool and ICD ticketing tool."
            ]
        },
        {
            company: "IBM India Pvt. Ltd.",
            employer: "Softenger India Pvt. Ltd.",
            designation: "Operations Analyst II",
            duration: "Aug 2019 to May 2024",
            responsibilities: [
                "Web-based and application-based front-end monitoring & support.",
                "Application support 24X7.",
                "Technical support to applications using automation tools pre-designed and scripted for operations at L0 level.",
                "Monitoring application alerts and escalating them to particular teams and their levels (L0, L1, L2, L3) as per priority (P1, P2, and P3).",
                "Handling escalation issues at L1, L2, and L3 levels.",
                "Handling ticket backlog count, coordinating, and following up to resolve/close aging tickets.",
                "Resolving high priority/escalated tickets.",
                "Handling Remedy tool for creating user, resetting password, etc.",
                "Deployment of new application on HP tools.",
                "Deletion of application from HP tools."
            ]
        },
        {
            company: "G. H. Raisoni College",
            designation: "Lab Assistant",
            duration: "Aug 2015 to May 2016",
            responsibilities: [
                "Worked as Lab assistant during year gap at my own departmet.",
                "My main responsibility was to format computers, install OS, necessary softwares for the semister so that students can practice.",
                "Keep the track the number of students using the lap eqipments.",
                "Keep track of number of computers, LAN/WAN and other devices.",
                "Hardware and software maintenance of the computer lab.",
                "Conducting the online university test at semister end.",
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="experience" className="pt-32 pb-16 relative px-6 lg:px-10 md:w-[80%] mx-auto">
            <div className="flex items-center justify-center gap-3 text-shadow-sm">
                <FaBriefcase className="text-6xl" />
                <span className="text-center text-4xl font-bold">
                    Professional <span className="text-shadow-sm text-blue-900">Experience</span>
                </span>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {expArray.map((item, index) => (
                    <div key={index} className="w-full bg-white p-6 rounded-lg shadow-lg shadow-blue-100">
                        <h3 className="text-2xl font-semibold text-orange-400">{item.company}</h3>
                        <p className="text-xl text-blue-800">{item.employer}</p>
                        <p className="text-md text-blue-500">{item.designation}</p>
                        <p className="text-md text-blue-500">{item.duration}</p>

                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            {item.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-gray-600">{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DetailedExperience;
