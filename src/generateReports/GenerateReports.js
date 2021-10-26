import React from 'react';

export default function GenerateReports() {
    return (
        <div>
            <ul>
                <li><a href="/dashboard">DashBoard</a></li>
                <li><a class="active" href="/generateReports">Generate Report</a></li>
                <li><a href="/reportIncident">Report Incident</a></li>
                <li><a href="/closedIncidents">Recall closed Incidents</a></li>
            </ul>
            <h2> Generate Reports </h2>
        </div>

    );
}