#!/bin/bash
echo 'installing client modules be patient...'
echo ' '
cd client && npm install && cd ..
echo ' '
echo 'install server modules be patient...'
echo ' '
cd server && npm install && cd ..
echo ' '
echo 'install socket modules be patient...'
echo ' '
cd socket && npm install && cd ..
echo ' '
echo 'NOW SIT DOWN AND ENOJY!'
echo 'running the software please wait some times...'
echo ' '
cd client && npm run all