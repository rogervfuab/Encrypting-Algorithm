# Encrypting-Algorithm

# Worldsensing Technical Test Description

Name: Roger Vera Filella

Date: march 2023

##Introduction


Before you start executing this app, you need to have installet two things:

	- Docke
	
	- Node.js

If you don't have one of this two things installed, you have to go to the webside an install:
	
	- Docker --> https://www.docker.com/products/docker-desktop

	- Node.js --> https://nodejs.org/
	

After you have installed Node.js, you will see that a terminal will show up, please install all the dependencies.

With Docker will be diferent, Docker unpack for itself, you only need to click on 'ok' when docker-desktop.exe opens, an itself will install all the depencies.

I try to put all in a Docker, but the Docker doesn't run okay, so I create another thing to execute.


## Step by Step


As we can see in the repository, we have two directorys, one is Docker and one is worldsensing.

Download the repository:

If you go to Docker:
	
	First of all, as I explain before, it doesn't work, but is there, because if you want to see how I did it.
	
	After this if you want to run it, put this into the terminal:
		
		1. Open the directory:
			*cd path/Encrypting-Algorithms/Docker*

		2. Run this:		
			*docker-compose up*

If you want to use the app = Encrypting algorithms you have to do:

	1. Open a terminal

	2. Go to the directory worldsensing and istall all the requirements:
		*cd path/Encrypting-Algorithms/worldsensing*
		*pip install -r requirements.txt* 

	3. Go to the directory Backend,that you there is in the directory worldsensing,where you are right now:
		*cd /Backend*

	4. Execute the backend that is called main.py:
		*python3 main.py*

	5. Now we have our API running

	6. Open another terminal, without closing this one(if you close it, the api don't run and we can not make requests)

	7. Open the directory wordsensing:
		*cd path/Encrypting-Algorithms/worldsensing

	8. execute this to view the frontend:
		*npm start*

	9. After this starts, it will show up a page in the browser, if it is not the case, please go to you browser and write this:
		'http://localhost/3000' --> this is where React is from default.

	10. When you are in the localhost, you can start using the app.
