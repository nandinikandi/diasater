import React from 'react';

export default function Dashboard(){
    return(
        <div>
            <ul>
            <li><a class="active" href="/dashboard">DashBoard</a></li>
            <li><a href="/generateReports">Generate Report</a></li>
            <li><a href="/reportIncident">Report Incident</a></li>
            <li><a href="/closedIncidents">Recall closed Incidents</a></li>
        </ul>
        <h2> General Information </h2>
        </div>              
    );
}