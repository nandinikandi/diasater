import React from 'react';

export default function ClosedIncidents() {
    return (
        <div>
        <ul>
            <li><a href="/dashboard">DashBoard</a></li>
            <li><a href="/generateReports">Generate Report</a></li>
            <li><a href="/reportIncident">Report Incident</a></li>
            <li><a class="active" href="/closedIncidents">Recall closed Incidents</a></li>
        </ul>
        <h2> Recall closed Incidents </h2>
    </div>
        
    );
}