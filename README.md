# react-flask-kanm-public
The public version of the starter code for the new KANM website

#What you will need:
Node.js v16.14.0
Python3 v3.8.10

#Words of Wisdom

I would reccomend using WSL Ubuntu for this project. If you don't know what it is please look into it before moving forward. 
I will be using VSCode for all presentations like this, so it would be easier to use VSCode.
Another thing to note is you need Git installed to even work on this project, so please install that if you haven't (WSL has it installed already).

#Cloning the files

First, create a folder to store files for this project. I use my Documents folder.

Open that folder in VSCode

Reopen that folder in WSL Ubuntu if you are running Windows.

Select Terminal > New Terminal

To copy the files from this repository to your computer, use the following command:
git clone https://github.tamu.edu/KANM/react-flask-kanm-public.git

It should ask you for your username and password for GitHub (use your @tamu.edu one).

The files should be copied to your directory in a folder titled "react-flask-kanm-public"

Congratulations you have the beginnings of the new KANM Webiste now on your computer!

#Setting up the backend (Flask)

Go ahead and open the new react-flask-kanm-public folder in a new VSCode window to make things easier.
Don't forget to reopen with WSL Ubuntu.

There should be two folders inside ("client" and "flask-server")

Open up a new terminal in VSCode and cd into the flask-server folder.

To synchronize what things we all have installed on our machines we have to use something called a Virtual Environment for Python.

First of all, check if you even have Python installed on your machine by typing:
python3 -V

If nothing shows up, install Python3 for your system. 
If you are using WSL, use the commands for python3.8 found here https://docs.python-guide.org/starting/install3/linux/

After Python 3.8.10 is installed, we need to create a virtual environment to run our python code in.
Make sure you are currently in the flask-server directory and use the following commands:

python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt

If you ran into any errors, look at the error messages carefully and try and figure it out.
One error I encountered was having to install a dependency for python3 to create virtual environment.
To fix it i ran the command I was given, it said something like "sudo apt install python3-env" but don't quote me on it.

If all went well, we can now run our backend using the following command.
python3 server.py

The terminal should say something like "Running on http://127.0.0.1:5000/" which means your backend is now running.

To test this, you can go to http://127.0.0.1:5000/members and you should be able to find your name on the list.
However, http://127.0.0.1:5000/ should take you nowhere. We will fix this by starting our frontend.





