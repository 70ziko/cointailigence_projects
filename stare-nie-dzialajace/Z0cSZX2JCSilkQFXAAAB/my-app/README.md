# 1. DEV: run as standalone nodeJS server (express)
`npm run start-node-dev`

# 2. DEV: run a docker image (express + attach to network)
`docker-compose up --build`

# 3. PRD: Full build on Windows (image)  
`build.bat`

# 4. PRD: Run as detached
`docker-compose -f .\docker-compose.prd.yaml up --detach`
