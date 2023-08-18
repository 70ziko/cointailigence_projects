# npm packages - rules
All frontend modules should be installed with --save-dev parameter  
They will be compiled by webpack and placed in a public directory 
Only backend npm modules are needed for productive build & run

# 1. DEV: run as standalone webpack server (webpack only, no backend)
`npm run start-webpack-dev` 

# 2. DEV: run as standalone nodeJS server (express + webpack middleware)
`npm run start-node-dev`

# 3. PRD: build static JS files (placed in backend/build)
`npm run build-webpack-prd`  

# 4. PRD: run as standalone nodeJS server (express + static js files)
`npm run start-node-prd`
