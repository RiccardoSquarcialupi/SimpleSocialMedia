@echo installing client modules be patient...
cd client
call npm install
cd ..
@echo install server modules be patient...
cd server 
call npm install
cd ..
@echo install socket modules be patient...
cd socket
call npm install
cd ..
@echo NOW SIT DOWN AND ENOJY!
@echo running the software please wait some times...
cd client
call npm run all