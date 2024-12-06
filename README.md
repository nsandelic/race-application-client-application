# Race Application Client Application

This repository contains the frontend client for our application, using the Command and Query services for requests.
Applicantion is used by Applicants who can see list of races and apply for race, or delete application.
Administrators manage races. Application is used as STOMP client , and upon recieving event from Command service, it sends it to the Query service.
### NOTE
Application is currently setup for local deployment

## Prerequisites

- **Angular 19**
- **Command and Query services**
```bash
git clone https://github.com/nsandelic/race-application-query-service.git
git clone https://github.com/nsandelic/race-application-command-service.git
```

## Key Features

- Displaying and managing races and applications
- Role based auth
- STOMP event client

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/nsandelic/race-application-client-application.git
```

### 2. Install and Run

App require Command and Query services to be running.
Execute to install
```bash
npm install
```
Execute to run localy
```bash
npm ng serve
```
