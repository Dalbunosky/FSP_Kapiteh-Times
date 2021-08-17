Git process
-----------------------------------------------------------------------
Starting new project on github:

git init

git remote add origin https://github.com/Dalbunosky/OfferDown


To start work:
    (Make sure you're on your branch)

    git pull https://github.com/Dalbunosky/FSP_Kapiteh-Times.git


To submit work:
    (Make sure you're on your branch)

    git add .

    git commit -m "***"

    git checkout master 

    git pull https://github.com/Dalbunosky/FSP_Kapiteh-Times.git

    git checkout ______ <-- your branch's name

    git rebase master

    git push origin ______  <-- your branch's name

    on github page Create pull request ADD REVIEWER on top right

Servers:
    Front: npm run webpack
    End: rails s -p 3000


Reformat Date
Remove profile picture
Put on heroku