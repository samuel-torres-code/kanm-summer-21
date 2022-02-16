# react-flask-kanm-public
The public version of the starter code for the new KANM website

## What you will need:
Node.js v16.14.0
Python3 v3.8.10

## Words of Wisdom

* I would reccomend using WSL Ubuntu for this project. 

  * If you don't know what it is please look into it before moving forward. 

* I will be using VSCode for all presentations like this, so it would be easier to use VSCode for this project.

* Another thing to note is you need Git installed to even work on this project, so please install that if you haven't

  *  WSL Ubuntu, Mac and Linux should have it pre-installed

* Mac users don't have to worry about WSL Ubuntu as their terminal supports most of these commands natively

* Linux users you scare me. You shouldn't have any issue with this.


## Cloning the files

* First, create a folder to store files for this project

  * I use my Documents folder

* Open that folder in VSCode

* Reopen that folder in WSL Ubuntu if you are running Windows

* Select Terminal > New Terminal

* To copy the files from this repository to your computer, use the following command:

`git clone https://github.tamu.edu/KANM/react-flask-kanm-public.git`

  * It should ask you for your username and password for GitHub (use your @tamu.edu one).

* The files should be copied to your directory in a folder titled "react-flask-kanm-public"

### Congratulations you have the beginnings of the new KANM Webiste now on your computer!


![Smile](https://c.tenor.com/R-qraEi25W4AAAAM/emoji.gif)


## Setting up the backend (Flask)

* Go ahead and open the new react-flask-kanm-public folder in a new VSCode window to make things easier

  * **Don't forget to reopen with WSL Ubuntu**

* There should be two folders inside ("client" and "flask-server")

* Open up a new terminal in VSCode and cd into the flask-server folder

* To synchronize what things we all have installed on our machines we have to use something called a Virtual Environment for Python

  * If you want to learn more about virtual environments, click [here](https://realpython.com/python-virtual-environments-a-primer/)

* First of all, check if you even have Python installed on your machine by typing:
`python3 -V`

* If nothing shows up, install Python3 for your system
  * If you are using WSL, use the commands for Python 3.8 found [here](https://docs.python-guide.org/starting/install3/linux/)

* After Python 3.8.10 is installed, we need to create a virtual environment to run our python code with
  * **Make sure you are currently in the flask-server directory**
  * Then, use the following commands:

`python3 -m venv venv

source venv/bin/activate

pip3 install -r requirements.txt`

* If you ran into any errors, look at the error messages carefully and try and figure it out.

  * One error I encountered was having to install a dependency for python3 to create virtual environment
 
    * To fix it i ran the command I was given, it said something like "sudo apt install python3-env" but don't quote me on it

* all went well, we can now run our backend using the following command:

`python3 server.py`

* The Terminal should look like this:

![image](https://media.github.tamu.edu/user/14956/files/0ad7ea80-8e90-11ec-99b3-409421fdb4af)

*  To test this, you can go to http://127.0.0.1:5000/members

 *  A list of all of the committee members names should show up.
 
 *  **However, http://127.0.0.1:5000/ should take you nowhere.** We will fix this by starting our frontend
 
  *  We will fix this by starting our frontend

## Setting up the Front-End

* Go ahead and open up another Terminal in VSCode by going to Terminal > New Terminal

 * We have to run the frontend and backend at the same time, so don't close your old window

* Next, we have to check if we have Node.js installed

 * If you do not, please follow this [tutorial](https://medium.com/geekculture/how-to-install-node-js-by-nvm-61addf4ab1ba)

* To see if we successfully have Node.js installed, use the command:

`node -v`

 * If the version that shows up isn't >16.14 you may have problems ahead.
 
 * Using Node Version Manager is ideal for this situation. Again see this [link](https://medium.com/geekculture/how-to-install-node-js-by-nvm-61addf4ab1ba) for more details.

* Once Node.js is installed, use the VSCode terminal to navigate to our client folder

 * This contains our React app (frontend)

* To install the dependencies for the frontend, run the following command:
`npm install`

 * This may take a while, so be patient
 
* After everything is done installing, you can start the frontend with the following command:
`npm start`

* If all goes well, you should see this in your console:

![image](https://media.github.tamu.edu/user/14956/files/50e57c00-8e99-11ec-9750-c03a28c35958)
 * VSCode will auto open your browser to localhost:3000
  * If it doesn't, go to localhost:3000 in Chrome or Firefox

* You should see the list from the backend that we saw earlier displayed on your screen.

If you made it this far, I congratulate you!

![image](https://media.github.tamu.edu/user/14956/files/b6d20380-8e99-11ec-9d82-edf9655f2e05)

Feel free to poke around the code and make changes on your own. Please don't push anything. Thanks.
-Sam





