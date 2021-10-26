import React from 'react';

export default function ReportIncident() {
    return (
        <div>
        <ul>
            <li><a href="/dashboard">DashBoard</a></li>
            <li><a href="/generateReports">Generate Report</a></li>
            <li><a class="active" href="/reportIncident">Report Incident</a></li>
            <li><a href="/closedIncidents">Recall closed Incidents</a></li>
        </ul>
        <h2> Report Incident </h2>
    </div>
        
    );
}