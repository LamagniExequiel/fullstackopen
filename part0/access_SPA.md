```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: the document
    deactivate server

    Note right of browser: el HTML document solicita dos nuevas solicitudes HTTP GET, para obtener el archivo CSS y el archivo js

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: el archivo js hace una solicitud HTTP GET,para obtener el archivo data.json 
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the notes list, [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
