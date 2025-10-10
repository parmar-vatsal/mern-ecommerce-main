# How to Run the Project

## Install Dependencies
```bash
cmd /c "cd web_panel && npm install"
cmd /c "cd ../web_admin && npm install"
cmd /c "cd ../web_panel && npm install"
```

## Start the Services
Open three terminals and run the following commands:

### Backend API
```bash
cmd /c "cd web_services && npm start"
```
URL: http://localhost:5002/

### Admin Panel
```bash
cmd /c "cd web_admin && npm start"
```
URL: http://localhost:5003/

### User Panel
```bash
cmd /c "cd web_panel && npm start"
```
URL: http://localhost:5001/

